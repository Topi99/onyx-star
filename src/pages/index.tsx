import { type NextPage } from "next";

import { api } from "~/utils/api";

const Home: NextPage = () => {
  const hello = api.example.hello.useQuery({ text: "from tRPC" });

  return (
    <>
      <main className="flex min-h-screen flex-col items-center bg-[#F2F2F2] pt-[5rem]">
        <div className="bg-white w-[70%] p-4 drop-shadow-sm rounded">hola</div>
      </main>
    </>
  );
};

export default Home;
