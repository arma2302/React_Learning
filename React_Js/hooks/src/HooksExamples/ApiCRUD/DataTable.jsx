// import * as React from "react";
// import { DataGrid, useGridApiRef } from "@mui/x-data-grid";
// import Paper from "@mui/material/Paper";
// import { IconButton } from "@mui/material";
// import DeleteIcon from "@mui/icons-material/Delete";
// import EditIcon from "@mui/icons-material/Edit";

// const columns = [
//   { field: "id", headerName: "ID" },
//   { field: "name", headerName: "Username", width: 300 },
//   { field: "email", headerName: "Email", width: 600 },
//   {
//     field: "actions",
//     headerName: "Actions",
//     width: 150,
//     renderCell: (params) => (
//       <div>
//         <IconButton
//           onClick={() => handleEdit(params.row)}
//           aria-label="edit"
//           key={`edit-${params.row.id}`}
//         >
//           <EditIcon />
//         </IconButton>
//         <IconButton
//           onClick={() => handleDelete(params.row.id)}
//           aria-label="delete"
//           key={`delete-${params.row.id}`}
//         >
//           <DeleteIcon />
//         </IconButton>
//       </div>
//     ),
//   },
// ];

// export default function DataTable({ apiData }) {
//   const data = apiData; // assuming apiData is an array of objects
//   const handleEdit = (row) => {
//     console.log("Edit row:", row);
//   };

//   const handleDelete = (id) => {
//     console.log("Delete row with ID:", id);
//     fetch(`https://jsonplaceholder.typicode.com/users/${id}`, {
//       method: "DELETE",
//     })
//       .then((response) => {
//         if (!response.ok) {
//           throw new Error("Network response was not ok");
//         }
//         return response.json();
//       })
//       .then(() => {
//         data.filter((item) => item.id !== id);
//       })
//       .then(() => {
//         // Handle successful deletion (e.g., update state to remove the row)
//         console.log(`Row with ID ${id} deleted successfully.`);
//       })
//       .catch((error) => {
//         console.error("There was a problem with the delete request:", error);
//       });
//   };
//   return (
//     <Paper sx={{ height: 400, width: "100%" }}>
//       <DataGrid
//         columns={columns}
//         rows={data}
//         checkboxSelection
//         autoPageSize
//         sx={{ border: 0 }}
//       />
//     </Paper>
//   );
// }
