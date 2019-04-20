import React from 'react'

const Smurf = ({smurf: {name, age, height}}) => {
  return (
    <li>
      <div>
        <h2>Name: {name}</h2>
        <p>Age: {age}</p>
        <p>Height: {height}</p>
      </div>
    </li>
  )
}

export default Smurf;
