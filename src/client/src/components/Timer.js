// import React, { useState, useEffect } from 'react';


// const Countdown = () => {

//   const calculateTimeLeft = () => {

//     const difference = +new Date('2026-06-11T17:00:00+07:00') - +new Date();

//     let timeLeft = {}

//     if (difference > 0) {
//       timeLeft = {
//         hours: Math.floor(difference / (1000 * 60 * 60)),
//         minutes: Math.floor((difference / 1000 / 60) % 60),
//         seconds: Math.floor((difference / 1000) % 60),
//       }
//     }
    
//     return timeLeft;
//   }
// }
//   let [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

//   useEffect(() => {
//     setTimeout(() => {
//       setTimeLeft(calculateTimeLeft());
//     }, 1000);
//   });

//   return (
//     <div className="App">
//       <p>
//         <span>{timeLeft.hours}</span>
//         <span>:</span>
//         <span>{timeLeft.minutes}</span>
//         <span>:</span>
//         <span>{timeLeft.seconds}</span>
//       </p>
//     </div>
//   );


//   }

  

  


// export default Countdown;