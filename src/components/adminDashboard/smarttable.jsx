// // import DataTable from "react-data-table-component";
// // import { useEffect, useState, useMemo } from "react";
// // import { Button } from "@/components/ui/button";
// // import {
// //     DropdownMenu,
// //     DropdownMenuContent,
// //     DropdownMenuGroup,
// //     DropdownMenuItem,
// //     DropdownMenuLabel,
// //     DropdownMenuPortal,
// //     DropdownMenuSeparator,
// //     DropdownMenuShortcut,
// //     DropdownMenuSub,
// //     DropdownMenuSubContent,
// //     DropdownMenuSubTrigger,
// //     DropdownMenuTrigger,
// //   } from "@/components/ui/dropdown-menu";

// //   const FilterComponent = ({ onFilter, onClear, filterText }) => (
// //     <div className="flex gap-4  mb-3">
// //       <input
// //         class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
// //         type="text"
// //         placeholder="Filter rows..."
// //         value={filterText}
// //         onChange={onFilter}
// //       />
// //       {/* <button
// //         className="bg-blue-950 text-slate-50 px-3 py-2 rounded-md shadow-sm"
// //         onClick={onClear}
// //       >
// //         Reset
// //       </button> */}
// //     </div>
// //   );
  
// //   export default function SmartDataTable({ data, columns, liftup }) {
// //     const [selectedRows, setSelectedRows] = useState([]);
// //     const [dataBackup, setdataBackup] = useState([]);
// //     const [isClient, setIsClient] = useState(false);
// //     const [filterText, setFilterText] = useState("");
// //     const [resetPaginationToggle, setResetPaginationToggle] = useState(false);
// //     const [selectedColumns, setSelectedColumns] = useState(
// //       columns.map((col) => col.selector)
// //     );
  
// //     useEffect(() => {
// //       setIsClient(true);
// //     }, []);
  
// //     useEffect(() => {
// //       if (selectedRows.selectedCount == 1) {
// //         console.log("selcted row count =1", selectedRows.selectedRows);
// //         console.log("settting data backup", data);
// //         setdataBackup(data);
  
// //         liftup(selectedRows.selectedRows, "singleSelected");
// //       }
// //     }, [selectedRows]);
  
// //     // const conditionalRowStyles = [
// //     //   {
// //     //     when: (row) => row.year == 1981,
// //     //     style: {
// //     //       backgroundColor: "rgba(63, 195, 128, 0.9)",
// //     //       color: "white",
// //     //       "&:hover": {
// //     //         cursor: "pointer",
// //     //       },
// //     //     },
// //     //   },
// //     //   // {
// //     //   //   when: row => row.calories >= 300 && row.calories < 400,
// //     //   //   style: {
// //     //   //     backgroundColor: 'rgba(248, 148, 6, 0.9)',
// //     //   //     color: 'white',
// //     //   //     '&:hover': {
// //     //   //       cursor: 'pointer',
// //     //   //     },
// //     //   //   },
// //     //   // },
// //     //   // {
// //     //   //   when: row => row.calories >= 400,
// //     //   //   style: {
// //     //   //     backgroundColor: 'rgba(242, 38, 19, 0.9)',
// //     //   //     color: 'white',
// //     //   //     '&:hover': {
// //     //   //       cursor: 'not-allowed',
// //     //   //     },
// //     //   //   },
// //     //   // },
// //     // ];
  
// //     const filteredItems = useMemo(() => {
// //       return data.filter((item) =>
// //         Object.values(item).some(
// //           (value) =>
// //             value &&
// //             typeof value == "string" &&
// //             value.toLowerCase().includes(filterText.toLowerCase())
// //         )
// //       );
// //     }, [data, filterText]);
  
// //     const handleClear = () => {
// //       if (filterText) {
// //         setResetPaginationToggle(!resetPaginationToggle);
// //         setFilterText("");
// //       }
// //     };
  
// //     const handleColumnToggle = (columnSelector) => {
// //       setSelectedColumns((prevColumns) =>
// //         prevColumns.includes(columnSelector)
// //           ? prevColumns.filter((col) => col !== columnSelector)
// //           : [...prevColumns, columnSelector]
// //       );
// //     };
  
