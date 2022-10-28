import { Container } from "../components/Container";
import { Profile } from "../components/Profile";

export function Home() {
  return (
    <>
      <div className="w-full h-[350px] bg-bg-cover bg-cover bg-no-repeat bg-center" />

      <main className="flex flex-col justify-center items-center h-full">
        <Container>
          <div className="-mt-24 w-full h-full flex justify-center">
            <Profile />
          </div>
        </Container>
      </main>
    </>
  );
}
