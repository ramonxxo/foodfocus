"use client";
import React, { useEffect, useState } from "react";
import { api } from "~/trpc/react";
import { BiLike } from "react-icons/bi";
import { BiTrash } from "react-icons/bi";
import { type Post } from "@prisma/client";

export const Posts = () => {
  const posts = api.post.getAll.useQuery().data;
  const [postsArray, setLikes] = useState([] as Post[]);

  useEffect(() => {
    setLikes(
      posts?.map((data) => {
        return data;
      }) ?? [],
    );
  }, [posts]);

  const likePost = api.post.likePost.useMutation({});

  const deletePost = api.post.deletePost.useMutation({});

  return (
    <div className="postcontainer1">
      {postsArray?.map((data) => {
        return (
          <div className="postcontainer2" key={data.id}>
            <span className="postcontainer3">
              <h1 className="postcontainer4">u/{data.name}</h1>
              <p className="postcontainer5">
                {new Date(data.createdAt).toDateString()}
              </p>
            </span>
            <p>{data.content}</p>
            <div className="postcontainer6">
              <span className="postcontainer7">
                <button
                  className="postcontainer8"
                  onClick={() => {
                    likePost.mutate({ id: data.id });
                    setLikes((prev) => {
                      return prev.map((like) => {
                        if (like.id === data.id) {
                          return { ...like, likes: like.likes + 1 };
                        }
                        return like;
                      });
                    });
                  }}
                >
                  <BiLike />
                </button>
                {data.likes}
              </span>
              <div className="postcontainer9">
                <span className="postcontainer10">
                  {new Date(data.createdAt).toLocaleTimeString()}
                </span>
                <button
                  className="postcontainer11"
                  onClick={() => {
                    deletePost.mutate({ id: data.id });
                    setLikes((prev) => {
                      return prev.filter((like) => like.id !== data.id);
                    });
                  }}
                >
                  <BiTrash />
                </button>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};
