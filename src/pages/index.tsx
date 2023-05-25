import { type NextPage } from "next";

import { api } from "~/utils/api";

const Home: NextPage = () => {
  const { data, error } = api.joya.getAll.useQuery();

  if (error || !data) return <></>;

  return (
    <>
      <main className="flex min-h-screen flex-col items-center bg-[#F2F2F2] pt-[5rem]">
      {data?.map((joya) => (
        <div key={joya.id} className="bg-white w-[70%] p-4 drop-shadow-sm rounded">{joya.name}</div>
      ))}
      </main>
    </>
  );
};

export default Home;
