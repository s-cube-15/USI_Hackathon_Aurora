import React, { useState, useEffect } from "react";
import { Box, Typography, useTheme, TextField } from "@mui/material";
import { DataGrid } from "@mui/x-data-grid";
import { tokens } from "../../theme";
import Header from "../../components/Header";
import { useNavigate } from "react-router-dom";

const Team = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const navigate = useNavigate();
  const [customerData, setCustomerData] = useState([]);
  const [searchText, setSearchText] = useState("");
  const [filteredData, setFilteredData] = useState([]);

  useEffect(() => {
    const fetchCustomerDetails = async () => {
      try {
        const response = await fetch(
          "https://es0tr1slkc.execute-api.us-east-1.amazonaws.com/stage02/customer_data",
          {
            method: "GET",
            headers: {
              "Content-Type": "application/json",
            }
          }
        );

        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }

        const data = await response.json();
        const parsedData = JSON.parse(data.body[0]);
        setCustomerData(parsedData);
        setFilteredData(parsedData); // Initialize filtered data
      } catch (error) {
        console.error("Error fetching customer details:", error);
      }
    };

    fetchCustomerDetails();
  }, []);

  useEffect(() => {
    // Filter data to match names starting with the search text (exact match for the start)
    const filtered = customerData.filter((customer) => {
      const name = customer.customer_name.trim().toLowerCase();
      const search = searchText.trim().toLowerCase();
      return name.startsWith(search); // Ensure it matches the start and is not a partial match
    });
    setFilteredData(filtered);
  }, [searchText, customerData]);

  const handleRowClick = (params) => {
    if (params.field === "customer_name") {
      const userDetails = params.row; // Get the selected user's details
      navigate("/client", { state: { userDetails } }); // Navigate to the Client page with user details
    }
  };

  const columns = [
    { field: "customer_id", headerName: "ID" },
    {
      field: "customer_name",
      headerName: "Name",
      flex: 1,
      cellClassName: "name-column--cell",
    },
    {
      field: "email",
      headerName: "Email",
      type: "number",
      headerAlign: "left",
      align: "left",
      flex: 1,
    },
    {
      field: "phone",
      headerName: "Phone",
      flex: 1,
    },
    {
      field: "address",
      headerName: "Address",
      flex: 1,
    },
    {
      field: "pincode",
      headerName: "Pincode",
      flex: 1,
    },
  ];

  return (
    <Box m="20px">
      {/* <Header title="TEAM" subtitle="Managing the Team Members" /> */}
      <TextField
        label="Search by Name"
        variant="outlined"
        fullWidth
        margin="normal"
        value={searchText}
        sx={{
          "& .MuiOutlinedInput-root": {
            "&.Mui-focused fieldset": {
              borderColor: "inherit", // Prevent color change on focus
            },
          },
          "& .MuiInputLabel-root": {
            "&.Mui-focused": {
              color: "inherit", // Prevent label color change on focus
            },
          },
        }}
        onChange={(e) => setSearchText(e.target.value)}
      />
      <Box
        m="40px 0 0 0"
        height="75vh"
        sx={{
          "& .MuiDataGrid-root": {
            border: "none",
          },
          "& .MuiDataGrid-cell": {
            borderBottom: "none",
          },
          "& .name-column--cell": {
            color: colors.greenAccent[300],
          },
          "& .MuiDataGrid-columnHeaders": {
            backgroundColor: colors.blueAccent[700],
            borderBottom: "none",
          },
          "& .MuiDataGrid-virtualScroller": {
            backgroundColor: colors.primary[400],
          },
          "& .MuiDataGrid-footerContainer": {
            borderTop: "none",
            backgroundColor: colors.blueAccent[700],
          },
          "& .MuiCheckbox-root": {
            color: `${colors.greenAccent[200]} !important`,
          },
        }}
      >
        <DataGrid
          rows={filteredData}
          columns={columns}
          onCellClick={handleRowClick}
          style={{ cursor: "pointer" }}
          getRowId={(row) => row.customer_id}
        />
      </Box>
    </Box>
  );
};

export default Team;
