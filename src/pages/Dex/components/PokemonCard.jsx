import React from "react";
import PokemonCardBase from "./PokemonCardBase";
import Swal from "sweetalert2";
import {
  exceedsPokemonSelectionValidator,
  alreadySelectedPokemonValidator,
} from "../../../validation/addPokemonValidator";

function PokemonCard({ pokemon, setSelectedPokemon }) {
  const addPokemon = (id) => {
    setSelectedPokemon((prev) => {
      if (exceedsPokemonSelectionValidator(prev)) {
        Swal.fire({
          title: "선택 불가",
          text: "더 이상 선택할 수 없습니다.",
          icon: "error",
          confirmButtonText: "확인",
        });
        return prev;
      }

      if (alreadySelectedPokemonValidator(prev, id)) {
        Swal.fire({
          title: "선택 불가",
          text: "이미 선택된 포켓몬입니다.",
          icon: "warning",
          confirmButtonText: "확인",
        });
        return prev;
      }

      return [...prev, pokemon];
    });
  };

  return (
    <PokemonCardBase
      pokemon={pokemon}
      onButtonClick={addPokemon}
      buttonLabel={"추가"}
    />
  );
}

export default PokemonCard;
