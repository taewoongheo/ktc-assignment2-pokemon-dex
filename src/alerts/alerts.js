import Swal from "sweetalert2";
import {
  EXCEEDS_POKEMON_SELECTION_MESSAGE,
  ALREADY_SELECTED_POKEMON_MESSAGE,
} from "./message";

export const exceedsPokemonSelectionAlert = () => {
  Swal.fire({
    title: EXCEEDS_POKEMON_SELECTION_MESSAGE.TITLE,
    text: EXCEEDS_POKEMON_SELECTION_MESSAGE.TEXT,
    icon: EXCEEDS_POKEMON_SELECTION_MESSAGE.ICON,
    confirmButtonText: EXCEEDS_POKEMON_SELECTION_MESSAGE.CONFIRM_BUTTON_TEXT,
  });
};

export const alreadySelectedPokemonAlert = () => {
  Swal.fire({
    title: ALREADY_SELECTED_POKEMON_MESSAGE.TITLE,
    text: ALREADY_SELECTED_POKEMON_MESSAGE.TEXT,
    icon: ALREADY_SELECTED_POKEMON_MESSAGE.ICON,
    confirmButtonText: ALREADY_SELECTED_POKEMON_MESSAGE.CONFIRM_BUTTON_TEXT,
  });
};
