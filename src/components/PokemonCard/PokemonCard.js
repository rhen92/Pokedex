import React from 'react';
import './PokemonCard.css'
import { Link } from 'react-router-dom';
import uncaughtBall from '../../Assets/uncaughtBall.png';
import caughtBall from  '../../Assets/caughtBall.png'

const PokemonCard = ({id, img, name, pokeball}) => {
  return (
    <div className="pokemon-card">
      <button className="pokeball"><img src={pokeball} alt="Pokeball" /></button>
      <Link to={`/${id}`} >
        <img
        className="pokemon-pic"
        id = {id}
        src={img}
        alt={`${name} posing`}
        />
        <h1>{name}</h1>
      </Link>
    </div>
  )
}

export default PokemonCard
