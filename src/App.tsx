import { useDispatch, useSelector } from "react-redux";
import { CommentStore } from "./redux/store";

import { Comments, CommentList } from "./components";
import { FormEventHandler, useRef } from "react";
import { createComment, deleteAllComments } from "./redux/states";

function App() {
  const dispatch = useDispatch();
  const comments = useSelector((state: CommentStore) => state.comments);
  const titleRef = useRef<HTMLInputElement>(null);
  const contentRef = useRef<HTMLInputElement>(null);
  const cleanInputs = (): void => {
    titleRef.current!.value = "";
    contentRef.current!.value = "";
  };

  const handleSubmit: FormEventHandler<HTMLFormElement> = (
    e: React.FormEvent<HTMLFormElement>
  ) => {
    e.preventDefault();
    const title = titleRef.current!.value;
    const content = contentRef.current!.value;
    if(title.trim() && content.trim()){
      dispatch(
        createComment({
          title: titleRef.current!.value,
          content: contentRef.current!.value,
          publishedAt: new Date().toLocaleDateString(),
        })
      );
      cleanInputs();
    }
  };

  return (
    <div className="App">
      <CommentList>
        {comments.map((comment: any, index: number) => {
          return <Comments key={index} comments={comment} />;
        })}
      </CommentList>
      <form onSubmit={handleSubmit}>
        <label id="title">Title</label>
        <input ref={titleRef} placeholder="Enter a title" />
        <label id="content">Content</label>
        <input ref={contentRef} placeholder="Enter a post content" />
        <button type="submit">Submit</button>
        <button type="button" onClick={() => dispatch(deleteAllComments())}>
          Delete All
        </button>
      </form>
    </div>
  );
}

export default App;
