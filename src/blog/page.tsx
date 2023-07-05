import Date from '../components/Date'

import { getSortedPostsData } from '../lib/blog'


export default function Blog() {
  const allPostsData: AllPostsData = getSortedPostsData()
  return (
	  <ul >
	      {allPostsData.map(({ id, date, title }) => (
	        <li key={id}>
	          <div className='font-medium mb-1 mt-5'>
	            <a href={`/posts/${id}`}>{title}</a>
	          </div>
	          {/* <br /> */}
	          <small className='text-gray-500 font-medium'>
	            <Date dateString={date} />
	          </small>
	        </li>
	      ))}
	  </ul>
	)
}