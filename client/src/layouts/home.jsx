import Header from "../components/header/header";
import Main from "../components/main/main";
import { useState } from "react";

function Home() {
  // eslint-disable-next-line
  const [colors, setColors] = useState("light");
  return (
    <div className={`body-${colors}`}> 
    <Header color = {colors} setColors={setColors} />
      <Main color = {colors} />
    </div>

  );
}

export default Home;
