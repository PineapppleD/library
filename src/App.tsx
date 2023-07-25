import { useEffect, useState } from "react";
import { Header, Hero, Main } from "./components";

function App() {
  const [a, setA] = useState(window.innerWidth);
  window.addEventListener("resize", () => {
    setA(window.innerWidth);
  });

  return (
    <>
      <Header />
      <Hero />
      <Main />
      <p>{a}</p>
    </>
  );
}

export default App;
