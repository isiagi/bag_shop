import React from "react";
import im from '../images/17.jpg';
import im1 from '../images/10.jpg';

import './Varity.css'

export default function Varity() {
  return (
    <div className="varity__container">
    <h3>Broswer Through, We Have You Covered</h3>
      <div className="image-grid">
      <img className="image-grid-col-2 image-grid-row-2" src={im1} alt="placeholder" />
      <img src={im} alt="placeholder" />
      <img src={im1} alt="placeholder" />
      <img src={im} alt="placeholder" />
      <img src={im1} alt="placeholder" />
      </div>
    </div>
  );
}

// export default function Varity() {
//     return (
//       <div>
//         <div className="var__wrapper">
//           <h2>Broswer And Choose From A Variety</h2>
//           <div className="var__container">
//             <div className="var__im1">
//                 <img src={im1} alt="placeholder" />
//             </div>
//             <div className="var__im">
//                 <img src={im} alt="placeholder" />
//             </div>
//           </div>
//         </div>
//       </div>
//     );
//   }
