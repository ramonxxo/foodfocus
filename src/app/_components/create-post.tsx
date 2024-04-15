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
      className="flex w-full flex-col gap-2"
    >
      <textarea
        placeholder="something you want to post"
        value={content}
        onChange={(e) => setContent(e.target.value)}
        cols={5}
        className="w-full rounded-md px-4 py-2 text-black"
      />
      <div className="flex w-full items-center justify-start gap-4">
        <input
          placeholder="username"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="min-w-[100px] rounded-md px-4 py-2 text-black"
        />
        <button
          type="submit"
          className="rounded-xl bg-black px-10 py-[9px] font-semibold transition hover:bg-white/20"
          disabled={createPost.isPending}
        >
          {createPost.isPending ? "Posting..." : "Post"}
        </button>
      </div>
    </form>
  );
};
