import './App.css';
import React from 'react'
import axios from 'axios';

function App() {
  const [data, setData] = React.useState(null);
  const [messanger, setMessenger] = React.useState("");

  React.useEffect(() => {
    getMessagens()
  },[])

  const getMessagens = () =>{
    const fetch = async () => {
      const res = await axios.get(`http://localhost:3001/Copa`);
      setData(res.data);
    }
    fetch()
  }

  console.log(data)

  console.log(messanger)

  const writeMenssager = (value) =>{
    setMessenger(value.target.value)
  }

  const sentMenssenger = async () => {
    let enviar ={
      message: messanger
    }
    const fetch = async () => {
      const res = await axios.post(`http://localhost:3001/Copa`,enviar);
    }
    await fetch()
    await getMessagens()
  }

  return (
    <div className="App">
        <h1>Bem vindo ao programa de teste</h1>
        <h4>Menssagens:</h4>
        {
          data === null ? <p>Loading...</p> : <p>{data.map(a => <div>{a.message}</div>)}</p>

        }
        <label>Escreva uma menssagem: </label>
        <input onChange={(e) => writeMenssager(e)}/>
        <button onClick={sentMenssenger}>Registrar</button>
    </div>
  );
}

export default App;
