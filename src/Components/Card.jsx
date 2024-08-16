import React from 'react'
import CardStyles from "../Style/Card.module.css"

const Card = ({name,team}) => {
  return (
    <div className={CardStyles.cardContainer}>
    <h3>Hola {name}</h3>
    <p>Tu equipo favorito es <span className={CardStyles.team}>{team}</span></p>
    <h3>¡Felicidades!</h3>
    </div>
  )
}

export default Card
