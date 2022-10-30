import { Container } from "../components/Container";
import { Posts } from "../components/Posts";
import { Profile } from "../components/Profile";
import logoImg from "../assets/Logo.svg";

export function Home() {
  return (
    <>
      <div className="w-full h-[350px] bg-bg-cover bg-cover bg-no-repeat bg-center flex items-center justify-center">
        <img className="mb-16" src={logoImg} alt="" />
      </div>

      <main className="flex flex-col justify-center items-center h-full">
        <Container>
          <div className="-mt-24 w-full h-full flex justify-center">
            <Profile />
          </div>
          <Posts />
        </Container>
      </main>
    </>
  );
}
