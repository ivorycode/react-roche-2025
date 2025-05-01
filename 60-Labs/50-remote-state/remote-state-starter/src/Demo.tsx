import { useEffect, useState } from "react";
import ky from "ky";

export function Demo() {
  const [person, setPerson] = useState<SwapiPerson>();

  useEffect(() => {
    async function fetchData() {
      const luke = await ky
        .get(`https://swapi.info/api/people/1`)
        .json<SwapiPerson>();
      console.log("luke: ", luke);
      setPerson(luke);
    }
    fetchData();
  }, []);

  console.log("Render Demo");
  return (
    <div>
      <h2>Demo</h2>
      {person && (
        <div>
          <h3>{person.name}</h3>
          <p>Height: {person.height}</p>
          <p>Mass: {person.mass}</p>
        </div>
      )}
    </div>
  );
}

interface SwapiPerson {
  name: string;
  height: string;
  mass: string;
  hair_color: string;
  skin_color: string;
  eye_color: string;
  birth_year: string;
  gender: string;
  homeworld: string;
  films: string[];
}
