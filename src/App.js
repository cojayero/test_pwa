import React, { useState, useEffect } from "react";
import "./App.css";
import Calculator from "./components/Calculator"
import NumberProvider  from "./components/NumberProvider";

function App() {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const result = await fetch("https://orangevalleycaa.org/api/videos").then(
        (response) => response.json()
      );
      setData(result);
    };
    fetchData();
  }, []);

  useEffect(() => {
    console.log(data);
  }, [data]);

  return (
    <NumberProvider>
      <Calculator />
    </NumberProvider>
  );
}

export default App;
