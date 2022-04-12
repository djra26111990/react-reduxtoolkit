export const Comments = ({ comments, ...args }: any): JSX.Element => {
  return (
    <>
      {comments.title && comments.content && comments.publishedAt ? (
        <li key={args.id}>
          {`${comments.title} - ${comments.content} - ${comments.publishedAt}`}
        </li>
      ) : null}
    </>
  );
};
