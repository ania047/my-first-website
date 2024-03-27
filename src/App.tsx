/* eslint-disable @typescript-eslint/no-explicit-any */
import { useState, useEffect } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0);
  const [color, setColor] = useState("white");

  const colors = ['red', 'pink', 'blue', 'orange', 'yellow'];

  const nextColor = () => {
    setColor(colors[Math.floor(Math.random() * colors.length)]);
    document.body.style.backgroundColor = color;
  };

  const [infos, setInfos] = useState([]);
  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/photos')
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        console.log(data);
        setInfos(data);
      });
  }, []);


  return (
    <>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Ioni</h1>
      <h1>Razvan</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)} className='btn_name'>
          count is {count}
        </button>

        <button onClick={() => document.body.style.backgroundColor = "pink"} className='btn_name'>
          Change Background
        </button>

        <button onClick={() => nextColor()}>
          Change Random 
        </button>

        <div>
          <h1>Current address</h1>
          {infos.map((info:any) => (
            <h2>
              {info.id}.  
                {info.title}
            </h2>
          ))}
        </div>

               
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

export default App
