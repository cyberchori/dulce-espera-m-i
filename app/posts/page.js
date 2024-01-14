import { Suspense } from "react";
import PostsClient from "./PostsClient";
import Loading from "./loading";

export async function getData() {
  try {
    const res = await fetch("https://jsonplaceholder.typicode.com/posts");
    const data = await res.json();
    if (Math.random() > 0.5) throw new Error("Simulated error");
    return { data };
  } catch (error) {
    return { error };
  }
}

export default async function Posts() {
  const response = await getData();
  return (
    <Suspense fallback={<Loading />}>
      <PostsClient {...response} />
    </Suspense>
  );
}