// //     const subHeaderComponentMemo = useMemo(
// //       () => (
// //         <div className="flex">
// //           <FilterComponent
// //             onFilter={(e) => setFilterText(e.target.value)}
// //             onClear={handleClear}
// //             filterText={filterText}
// //           />
// //           <div className="mx-2 text-sm font-thin ">
// //             <DropdownMenu>
// //               <DropdownMenuTrigger asChild>
// //                 <Button variant="outline">Filter Columns</Button>
// //               </DropdownMenuTrigger>
// //               <DropdownMenuContent className="w-56" style={{ overflow: "auto" }}>
// //                 <DropdownMenuLabel>Select Columns</DropdownMenuLabel>
// //                 <DropdownMenuSeparator />
// //                 <DropdownMenuGroup className="dataTableColumnDropdown">
// //                   {columns.map((column, index) => (
// //                     <DropdownMenuItem key={index}>
// //                       <label className="mx-2" key={column.name}>
// //                         <input
// //                           className="shadow-xs"
// //                           type="checkbox"
// //                           checked={selectedColumns.includes(column.selector)}
// //                           onChange={() => handleColumnToggle(column.selector)}
// //                         />{" "}
// //                         {column.name}
// //                       </label>
// //                     </DropdownMenuItem>
// //                   ))}
// //                 </DropdownMenuGroup>
// //                 <DropdownMenuSeparator />
// //               </DropdownMenuContent>
// //             </DropdownMenu>
// //           </div>
// //         </div>
// //       ),
// //       [columns, selectedColumns, filterText, resetPaginationToggle]
// //     );
  
// //     const filteredColumns = columns.filter((col) =>
// //       selectedColumns.includes(col.selector)
// //     );
  
// //     const handleSelectedRowsChange = (newSelectedRows) => {
// //       if (selectedRows?.selectedRows?.length) {
// //         console.log("lifting up data backup", dataBackup);
  
// //         liftup(dataBackup, "tableReset");
// //         setSelectedRows([]);
// //       } else {
// //         setSelectedRows(newSelectedRows);
// //         // Perform actions based on the selected rows (e.g., update UI, send data to server, etc.)
// //         console.log("Selected Rows:", newSelectedRows);
// //       }
// //     };
  
// //     return (
// //       <>
// //         {isClient && (
// //           <DataTable
// //             columns={filteredColumns}
// //             data={filteredItems}
// //             selectableRows
// //             pagination
// //             paginationResetDefaultPage={resetPaginationToggle}
// //             fixedHeader
// //             subHeader
// //             subHeaderComponent={subHeaderComponentMemo}
// //             // conditionalRowStyles={conditionalRowStyles}
// //             persistTableHead
// //             onSelectedRowsChange={handleSelectedRowsChange}
// //           />
// //         )}
// //       </>
// //     );
// //   }


// import React, { useEffect, useState, useMemo } from "react";
// import DataTable from "react-data-table-component";
// import { Button } from "@/components/ui/button";
// import {
//     DropdownMenu,
//     DropdownMenuContent,
//     DropdownMenuGroup,
//     DropdownMenuItem,
//     DropdownMenuLabel,
//     DropdownMenuSeparator,
//     DropdownMenuTrigger,
// } from "@/components/ui/dropdown-menu";

// const FilterComponent = ({ onFilter, onClear, filterText }) => (
//     <div className="flex gap-4 mb-3">
//         <input
//             className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
//             type="text"
//             placeholder="Filter rows..."
//             value={filterText}
//             onChange={onFilter}
//         />
//         <button
//             className="bg-blue-950 text-slate-50 px-3 py-2 rounded-md shadow-sm"
//             onClick={onClear}
//         >
//             Reset
//         </button>
//     </div>
// );

