import { Routes, Route } from "react-router-dom";

function Home() {
  return <h1>Home Page</h1>;
}

function Dex() {
  return <h1>Dex Page</h1>;
}

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/dex" element={<Dex />} />
    </Routes>
  );
}
