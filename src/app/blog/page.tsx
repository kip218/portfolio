import Date from "@/components/Date";

import { getSortedPostsData } from "@/lib/blogUtil";

type AllPostsData = {
  date: string
  title: string
  id: string
}[]

export default function Blog() {
  const allPostsData: AllPostsData = getSortedPostsData();
  return (
    <div className="flex flex-col h-full items-center justify-center mt-20 bg-light-bg dark:bg-dark-bg">
      <h1 className="text-bold text-3xl dark:text-gray-300">My Blog</h1>
      <ul className="flex flex-col h-full items-start justify-center mt-4 mb-16">
        {allPostsData.map(({ id, date, title }) => (
          <li className="justify-start m-2" key={id}>
            <div className="font-medium mb-1 mt-5">
              <a href={`/blog/${id}`}>{title}</a>
            </div>
            {/* <br /> */}
            <small className="text-gray-500 font-medium">
              <Date dateString={date} />
            </small>
          </li>
        ))}
      </ul>
    </div>
  );
}
