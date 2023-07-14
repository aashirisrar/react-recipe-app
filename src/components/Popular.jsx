import { useEffect, useState } from "react";

const Popular = () => {
  const [popular, setPopular] = useState([]);

  useEffect(() => {
    getPopular();
  }, []);

  const getPopular = async () => {
    const api = await fetch(
      `https://api.spoonacular.com/recipes/random?apiKey=${process.env.REACT_APP_API_KEY}&number=9`
    );

    const data = await api.json();

    setPopular(data.recipes);

    console.log(data);
  };

  return (
    <div>
      <h1>Popular</h1>
      <ul>
        {popular.map((pop) => (
          <li key={pop.id}>{pop.title}</li>
        ))}
      </ul>
    </div>
  );
};

export default Popular;
