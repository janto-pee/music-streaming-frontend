import React from "react";

const BlogDetailsV1 = ({ params }: { params: { id: string } }) => {
  return (
    <>
      <h1>{params.id}</h1>
    </>
  );
};

export default BlogDetailsV1;
