//1.

// import React from 'react'

// const student = (props) => {

//   console.log(props)
//   return (
//     <div>
//       <h1>{props.name} is {props.age} years old.</h1>
//     </div>
//   )
// }

// export default student

//2.

// import React from 'react'

// const product = (props) => {

//   return (
//       <div>
//       <h1>The {props.name}, cost is {props.price}, and category is {props.category}</h1>
//     </div>
//   )
// }

// export default product  

//3. 

// import React from 'react'

// const user = (isLoggedIn) => {
//   return (
//     <div>
//       <h2>{isLoggedIn ? "Welcome back!" : "Please login"}</h2>
//     </div>
//   )
// }

// export default user

//4.

// import React from 'react'

// const button = (props) => {
//   return (
//     <div>
//       <button>{props.text}</button>
//     </div>
//   )
// }

// export default button 

//5.

// import React from 'react'

// const top = (props) => {
//   return (
//     <div>
//         <h1>Hello My name is {props.name}</h1> 
//     </div>
//   )
// }

// export default top


import React from 'react'

const User = (props) => {

    console.log(props);
  return (
    <div>
        <h1>Hello Guys My Name is {props.name} and I am {props.age} saal Purana hoon</h1>
        
    </div>
  )
}

export default User


