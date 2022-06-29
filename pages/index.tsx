import type { NextPage } from "next";
import Login from "../src/components/login";

const Home: NextPage = () => {
  return (
    <div className="hero min-h-screen bg-base">
      <div className="hero-content gap-x-32 flex-col lg:flex-row">
        <div className="h-400 w-400 md:h-300 md:w-354">
          <img src="/logo.png" alt="Sparkize logo" className="h-200 w-254" />
        </div>
        <Login />
      </div>
    </div>
  );
};

export default Home;
