import React, { useState, useEffect } from "react";
import logo from "./logo.svg";
import "./App.css";
import Header from "./Header";

interface IAppProps {}

// interface IAppState {
//   name: string;
// }

const App: React.SFC<IAppProps> = props => {
  const [name, setName] = useState<string>("");

  const getName = async () => {
    let r = await fetch("/api/hello");
    let name = await r.json();
    setName(name);
  };

  useEffect(() => {
    getName();
  }, []);

  return (
    <div className="App">
      <Header buttonText="Click this!!!" />
      <h2>Hello {name}</h2>
    </div>
  );
};

export default App;
