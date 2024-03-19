import React from 'react'

function PriceTable() {
  return (
   <div id="price-table">
      <table>
         <h2>Cennik</h2>
         <thead>
         <tr>
            <th>Usługa</th>
            <th>Cena</th>
         </tr>
         </thead>
         <tbody>
         <tr>
            <td>Tworzenie stron internetowych</td>
            <td>300-1000 zł</td>
         </tr>
         <tr>
            <td>Tworzenie aplikacji mobilnych</td>
            <td>500-5000 zł</td>
         </tr>
         </tbody>
      </table> 
   </div>
  )
}

export default PriceTable