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
    <div className="w-full flex-col pt-5 text-black">
      {postsArray?.map((data) => {
        return (
          <div className="my-1 w-full rounded-lg bg-white p-2" key={data.id}>
            <span className="flex items-end gap-2">
              <h1 className="text-lg font-semibold">u/{data.name}</h1>
              <p className="pb-1 text-xs text-gray-500">
                {new Date(data.createdAt).toDateString()}
              </p>
            </span>
            <p>{data.content}</p>
            <div className="flex w-full justify-between pt-2">
              <span className="flex items-end gap-2">
                <button
                  className="rounded-lg border-[1px] border-black p-1 text-base text-red-600"
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
              <div className="flex items-end gap-3">
                <span className="text-sm text-slate-500">
                  {new Date(data.createdAt).toLocaleTimeString()}
                </span>
                <button
                  className="rounded-lg border-[1px] border-black p-1 text-base"
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
