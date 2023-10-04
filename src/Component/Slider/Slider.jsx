// import { Slide } from '@mui/material'
// import React from 'react'


// function Slider() {

//     const OwlCoursal = [
//         {
//             url: 'https://rukminim1.flixcart.com/fk-p-flap/1600/270/image/83238a76dcb6150b.png?q=20',
//         },
//         {
//             url: 'https://rukminim1.flixcart.com/fk-p-flap/1600/270/image/352e6f0f8034fab5.jpg?q=20',
//         },
//         {
//             url: 'https://rukminim1.flixcart.com/fk-p-flap/1600/270/image/fd86cf067aff745c.jpg?q=20',
//         }
//     ]

//     const divStyle = {
//         display: 'flex',
//         alignItems: 'center',
//         justifyContent: 'center',
//         backgroundSize: 'cover',
//         height: '500px'
//     }

//     return (
//         <div className='container'>
//             <div className='slide-container'>
//                 <Slide>
//                     {
//                         OwlCoursal.map((OwlCoursal, index)=>{
//                             <div key={index}>
//                                 <div style={{...divStyle, 'backgroundImage': `url(${OwlCoursal.url})`}}></div>
//                             </div>
//                         })
//                     }
//                 </Slide>
//             </div>

//         </div>
//     )
// }

// export default Slider