// export default function SmartDataTable() {
//     const [selectedRows, setSelectedRows] = useState([]);
//     const [dataBackup, setDataBackup] = useState([]);
//     const [isClient, setIsClient] = useState(false);
//     const [filterText, setFilterText] = useState("");
//     const [resetPaginationToggle, setResetPaginationToggle] = useState(false);
//     const [selectedColumns, setSelectedColumns] = useState([]);

//     const columns = useMemo(() => [
//         { name: 'Name', selector: 'name', sortable: true },
//         { name: 'Country', selector: 'country', sortable: true },
//         { name: 'Company', selector: 'company', sortable: true },
//         { name: 'Representative', selector: 'representative', sortable: true }
//     ], []);

//     const data = useMemo(() => [
//         { id: 1, name: 'James Butt', country: 'USA', company: 'Benton, John B Jr', representative: 'Ioni Bowcher' },
//         { id: 2, name: 'Josephine Darakjy', country: 'Germany', company: 'Chanay, Jeffrey A Esq', representative: 'Amy Elsner' },
//         { id: 3, name: 'Art Venere', country: 'Brazil', company: 'Chemel, James L Cpa', representative: 'Asiya Javayant' },
//         { id: 4, name: 'Lenna Paprocki', country: 'Canada', company: 'Feltz Printing Service', representative: 'Xuxue Feng' },
//         { id: 5, name: 'Donette Foller', country: 'Australia', company: 'Printing Dimensions', representative: 'Onyama Limba' },
//         { id: 6, name: 'Simona Morasca', country: 'Italy', company: 'Chapman, Ross E Esq', representative: 'Ivan Magalhaes' },
//         { id: 7, name: 'Mitsue Tollner', country: 'Japan', company: 'Morlong Associates', representative: 'Stephen Shaw' },
//         { id: 8, name: 'Leota Dilliard', country: 'France', company: 'Commercial Press', representative: 'Leonel Suazo' },
//         { id: 9, name: 'Sage Wieser', country: 'Ireland', company: 'Truhlar And Truhlar Attys', representative: 'Samuels Cley' },
//         { id: 10, name: 'Kris Marrier', country: 'Scotland', company: 'King, Christopher A Esq', representative: 'Caroline Sauder' }
//     ], []);

//     useEffect(() => {
//         setIsClient(true);
//         setSelectedColumns(columns.map((col) => col.selector));
//     }, [columns]);

//     useEffect(() => {
//         if (selectedRows.selectedCount === 1) {
//             console.log("Selected row count = 1", selectedRows.selectedRows);
//             console.log("Setting data backup", data);
//             setDataBackup(data);
//             // liftup(selectedRows.selectedRows, "singleSelected");
//         }
//     }, [selectedRows, data]);

//     const filteredItems = useMemo(() => {
//         return data.filter((item) =>
//             Object.values(item).some(
//                 (value) =>
//                     value &&
//                     typeof value === "string" &&
//                     value.toLowerCase().includes(filterText.toLowerCase())
//             )
//         );
//     }, [data, filterText]);

//     const handleClear = () => {
//         if (filterText) {
//             setResetPaginationToggle(!resetPaginationToggle);
//             setFilterText("");
//         }
//     };

//     const handleColumnToggle = (columnSelector) => {
//         setSelectedColumns((prevColumns) =>
//             prevColumns.includes(columnSelector)
//                 ? prevColumns.filter((col) => col !== columnSelector)
//                 : [...prevColumns, columnSelector]
//         );
//     };

