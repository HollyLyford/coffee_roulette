import React, { useState } from 'react';

// const emptyForm = {
//   firstname: "",
//   lastname: "",
// }

function AdminView(props) {
  const [newFirstname, setNewFirstname] = useState("")
  const [newLastname, setNewLastname] = useState("")

  function handleSubmit(event){
      event.preventDefault();
      let newPerson = { firstname: newFirstname, lastname:newLastname }
      window.alert(`${newPerson.firstname} ${newPerson.lastname} has been added`)

      //pass to parent
      props.submitCb(newPerson)
      setNewFirstname("")
      setNewLastname("")
    }

  function handleClick(){
      props.shuffleCb()
  }
  
    return (
      <div className="AdminView">
        <h2>Add New People:</h2>
        <form onSubmit={(e) => handleSubmit(e)}>
            <label>First Name
                <input 
                  type="text"
                  name="firstname"
                  value={newFirstname}
                  onChange={e => setNewFirstname(e.target.value)}
                />
            </label>
            <label>Last Name
                <input 
                  type="text"
                  name="lastname"
                  value={newLastname}
                  onChange={e => setNewLastname(e.target.value)}
                />
            </label>
            <button type="submit">Submit</button>
        </form>

        <h2>Shuffle pairs</h2>
        <button type="button" onClick={handleClick}>REMIX</button>
        
      </div>
    );
  }
  
  export default AdminView;