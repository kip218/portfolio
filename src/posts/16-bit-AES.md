---
title: "SunshineCTF 2019 Writeup: 16-bit-AES"
date: "2019-04-14"
---

[Original Writeup on Github](https://github.com/kip218/CTF-writeups/tree/master/16-bit-AES)

**Category:** Crypto  
**Points:** 100  
**Author:** ps_iclimbthings  
**Description:**

> Why so small?
>
> nc archive.sunshinectf.org 19003

## Write-up

There were two ways of solving this challenge. One way was much easier than the other, and I doubt it was the intended solution.  
I will first explain the proper way, and then go over the easier way.

### Challenge explanation

When I first connect to the server, I get the following message:

![](/blog-images/16-bit-AES/image1.png)

After sending some text, it asks me to encrypt some randomly generated text with the same key:

![](/blog-images/16-bit-AES/image2.png)

If I give it the correctly encrypted ciphertext, it will give me the flag. To do this I'll have to somehow figure out the key that the server is using for encryption.

### Challenge solution

Although this first step of leaking the padding scheme wasn't really necessary to solve the challenge, I decided to do it anyway. The more I know about the challenge, the better.  
Since the server is using AES-128 in ECB mode, the encryption is deterministic. If I give it the same plaintext block, it will always respond with the same ciphertext. This means that I can bruteforce the padding one character at a time. For example, if I send the following plaintext which consists of 15 'A's:

```
AAAAAAAAAAAAAAA
```

the server will pad the plaintext with one unknown character.

```
AAAAAAAAAAAAAAA?
```

Then the server will encrypt the padded plaintext with its 16-bit key in ECB mode and send me the ciphertext.

Now, since the encryption method is deterministic, I can bruteforce that last character. For example, I can send the following plaintext which consists of 15 'A's and 1 'a':

```
AAAAAAAAAAAAAAAa
```

If 'a' is the right padding character, the server will send me the same ciphertext as it did when I sent only 15 'A's as the plaintext. If not, I can move on to the next possible character and continue bruteforcing all possible byte values.

Using the above technique reveals that the padding character is just a lowercase 'x'. Not too useful, but now I know that there's nothing special hidden in the padding.

---

At this point, the name of the challenge comes to my attention. A 16-bit key means a 2-byte key. For a block cipher like AES, that's not possible. The key needs to be as long as each block, which is 16 bytes. It's possible that the server just repeats the 2-byte key 8 times to get a 16-byte key, which it then uses to encrypt our plaintext. This means that if I find the correct 2 bytes, I have the key.

```python
from pwn import *
from Crypto.Cipher import AES

# We know that the padding is just 'x'
# We can get the ciphertext of 'xxxxxxxxxxxxxxxx', which is 'f4e8258d6c9930b9fc423b7df6c96739'
plaintext = 'x' * 16
ciphertext = 'f4e8258d6c9930b9fc423b7df6c96739'

def bruteforce_key(plaintext, ciphertext):
    for i in range(256):
        for j in range(256):
            key = chr(i) + chr(j)
            key *= 8
            cipher = AES.new(key, AES.MODE_ECB)
            msg = cipher.encrypt(plaintext)
            msg = msg.hex()
            if msg == ciphertext:
                print(f"Plaintext: {plaintext}\nCiphertext: {ciphertext}\nMsg: {msg}\nKey: {key}")

bruteforce_key(plaintext, ciphertext)

# The AES key is fLfLfLfLfLfLfLfL
# Time to write the solver!
```

Bruteforcing reveals the AES key to be 'fLfLfLfLfLfLfLfL'.  
All I have to do now is to connect to the server, encrypt the plaintext with the key, and send it to the server.

```python
from pwn import *
from Crypto.Cipher import AES

# Set up AES with the key we found
key = 'fLfLfLfLfLfLfLfL'
cipher = AES.new(key, AES.MODE_ECB)

# Connect to the server and give the answer!
c = remote("aes.sunshinectf.org", 4200)
c.recvuntil('Your text: \r\n')
c.sendline()
c.recvuntil('Ok, now encrypt this text with the same key: ')
plaintext = c.recvuntil('\r\n').strip()
ciphertext = cipher.encrypt(plaintext).hex()
print(f"Plaintext: {plaintext}\nCiphertext: {ciphertext}")
c.sendline(ciphertext)
print(c.recv())
c.close()
```

Running the solver above gives us the flag.

![](/blog-images/16-bit-AES/image3.png)

---

The easier solution is a little disappointing.  
The server enables me to encrypt any plaintext of our choice with its key. It also gives me the flag if I'm able to encrypt some randomly generated plaintext sent from the server. With this, all I have to do to get the flag is run two connections to the server, receive the randomly generated plaintext from one connection, and use the other connection to encrypt that plaintext, which gives me the correct ciphertext. If I send the ciphertext to the first connection, I get the flag.

![](/blog-images/16-bit-AES/image4.png)

![](/blog-images/16-bit-AES/image5.png)

![](/blog-images/16-bit-AES/image6.png)
