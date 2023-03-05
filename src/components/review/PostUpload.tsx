import { ChangeEvent, useEffect } from "react";
import { useState } from "react";

interface PostUploadProps {
  getPost: (currentPost: string) => void;
  defaulted: string | undefined
}

const PostUpload = ({getPost, defaulted}: PostUploadProps): JSX.Element => {
  const [content, setContent] = useState<string>()

  const sendPost = (e : ChangeEvent<HTMLTextAreaElement>) => {
    setContent(e.currentTarget.value)
  }

  useEffect(() => {
    setContent(defaulted)
    const textarea : any = document.querySelector(".content-box")
    textarea.innerHTML = defaulted !== undefined ? defaulted : ""
  }, [defaulted])

  useEffect(() => {
    content !== undefined ? getPost(content) : getPost("")
  }, [content])

  return (
    <div className="mt-6">
      <label
        htmlFor="reviewText"
        className="block pb-2 text-lg font-bold text-green-4"
      >
        리뷰
      </label>
      <textarea
        id="reviewText"
        className="content-box block p-4 py-6 w-full h-44 font-semibold text-sm text-gray-900 rounded-lg bg-gray-100 outline-0"
        placeholder="음식의 맛, 양, 포장 상태 등 음식에 대한 솔직한 리뷰를 남겨주세요."
        required
        onChange={sendPost}
      >{defaulted}</textarea>
    </div>
  );
};

export default PostUpload;
