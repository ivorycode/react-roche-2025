import { useEffect, useState } from "react";
import ky from "ky";
import type { SwapiPerson } from "./SwapiPerson.tsx";
import { useQuery } from "@tanstack/react-query";
import { parseAsInteger, useQueryState } from "nuqs";

async function fetchData(id: number) {
  const luke = await ky
    .get(`https://swapi.info/api/people/${id}`)
    .json<SwapiPerson>();
  console.log("luke: ", luke);
  return luke;
}

export function Demo() {
  // const id = 2;

  const [id, setId] = useQueryState("id", parseAsInteger.withDefault(1));

  const { data } = useQuery({
    queryKey: ["swapiCharacter", id],
    queryFn: () => fetchData(id),
  });

  console.log("Render Demo", data);
  return (
    <div>
      <h2>Demo</h2>
      <button onClick={() => setId(id + 1)}>Next</button>
      {data && (
        <div>
          <h3>{data?.name}</h3>
          <p>Height: {data?.height}</p>
          <p>Mass: {data?.mass}</p>
        </div>
      )}
    </div>
  );
}

/* DEMO

Introduce counter / use as effect dependency

----

Custom Hook:

function useSwapiCharacter(id: number) {
  const [person, setPerson] = useState<SwapiPerson>();

  useEffect(() => {
    async function fetchData() {
      const luke = await ky
        .get(`https://swapi.info/api/people/${id}`)
        .json<SwapiPerson>();
      console.log("luke: ", luke);
      setPerson(luke);
    }
    fetchData();
  }, [id]);

  return person;
}

----
----

 npm i @tanstack/react-query
 
 const queryClient = new QueryClient();
 
 <QueryClientProvider client={queryClient}>
 
 async function fetchData(id: number) {
  const luke = await ky
    .get(`https://swapi.info/api/people/${id}`)
    .json<SwapiPerson>();
  console.log("luke: ", luke);
  return luke;
}
 
 const { data } = useQuery({
  queryKey: ["swapiCharacter", id],
  queryFn: () => fetchData(id),
});

----

npm i nuqs

<NuqsAdapter>
  <App />
    
const [id, setId] = useQueryState("id", parseAsInteger.withDefault(1));


----
----

exract 
async function fetchData() {
  const luke = await ky
    .get("https://swapi.info/api/people/1")
    .json<SwapiPerson>();

  return luke;
}

      {
        path: "",
        element: <Demo />,
        loader: fetchData,
      },


-----


 children: [
      {
        path: "/:id",
        element: <Demo />,
        loader: ({ params }) => fetchData(params.id),
        hydrateFallbackElement: <div>Loading ...</div>,
      },
      
      
---

useQueryState
  
 */
