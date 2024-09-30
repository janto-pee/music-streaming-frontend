import React from "react";

const BlogDetailsV3 = ({ params }: { params: { id: string } }) => {
  return (
    <>
      <h1>{params.id}</h1>
    </>
  );
};

export default BlogDetailsV3;
