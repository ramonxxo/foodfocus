"use client";
import { useRouter } from "next/navigation";
import { useState } from "react";

import { api } from "~/trpc/react";
type ChildProps = {
  handleReload?: () => void;
};

export const CreatePost: React.FC<ChildProps> = ({}) => {
  const router = useRouter();
  const [name, setName] = useState("");
  const [content, setContent] = useState("");

  const createPost = api.post.addPost.useMutation({
    onSuccess: () => {
      router.refresh();
      setName("");
      setContent("");
    },
  });

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        createPost.mutate({ name, content });
      }}
      className="form"
    >
      <textarea
        placeholder="something you want to post"
        value={content}
        onChange={(e) => setContent(e.target.value)}
        cols={5}
        className="text"
      />
      <div className="username1">
        <input
          placeholder="username"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="username2"
        />
        <button
          type="submit"
          className="submit"
          disabled={createPost.isPending}
        >
          {createPost.isPending ? "Posting..." : "Post"}
        </button>
      </div>
    </form>
  );
};
