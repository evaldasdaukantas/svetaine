// import React, { useState } from 'react'
import "./data.css"

// function lentele() {

//     // eslint-disable-next-line react-hooks/rules-of-hooks
//     const [inputField, setInputField] = useState([
//          { firstName: '', lastName: '' },
//          { firstName: '', lastName: '' }
//     ]);
 
// const handleSubmit = (e) => {
//     e.preventDefault();
//     console.log("InputFields", inputField)

// };
// const handleAddField = () => {
//  setInputField([...inputField, { firstName: '', lastName: '' }]);
// };

// const handleRemoveField = (index) => {
// const value = [...inputField];
// value.splice(index, 1);
// setInputField(value);
// };

// const handleChangeInput = (index, event) => {
//     const value = [...inputField];
//     value[index][event.target.name] = event.target.value;
//     setInputField(value)
// };


//     return (
//         <div className='lentele'>
//         <h1>lentele</h1>
//         <form onSubmit={handleSubmit} >
//             { inputField.map((inputField, index) => (
//                 <div hey={index}>
//                     <input type="text" name="firstName" label="First Name" placeholder="vardas" value={inputField.firstName} onChange={event => handleChangeInput(index, event)}/>
//                     <input type="text" name="lastName" label="Last Name" placeholder="pavarde" value={inputField.lastName}  onChange={event => handleChangeInput(index, event)}/>
//                     <button onClick={() => handleAddField()}>+</button>
//                     <button onClick={() => handleRemoveField(index)}>-</button>
//                 </div>
//             ))}
//             <button onClick={handleSubmit}>Siusti</button>
//             <br />
//         </form>
//         </div>
//   )
// }

// export default lentele


import React from 'react'

function pavadinimai() {
    const names = ['Birthdays;',  'Anniversaries', 'Christenings;', 'Weddings;']
  return (
    <div>
   {
        names.map(pavadinimas => <h1>{pavadinimas}</h1> )
   }
    </div>
  )
}

export default pavadinimai


// import React, { useState } from 'react'

// function pasirinti() {
//     // eslint-disable-next-line react-hooks/rules-of-hooks
//     const [selects, setSelects] = useState();
//     const 
//   return (
//     <div>
//         <h1>{selects}</h1>
//         <select value={selects} onChange={e=>setSelects(e.target.value)}>
//         <option>mango</option>
//         <option>apple</option>
//         <option>apple</option>
//         </select>
//     </div>
//   )
// }

// export default pasirinti