import { Link } from "react-router-dom";

import Counter from "../components/Counter";

const Home = () => {
  const num = 3;
  return (
    <main>
      <h1>Je suis sur la page Home</h1>
      <Link to="/details">Cliquez ici pour naviguer vers la page Details</Link>

      <Link to={`/offer/${num}`}>
        Cliquez ici pour naviguer vers la page Offer de l'offre dont l'id est 3
      </Link>
      <Counter />
    </main>
  );
};

export default Home;
