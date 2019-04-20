import React from 'react'

const Smurf = ({deleteSmurf, smurf: {id, name, age, height}}) => {
  return (
    <li>
      <div>
        <h2>Name: {name}</h2>
        <p>Age: {age}</p>
        <p>Height: {height}</p>
      </div>

      <button onClick={() => deleteSmurf(id)} >
        Delete
      </button>

    </li>
  )
}

export default Smurf;
