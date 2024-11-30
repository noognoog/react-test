import { useEffect, useState } from "react";
import Movie from "./components/Movie";
import Home from "./routes/Home";
import Detail from "./routes/Detail";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
function App() {
  return (
    <Routes>
      <Route path={"/movie/hello"} element={<h1>Hello</h1>}></Route>
      <Route path={"/movie/:id"} element={<Detail />}></Route>
      <Route path={"/"} element={<Home />}></Route>
    </Routes>
  );
}

export default App;
