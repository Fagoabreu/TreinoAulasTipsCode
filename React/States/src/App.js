import "./styles.css";

function strike() {
  document.getElementById("root").style.textDecoration = "line-through";
}
function unStrike() {
  document.getElementById("root").style.textDecoration = null;
}

export default function App() {
  return (
    <div>
      <p>Jesus te Ama</p>
      <button onClick={strike}>Risca Texto</button>
      <br />
      <br />
      <button onClick={unStrike}>Reset Texto</button>
    </div>
  );
}
