"use client";
import Error from "./error";

export default function PostsClient({ data, error }) {
  if (error) {
    return <Error error={error} />;
  } else if (data) {
    return (
      <>
        <h2 className="text-2xl">{"Posts"}</h2>
        <ul>
          {data.map((post) => (
            <li className="mb-3" key={post.id}>
              <h2 className="text font-bold">{post.userId}</h2>
              <h3 className="text-xl font-bold">{post.title}</h3>
              <p className="text-sm font-bold">{post.body}</p>
            </li>
          ))}
        </ul>
      </>
    );
  } else {
    return null;
  }
}
