import React from 'react';
import names from'./dummyData'

function AdminView(props) {
    function handleSubmit(event){
        event.preventDefault();
        console.log("submit")
        //submit
        //increment ID 
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
                <input type="text"/>
            </label>
            <label>Last Name
                <input type="text"/>
            </label>
            <button type="submit">Submit</button>
        </form>

        <h2>Shuffle pairs</h2>
        <button type="button" onClick={handleClick}>REMIX</button>
        
      </div>
    );
  }
  
  export default AdminView;