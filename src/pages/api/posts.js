// posts.js

import clientPromise from "../../lib/mongodb";

export default async function handler(req, res) {
  const client = await clientPromise;
  const db = client.db("posts");
  switch (req.method) {
    case "POST":
      //let bodyObject = JSON.parse(req.body);
      let bodyObject = req.body;
      let myPost = await db.collection("posts").insertOne(bodyObject);
      res.json(myPost.ops[0]);
      break;
    case "GET":
      const allPosts = await db.collection("posts").find({}).toArray();
      res.json({ status: 200, data: allPosts });
      break;
  }
}

export async function getServerSideProps(context) {
  let res = await fetch("http://localhost:3000/api/posts", {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  });
  let allPosts = await res.json();

  return {
    props: { allPosts },
  };
}


let submitForm = async (e) => {
  setLoading(true);
  e.preventDefault();
  let res = await fetch("http://localhost:3000/api/posts", {
    method: "POST",
    body: JSON.stringify({
      title: title,
      content: content,
    }),
  });
  res = await res.json();
  setPostsState([...postsState, res]);
  setTitle("");
  setContent("");
  setLoading(false);
};