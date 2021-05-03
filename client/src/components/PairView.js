import React from 'react';
import names from'./dummyData'
import idPairs from './pairIdsData'

function PairView() {
  let colA = [];
  let colB = [];

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
              <tr>
              {

                idPairs.forEach((pair) => { //convert pairs into stacks of As & Bs
                  colA.push(pair.a);
                  colB.push(pair.b);
                  let colANames = names.filter((p) => p.id === colA[0]);
                  console.log(colANames[0].firstname); //why is this printig twice??
                      <td>
                        { colANames[0].firstname }
                      </td>
              }) 
              }
             </tr>
            </tbody>
          
        </table>
    </div>
  );


  
}

export default PairView;
