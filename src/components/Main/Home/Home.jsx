import { useContext, useState, useRef } from 'react';
import { TextField, Button } from '@mui/material'

// Contexto de usuario
import { UserContext } from '../../../context/UserContext';

function Home() {
  const { updateUsername } = useContext(UserContext); // consume el contexto
  const inputRef = useRef(null);

  const handleClick = (e) => {
    e.preventDefault();
    //actualiza el username almacenado en el contexto
    updateUsername(inputRef.current.value);
    alert(`Valor del input: ${inputRef.current.value}`);
  };

  return (
    <div>
      <h2>Update Username</h2>
        <input type="text" ref={inputRef}/>
        {/* <TextField id="outlined-basic" label="Outlined" variant="outlined" value={newUsername} onChange={handleInputChange} /> */}
        {/* <button type="submit">Update</button> */}
        <Button onClick={handleClick} variant="contained">Update</Button>
    </div>
  );
}

export default Home;