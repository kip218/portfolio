---
title: "OSINT, SIEMS, and Data Processing Part 2: Processing data with PySpark"
date: "2023-03-28"
---

Continuing from the previous post - the analysis summary was that the victim computer was infected with a cryptocurrency mining malware called "Adylkuzz". For the second part of the lab, I was given additional log files. The size of the log files were too large for me to sift through manually. I had to use PySpark, the Python API for Apache Spark, to process the log data and identify further IOCs (Indicators of Compromise) using OSINT tools like VirusTotal. All this was done on a Jupyter notebook to document my process.

&nbsp;

## Imports

I first imported all necessary modules.

![](/blog-images/OSINT_SIEMS/jupyter1.png)

&nbsp;

## Parsing Log Files into DataFrames

Then I parsed all provided log files into PySpark DataFrames.

![](/blog-images/OSINT_SIEMS/jupyter2.png)

&nbsp;

## Processing DataFrames by Log Type

I filtered out the relevant columns for each log type. Below are examples for DNS, Files, and HTTP logs. My intent is to use the filtered data to fill out the IOC cache with potential IOC data. Once the IOC cache has enough entries, I will use the VirusTotal API to query for actual Indicators of Compromise.

**DNS**
![](/blog-images/OSINT_SIEMS/jupyter3.png)

**Files**
![](/blog-images/OSINT_SIEMS/jupyter4.png)

**HTTP**
![](/blog-images/OSINT_SIEMS/jupyter5.png)

&nbsp;

## The IOC Cache

Here we can see all unique IPs, URLs, and file hashes that I have identified from the log files.

![](/blog-images/OSINT_SIEMS/jupyter6.png)

&nbsp;

## Using VirusTotal API to Identify IOCs

First I queried only the IP addresses and file hashes from the IOC cache to the VirusTotal API.

None of the file hashes were actual IOCs, but a few IP addresses were identified as IOCs according to VirusTotal.

![](/blog-images/OSINT_SIEMS/jupyter7.png)

Then I queried the URLs from the IOC cache to the VirusTotal API. I did run into some rate-limiting issues since I was using a free API key from VirusTotal.

Before I was rate-limited, I was able to find a few malicious URLs that were IOCs.

![](/blog-images/OSINT_SIEMS/jupyter8.png)

&nbsp;

## Summary

Here we can see how many times these IOCs appear in our log files. This means that network traffic to and from the victim computer had some malicious traffic.

One of the IOCs is an IP address of `icanhazip.com`, which can be used by malware to identify the victim host's public-facing IP address.

Surprisingly, most of these IOCs were unrelated to the cryptocurrency mining malware. It seems that the infected computer not only had the cryptocurrency miner malware, but also potential contacts with other kinds of malicious traffic.

![](/blog-images/OSINT_SIEMS/jupyter9.png)
