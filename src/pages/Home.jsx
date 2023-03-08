import React from "react";
import { Link } from "react-router-dom";
function Home() {
  return (
    <main className="main">
      <h2 className="main__subtitle">
        You got the travel plans, we got the travel vans.
      </h2>
      <p className="main__description">
        Add adventure to your life by joining the #vanlife movement. Rent the
        perfect van to make your perfect road trip.
      </p>
      <Link className="btn main__btn" to="/vans">
        Find your van
      </Link>
    </main>
  );
}

export default Home;