//     const subHeaderComponentMemo = useMemo(
//         () => (
//             <div className="flex">
//                 <FilterComponent
//                     onFilter={(e) => setFilterText(e.target.value)}
//                     onClear={handleClear}
//                     filterText={filterText}
//                 />
//                 <div className="mx-2 text-sm font-thin">
//                     <DropdownMenu>
//                         <DropdownMenuTrigger asChild>
//                             <Button variant="outline">Filter Columns</Button>
//                         </DropdownMenuTrigger>
//                         <DropdownMenuContent className="w-56" style={{ overflow: "auto" }}>
//                             <DropdownMenuLabel>Select Columns</DropdownMenuLabel>
//                             <DropdownMenuSeparator />
//                             <DropdownMenuGroup className="dataTableColumnDropdown">
//                                 {columns.map((column, index) => (
//                                     <DropdownMenuItem key={index}>
//                                         <label className="mx-2" key={column.name}>
//                                             <input
//                                                 className="shadow-xs"
//                                                 type="checkbox"
//                                                 checked={selectedColumns.includes(column.selector)}
//                                                 onChange={() => handleColumnToggle(column.selector)}
//                                             />{" "}
//                                             {column.name}
//                                         </label>
//                                     </DropdownMenuItem>
//                                 ))}
//                             </DropdownMenuGroup>
//                             <DropdownMenuSeparator />
//                         </DropdownMenuContent>
//                     </DropdownMenu>
//                 </div>
//             </div>
//         ),
//         [columns, selectedColumns, filterText, resetPaginationToggle]
//     );

//     const filteredColumns = columns.filter((col) =>
//         selectedColumns.includes(col.selector)
//     );

//     const handleSelectedRowsChange = (newSelectedRows) => {
//         if (selectedRows?.selectedRows?.length) {
//             console.log("Lifting up data backup", dataBackup);
//             // liftup(dataBackup, "tableReset");
//             setSelectedRows([]);
//         } else {
//             setSelectedRows(newSelectedRows);
//             console.log("Selected Rows:", newSelectedRows);
//         }
//     };

//     return (
//         <>
//             {isClient && (
//                 <DataTable
//                     columns={filteredColumns}
//                     data={filteredItems}
//                     selectableRows
//                     pagination
//                     paginationResetDefaultPage={resetPaginationToggle}
//                     fixedHeader
//                     subHeader
//                     subHeaderComponent={subHeaderComponentMemo}
//                     persistTableHead
//                     onSelectedRowsChange={handleSelectedRowsChange}
//                 />
//             )}
//         </>
//     );
// }

import React, { useEffect, useState, useMemo } from "react";
import DataTable from "react-data-table-component";
import { Button } from "@/components/ui/button";
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuGroup,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

const FilterComponent = ({ onFilter, onClear, filterText }) => (
    <div className="flex gap-4 mb-3">
        <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            type="text"
            placeholder="Filter rows..."
            value={filterText}
            onChange={onFilter}
        />
        <button
            className="bg-blue-950 text-slate-50 px-3 py-2 rounded-md shadow-sm"
            onClick={onClear}
        >
            Reset
        </button>
    </div>
);

