import { useLocation, useNavigate } from "react-router-dom";
import { Button } from "../Dex/components/PokemonCardBase";

function PokemonDetail() {
  const navigate = useNavigate();
  const { state } = useLocation();
  const { name, image, types, description } = state;

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        height: "100%",
        gap: "20px",
      }}
    >
      <img src={image} alt={name} style={{ width: "350px", height: "350px" }} />
      <h1>{name}</h1>
      <div>
        <span>타입: </span>
        {types.map((el) => (
          <span
            style={{
              marginRight: "10px",
              backgroundColor: "rgb(243, 243, 243)",
              padding: "5px",
              borderRadius: "5px",
            }}
          >
            {el}
          </span>
        ))}
      </div>
      <p>{description}</p>
      <Button onClick={() => navigate(-1)}>뒤로가기</Button>
    </div>
  );
}

export default PokemonDetail;
