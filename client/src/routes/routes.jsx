import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "../layouts/home";

const Router = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />}></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
};
export default Router;
