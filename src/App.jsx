import { Routes, Route } from "react-router-dom";
import styled, { createGlobalStyle } from "styled-components";
import Home from "./pages/Home/Home.jsx";
import Dex from "./pages/Dex/Dex.jsx";
import PokemonDetail from "./pages/PokemonDetail/PokemonDetail.jsx";
import { PokemonProvider } from "./contexts/PokemonContext.jsx";
import { useState } from "react";

export const ResetStyle = createGlobalStyle`
  *, *::before, *::after {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }

  html {
    font-size: 16px;
  }

  html, body, #root {
    height: 100%;
  }

  body {
    font-family: sans-serif;
    line-height: 1.5;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  img, picture, video, canvas, svg {
    display: block;
    max-width: 100%;
  }

  input, button, textarea, select {
    font: inherit;
  }

  a {
    text-decoration: none;
    color: inherit;
  }
`;

const LayoutStyle = styled.div`
  width: 100%;
  height: 100%;
`;

function Layout({ children }) {
  return <LayoutStyle>{children}</LayoutStyle>;
}

export default function App() {
  const [selectedPokemon, setSelectedPokemon] = useState([]);

  return (
    <PokemonProvider>
      <ResetStyle />
      <Layout>
        <Routes>
          <Route
            path="/"
            element={<Home setSelectedPokemon={setSelectedPokemon} />}
          />
          <Route
            path="/dex"
            element={
              <Dex
                selectedPokemon={selectedPokemon}
                setSelectedPokemon={setSelectedPokemon}
              />
            }
          />
          <Route path="/pokemon/:id" element={<PokemonDetail />} />
        </Routes>
      </Layout>
    </PokemonProvider>
  );
}
