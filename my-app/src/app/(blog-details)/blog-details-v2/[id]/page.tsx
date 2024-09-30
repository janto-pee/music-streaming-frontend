import React from "react";

const BlogDetailsV2 = ({ params }: { params: { id: string } }) => {
  return (
    <>
      <h1>{params.id}</h1>
    </>
  );
};

export default BlogDetailsV2;
