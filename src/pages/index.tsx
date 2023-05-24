import { type NextPage } from "next";

import { api } from "~/utils/api";

const Home: NextPage = () => {
  const hello = api.example.hello.useQuery({ text: "from tRPC" });

  return (
    <>
      <main className="flex min-h-screen flex-col items-center bg-slate-200 pt-[5rem]">
        <div className="bg-slate-50 w-[70%] p-4 drop-shadow-sm rounded">hola</div>
      </main>
    </>
  );
};

export default Home;
