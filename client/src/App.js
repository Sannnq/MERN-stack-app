import './App.css';
import Navbar from './components/Navbar/Navbar';
import { useEffect, useState } from 'react';
import axios from 'axios';
function App() {
  const [datas, setData] = useState({});

  useEffect(() => {
    axios.get("http://localhost:5000/data").then((res) =>
      setData({
        ...datas,
        ...res.data,
      })

    );
  }, [])

  let res = Object.values(datas)
  console.log(typeof (datas))
  return (
    <div className="App">
      <Navbar />
      <h1>MERN stack app</h1>
      <div>
        {
          res.map((e) => {
            return <div key={e._id}>
              <p>id: {e._id}</p>
              <p>id: {e.name}</p>
            </div>
          })
        }
      </div>
    </div>
  );
}

export default App;
