import { useEffect, useState } from 'react'
import './App.css'
import { Link } from 'react-router';

function App() {

  const [mangos, setMangos] = useState([]);

  useEffect(()=>{
    fetch("http://localhost:5000/mangos")
    .then(res =>res.json())
    .then(data => setMangos(data))
  },[])

  const mangoDelete = (id)=>{
    console.log(id)
    fetch(`http://localhost:5000/mangos/${id}`,{
      method: "DELETE"
    }).then(res => res.json())
    .then(data => {
      data.deletedCount > 0 && alert("item delete success")
      const remaining = mangos.filter(mango => mango._id !== id);
      setMangos(remaining)
    })
    .catch(error => console.log(error))
  }
  return (
    <>
      
      <h1>Mangos collection </h1>
      <div>
        {
          mangos.map(mango => <li key={mango._id}>
            {mango.name} : {mango.email} : {mango._id}
            <Link to={`/update/${mango._id}`}><button>Update</button></Link>
            <button onClick={()=> mangoDelete(mango._id)}>X</button>
            </li>)
        }
      </div>
    </>
  )
}

export default App
