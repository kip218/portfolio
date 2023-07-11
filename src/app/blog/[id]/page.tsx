import Date from "@/components/Date";

import { getAllPostIds, getPostData } from "@/lib/blogUtil";

// -< Post >-
export default async function Post({ params }: Props) {
  const postData: PostData = await getPostData(params.id);

  return (
    <div className="flex flex-col items-center justify-center p-12 bg-light-bg dark:bg-dark-bg">
      <div className="prose">
        {/* Post Title */}
        <h1 className="font-extrabold text-3xl dark:text-gray-300">
          {postData.title}
        </h1>

        <div className="font-medium">
          <Date dateString={postData.date} />
        </div>

        {/* Post Content */}
        <div dangerouslySetInnerHTML={{ __html: postData.contentHtml }} />
        <div className="divider">
          <a href="/blog" className="link">
            Back
          </a>
        </div>
      </div>
    </div>
  );
}
