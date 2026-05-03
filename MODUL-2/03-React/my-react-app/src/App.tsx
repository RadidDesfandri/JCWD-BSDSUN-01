import { Link } from "react-router";
import "./App.css";
import Button from "./components/button";
import WelcomeMessage from "./components/welcome-message";

function App() {
  const user1 = {
    name: "radid",
    message: "Welcome to Purwadhika👋",
  };

  return (
    <div>
      <WelcomeMessage
        name={user1.name}
        message={user1.message}
        indicatorMessage="New"
        isError
      />

      <WelcomeMessage
        name="Andi"
        message="Welcome to Jakarta"
        indicatorMessage="New"
      />

      {/* <button className="button-global">Button Global</button> */}

      <div
        style={{
          display: "flex",
          gap: "8px",
          justifyContent: "center",
          alignItems: "center",
          margin: "16px 0",
        }}
      >
        <Button>Click me!</Button>
      </div>

      {/* 1234 adalah contoh ID */}
      <Link to="/detail/1234">Detail page</Link>
    </div>
  );
}

export default App;
