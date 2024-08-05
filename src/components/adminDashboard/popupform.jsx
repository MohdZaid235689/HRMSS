import React from 'react';

const PopupForm = ({ togglePopup }) => { // Receive togglePopup function as prop
  return (
    // <div className="fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white p-6 rounded-lg z-40">
    //   <div className="bg-black p-6 rounded-lg shadow-lg w-[680px] h-[550px]">
    //     <h2 className=" font-bold text-blue-900 text-4xl mb-4">Add Job</h2>
    //     <form>
    //       {/* Form fields go here */}
    //       <div className="mb-4 mt-5 bg-slate-200 h-[400px] rounded-xl">
    //         <label htmlFor="name" className="block text-sm font-medium text-white px-10 py-10 h-[100px] bg-black">
    //           Name
    //         </label>
    //         <input
    //           type="text"
    //           id="name"
    //           name="name"
    //           className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
    //         />
    //       </div>
    //       {/* More form fields */}
    //       <div className="flex justify-end">
    //         <button
    //           type="button"
    //           onClick={togglePopup} // Use togglePopup function from props
    //           className="mr-2 bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded"
    //         >
    //           Cancel
    //         </button>
    //         <button
    //           type="submit"
    //           className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
    //         >
    //           Submit
    //         </button>
    //       </div>
    //     </form>
    //   </div>
    // </div>
    <>
        <div className="fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white p-6 rounded-lg z-40">
          
            <div className="flex justify-center items-center bg-black p-6 rounded-lg shadow-lg w-[500px] h-[500px]">
              add
                <div className="w-[400px] h-[400px] bg-slate-600"></div>
            </div>

        </div>
    </>
  );

};

export default PopupForm;


// import React from 'react';

// const PopupForm = ({ togglePopup }) => {
//   return (
//     <div className="fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white p-6 rounded-lg z-40">
//       <h2 className="text-xl font-bold mb-4">Job Form</h2>
//       {/* Form elements */}
//       <button onClick={togglePopup} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
//         Close
//       </button>
//     </div>
//   );
// };

// export default PopupForm;
