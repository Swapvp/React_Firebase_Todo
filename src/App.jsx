import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import FirebaseTodo from "./Components/FirebaseTodo";

function App() {
  const [count, setCount] = useState(0);

  return <FirebaseTodo />;
}

export default App;