export default function SmartDataTable() {
    const [selectedRows, setSelectedRows] = useState([]);
    const [dataBackup, setDataBackup] = useState([]);
    const [isClient, setIsClient] = useState(false);
    const [filterText, setFilterText] = useState("");
    const [resetPaginationToggle, setResetPaginationToggle] = useState(false);
    const [selectedColumns, setSelectedColumns] = useState([]);

    const columns = useMemo(() => [
        { name: 'Name', selector: 'name', sortable: true },
        { name: 'Country', selector: 'country', sortable: true },
        { name: 'Company', selector: 'company', sortable: true },
        { name: 'Representative', selector: 'representative', sortable: true }
    ], []);

    const data = useMemo(() => [
        { id: 1, name: 'James Butt', country: 'USA', company: 'Benton, John B Jr', representative: 'Ioni Bowcher' },
        { id: 2, name: 'Josephine Darakjy', country: 'Germany', company: 'Chanay, Jeffrey A Esq', representative: 'Amy Elsner' },
        { id: 3, name: 'Art Venere', country: 'Brazil', company: 'Chemel, James L Cpa', representative: 'Asiya Javayant' },
        { id: 4, name: 'Lenna Paprocki', country: 'Canada', company: 'Feltz Printing Service', representative: 'Xuxue Feng' },
        { id: 5, name: 'Donette Foller', country: 'Australia', company: 'Printing Dimensions', representative: 'Onyama Limba' },
        { id: 6, name: 'Simona Morasca', country: 'Italy', company: 'Chapman, Ross E Esq', representative: 'Ivan Magalhaes' },
        { id: 7, name: 'Mitsue Tollner', country: 'Japan', company: 'Morlong Associates', representative: 'Stephen Shaw' },
        { id: 8, name: 'Leota Dilliard', country: 'France', company: 'Commercial Press', representative: 'Leonel Suazo' },
        { id: 9, name: 'Sage Wieser', country: 'Ireland', company: 'Truhlar And Truhlar Attys', representative: 'Samuels Cley' },
        { id: 10, name: 'Kris Marrier', country: 'Scotland', company: 'King, Christopher A Esq', representative: 'Caroline Sauder' }
    ], []);

    useEffect(() => {
        setIsClient(true);
        setSelectedColumns(columns.map((col) => col.selector));
    }, [columns]);

    useEffect(() => {
        if (selectedRows.selectedCount === 1) {
            console.log("Selected row count = 1", selectedRows.selectedRows);
            console.log("Setting data backup", data);
            setDataBackup(data);
            // liftup(selectedRows.selectedRows, "singleSelected");
        }
    }, [selectedRows, data]);

    const filteredItems = useMemo(() => {
        return data.filter((item) =>
            Object.values(item).some(
                (value) =>
                    value &&
                    typeof value === "string" &&
                    value.toLowerCase().includes(filterText.toLowerCase())
            )
        );
    }, [data, filterText]);

    const handleClear = () => {
        if (filterText) {
            setResetPaginationToggle(!resetPaginationToggle);
            setFilterText("");
        }
    };

    const handleColumnToggle = (columnSelector) => {
        setSelectedColumns((prevColumns) =>
            prevColumns.includes(columnSelector)
                ? prevColumns.filter((col) => col !== columnSelector)
                : [...prevColumns, columnSelector]
        );
    };

    const subHeaderComponentMemo = useMemo(
        () => (
            <div className="flex">
                <FilterComponent
                    onFilter={(e) => setFilterText(e.target.value)}
                    onClear={handleClear}
                    filterText={filterText}
                />
                <div className="mx-2 text-sm font-thin">
                    <DropdownMenu>
                        <DropdownMenuTrigger asChild>
                            <Button variant="outline">Filter Columns</Button>
                        </DropdownMenuTrigger>
                        <DropdownMenuContent className="w-56" style={{ overflow: "auto" }}>
                            <DropdownMenuLabel>Select Columns</DropdownMenuLabel>
                            <DropdownMenuSeparator />
                            <DropdownMenuGroup className="dataTableColumnDropdown">
                                {columns.map((column, index) => (
                                    <DropdownMenuItem key={index}>
                                        <label className="mx-2" key={column.name}>
                                            <input
                                                className="shadow-xs"
                                                type="checkbox"
                                                checked={selectedColumns.includes(column.selector)}
                                                onChange={() => handleColumnToggle(column.selector)}
                                            />{" "}
                                            {column.name}
                                        </label>
                                    </DropdownMenuItem>
                                ))}
                            </DropdownMenuGroup>
                            <DropdownMenuSeparator />
                        </DropdownMenuContent>
                    </DropdownMenu>
                </div>
            </div>
        ),
        [columns, selectedColumns, filterText, resetPaginationToggle]
    );

    const filteredColumns = columns.filter((col) =>
        selectedColumns.includes(col.selector)
    );

    const handleSelectedRowsChange = (newSelectedRows) => {
        if (selectedRows?.selectedRows?.length) {
            console.log("Lifting up data backup", dataBackup);
            // liftup(dataBackup, "tableReset");
            setSelectedRows([]);
        } else {
            setSelectedRows(newSelectedRows);
            console.log("Selected Rows:", newSelectedRows);
        }
    };

    return (
        <>
            {isClient && (
                <DataTable
                    columns={filteredColumns}
                    data={filteredItems}
                    selectableRows
                    pagination
                    paginationResetDefaultPage={resetPaginationToggle}
                    fixedHeader
                    subHeader
                    subHeaderComponent={subHeaderComponentMemo}
                    persistTableHead
                    onSelectedRowsChange={handleSelectedRowsChange}
                />
            )}
        </>
    );
}
