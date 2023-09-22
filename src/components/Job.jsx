import React from 'react'

function Job() {
    const age = 20;
    const isRed  = false;

  return (
    <div>
        {age >= 18 ? <h1>Experienced</h1> : <h1>No Experience</h1>}
    <h3 style={{color: isRed ? "red" : "#333"}}>This text has red color</h3>
    </div>
  )
}

export default Job