import { MainContainer } from "./_components/containers";
import { CreatePost } from "~/app/_components/create-post";
import { Posts } from "./_components/post-containers";
export default async function Home() {
  return (
    <main className="Page">
      <div className="MainCont"></div>
      <MainContainer>
        <CreatePost />
        <Posts />
      </MainContainer>
    </main>
  );
}
