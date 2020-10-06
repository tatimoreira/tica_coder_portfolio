import { useEffect, useContext } from "react";
import Layout from "../components/layout";
import LanguageSelector from "../components/LanguageSelector";
import { useLocalStorage } from "../hooks/useLocalStorage";

import ThemeContext from "../context/ThemeContext";

function IndexPage() {
  // const [storedTheme, setTheme] = useLocalStorage("theme", "dark");
  const { toggleTheme } = useContext(ThemeContext);

  /*const handleSwap = () => {
    storedTheme === "dark" ? setTheme("light") : setTheme("dark");
    console.log("tema", storedTheme);
  };

  useEffect(() => {
    storedTheme === "dark";
  });*/

  return (
    <Layout>
      <h1 className="font-display text-secondary mb-4 text-5xl font-light">
        STEMNIST
      </h1>
      <div className="flex flex-col items-center justify-center">
        <img
          src="team-of-critters.svg"
          className="w-full max-w-xl"
          alt="Four one-eyed aliens playing"
        />

        <h2 className="p-3 my-8 text-lg font-bold bg-yellow-400 md:text-2xl">
          Hi! Welcome to your first Next.js site.
        </h2>
        <button onClick={toggleTheme}> Swap</button>
        <LanguageSelector />
      </div>
    </Layout>
  );
}

export default IndexPage;
