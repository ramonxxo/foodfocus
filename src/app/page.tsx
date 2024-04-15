import { MainContainer } from "./_components/containers";
import { CreatePost } from "~/app/_components/create-post";
import { Posts } from "./_components/post-containers";
export default async function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-[#686868] to-[#000000] text-white">
      <div className="pt-20"></div>
      <MainContainer>
        <CreatePost />
        <Posts />
      </MainContainer>
    </main>
  );
}
