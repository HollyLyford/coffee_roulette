import Data from'./dummyData'
import { AgGridReact } from 'ag-grid-react';

function PairView() {
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
              Data.map((d) => 
                <tr>
                  <td>{d.firstname} {d.lastname}</td>
                  <td>{d.firstname} {d.lastname}</td>
                </tr>)
            }
            
          </tbody>
        </table>
    </div>
  );
}

export default PairView;
