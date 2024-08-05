// import React, { useContext, useState, useEffect } from 'react';
// // import { Context } from './Context';
// // import '../style/Dashboard.css';

// const Mainbar = () => {
// //   const { onSent, showResult, setShowResult, loading, resultData, setInput, input, sendMessage } = useContext();
// //   const [chatHistory, setChatHistory] = useState([]);
// //   const [showGetStarted, setShowGetStarted] = useState(true);
  

// //   const handleKeyPress = (event) => {
// //     if (event.key === 'Enter') {
// //       if (input.trim().toLowerCase() === 'cls') {
// //         setChatHistory([]);
// //         setInput('');
// //       } else {
// //         const newChat = { prompt: input, response: '' };
// //         setChatHistory(prevHistory => [...prevHistory, newChat]);
// //         onSent();
// //         sendMessage(event);
// //         setInput('');
// //       }
// //     }
// //   };

// //   useEffect(() => {
// //     if (!loading && showResult && resultData) {
// //       setChatHistory(prevHistory => {
// //         const updatedHistory = [...prevHistory];
// //         updatedHistory[updatedHistory.length - 1].response = resultData;
// //         return updatedHistory;
// //       });
// //     }
// //   }, [loading, showResult, resultData]);

// //   const handleGetStarted = () => {
// //     setShowResult(true);
// //     setShowGetStarted(false);
// //   };

//   return (
//     <div className='chatbody-main'>
//       { (
//         <div className="greet-container">
//           <div className="greet">
//             <h3>Welcome to Circuit Master</h3>
//             <p>
//               I am BII-Circuits, an advanced AI developed as part of Bhramos Industries India's collaboration with OpenAI's ChatGPT. My expertise lies in electronics and communication engineering, focusing on analyzing, understanding, and designing electronic circuits and systems.
//             </p>
//           </div>
//           <button className="get-started-btn" >
//             Get Started
//           </button>
//         </div>
//       )}

//       { (
//         <div className='cli'>
//           <div className='cli-header'>
//             <h2>Circuit-Master-AI</h2>
//             <p>Bhramos Industries India. All rights reserved</p>
//           </div>
//           <div className='cli-body'>
//             <div className='cli-input'>
              
//               <input 
//                 // onChange={(e) => setInput(e.target.value)} 
//                 // value={input} 
//                 type='text' 
//                 placeholder='Enter a prompt here' 
//                 // onKeyPress={handleKeyPress} 
//                 autoFocus 
//               />
//             </div>
//             <div className='cli-output'>
//               {
//                 <div className='cli-result'>
//                   <div className='cli-user-prompt'>
//                     <strong>User:</strong> {}
//                   </div>
//                   <div className='cli-result-data'>
//                     <span className="cli-cm-prompt"><strong>CM:</strong></span>
//                     <div className="cli-response">
//                       <p>{}</p>
//                     </div>
//                   </div>
//                 </div>
//               }
//             </div>
//           </div>
//         </div>
//       )}
//     </div>
//   );
// };

// export default Mainbar;