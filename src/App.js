import React, { useState, useEffect } from "react";
import "./App.css";

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
    <div className="App">
      <header className="App-header">
        <h1>Videos</h1>
      </header>
      {data.map((video,id) =>(
        <div key={id}>
          <h2>{video.name}</h2>
          <video height={200} controls 
                 src ={video.video_url}
                 poster={video.thumbnail}></video>
        </div>
      ))}
    </div>
  );
}

export default App;
