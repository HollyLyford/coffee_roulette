import React from 'react';
import names from'./dummyData'

function PairView(props) {
  let allPairs = props.allPairs;

  return (
    <div className="PairView">
      <h2>Find your conversation partner:</h2>
        <table>
          <thead>
            <tr>
              <th>Name 1</th>
              <th>Name 2</th>
            </tr>
          </thead>
            <tbody>
              {
               allPairs.forEach((pair) => {
                <tr>
                  <td>
                    {
                    `${names.filter(n => n.id === pair.a)[0].firstname} ${names.filter(n => n.id === pair.a)[0].lastname}`
                    }
                  </td>                   
                  <td>
                    {
                     `${names.filter(n => n.id === pair.b)[0].firstname} ${names.filter(n => n.id === pair.b)[0].lastname}`
                    }
                  </td>
                 </tr>
               })}
            </tbody>       
        </table>
    </div>
  );


  
}

export default PairView;
