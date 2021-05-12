import React, { useState } from 'react';

// const emptyForm = {
//   firstname: "",
//   lastname: "",
// }

function AdminView(props) {
  let names = props.names;
  const [peopleData, setPeopleData] = useState([names])

  
  function handleInputChange(event){
      const { name, value } = event.target;
        //seems to be adding all values into object? why?????????
      let newFormData = {...peopleData};
      newFormData = {[name]: value};
      setPeopleData(data => newFormData);

    //   setPeopleData(data => ({
    //     ...data,  // "spread" all existing state values
    //     [name]: value  // overwrite the value for the field just typed into
    // }));
      }


    function handleSubmit(event){
        event.preventDefault();
        //pass to parent
        props.submitCb(peopleData)
      }

    function handleClick(){
        //collect all IDs from names
        let currentIDs = []
        names.forEach((name => currentIDs.push(name.id)))
        //shuffle
        shuffle(currentIDs)
        props.shuffleCb(currentIDs)
    }

    function shuffle(ids) {
        let m = ids.length, t, i;
        // While there remain elements to shuffle…
            while (m) {
            // Pick a remaining element…
            i = Math.floor(Math.random() * m--);
            // And swap it with the current element.
            t = ids[m];
            ids[m] = ids[i];
            ids[i] = t;
            }
            //https://bost.ocks.org/mike/shuffle/
        return ids; 
    }
  
    return (
      <div className="AdminView">
        <h2>Add New People:</h2>
        <form onSubmit={(e) => handleSubmit(e)}>
            <label>First Name
                <input 
                  type="text"
                  name="firstname"
                  value={peopleData.firstname}
                  onChange={e => handleInputChange(e)}
                />
            </label>
            <label>Last Name
                <input 
                  type="text"
                  name="lastname"
                  value={peopleData.lastname}
                  onChange={e => handleInputChange(e)}
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