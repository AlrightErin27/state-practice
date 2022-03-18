import RandomCard from "./components/RandomCard";
import pic from "./fortuneteller.jpeg";

function App() {
  return (
    <div
      className="App"
      style={{
        backgroundImage: `url(${pic})`,
        backgroundPosition: "center",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
      }}
    >
      <h1>Test Your Intuition</h1>
      <RandomCard buttonTxt="Play" />
    </div>
  );
}

export default App;
