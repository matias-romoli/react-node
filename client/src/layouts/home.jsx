import { colorContext } from "../context/color/colorContext";
import Header from "../components/header/header";
import Main from "../components/main/main";
import { useContext } from "react";

function Home() {
  const { colors } = useContext(colorContext);

  return (
    <div className={`body-${colors}`}>
      <Header />
      <Main />
    </div>
  );
}

export default Home;
