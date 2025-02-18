import React from "react";
const BlogHero = React.lazy(() => import("@/components/blogs/hero"));
const BlogGrid = React.lazy(() => import("@/components/blogs/Blogcards"));

function page() {
  return (
    <div>
      <BlogHero />
      <BlogGrid />
    </div>
  );
}

export default page;
