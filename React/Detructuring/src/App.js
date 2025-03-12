import animals from "./data";
import cars from "./practice";
import "./styles.css";

export default function App() {
  const [gato, cachorro] = animals;
  console.log("Object:", gato);
  const { name, sound } = gato;
  console.log("name: " + name);

  const [honda, tesla] = cars;
  const {
    speedStats: { topSpeed: teslaTopSpeed },
  } = tesla;
  const {
    speedStats: { topSpeed: hondaTopSpeed },
  } = honda;
  const {
    coloursByPopularity: [teslaTopColour],
  } = tesla;
  const {
    coloursByPopularity: [hondaTopColour],
  } = honda;

  return (
    <table>
      <tr>
        <th>Brand</th>
        <th>Top Speed</th>
        <th>TopColour</th>
      </tr>
      <tr>
        <td>{tesla.model}</td>
        <td>{teslaTopSpeed}</td>
        <td>{teslaTopColour}</td>
      </tr>
      <tr>
        <td>{honda.model}</td>
        <td>{hondaTopSpeed}</td>
        <td>{hondaTopColour}</td>
      </tr>
    </table>
  );
}
