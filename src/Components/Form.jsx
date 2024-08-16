import React, { useState } from 'react'
import Card from './Card'
import CardStyles from "../Style/Form.module.css"

const Form = () => {

  const [name,setName] = useState("")

  const [team,setTeam] = useState("")

  const [show,setShow]= useState(false)

  const [error, setError] = useState(false)


  const handleSubmit = (e) =>{
    e.preventDefault();

    if (name.trim().length >=3 && team.trim().length>=6) {
        setShow(true)
        setError(false)
    } else{
      setError(true)
      setShow(false)
    }
  }

  const reset = () =>{
    setError(false)
    setName("")
    setTeam("")
    setShow(false)
  } 


  return (
    <>
      <form onSubmit={handleSubmit} className={CardStyles.form}>
        <label htmlFor="">Nombre: </label>
        <input type="text" value={name} onChange={(e)=>setName(e.target.value)} />
        <label htmlFor="">Equipo favorito de futbol:</label>
        <input type="text" value={team} onChange={(e)=>setTeam(e.target.value)}/>
        <button>Enviar</button>  
      </form>
      <button onClick={reset}>Reset</button>


        {show ? <Card name={name} team={team}/> : null }

      {error ? (
          <>
          <h3 style={{color:"red"}}>Por favor chequea que la información sea correcta</h3>
          </>
      ) : null }

    </>


  )
}

export default Form
