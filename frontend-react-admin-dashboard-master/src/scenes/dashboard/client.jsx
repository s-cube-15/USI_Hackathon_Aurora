import { Box, useTheme, Typography, Button } from "@mui/material";
import { DataGrid } from "@mui/x-data-grid";
import { tokens } from "../../theme";
import Header from "../../components/Header";
import StatBox from "../../components/StatBox";
import { mockTransactions } from "../../data/mockData";
import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import { useState } from "react";
import { MoveDownOutlined } from "@mui/icons-material";

const ClientDashboard = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  const location = useLocation();
  const userDetails = location.state?.userDetails; // Retrieve user details from state
  const [kpiData, setKpiData] = useState([]);

  useEffect(() => {
    const fetchCustomerDetails = async () => {
      try {
        const response = await fetch(
          "https://es0tr1slkc.execute-api.us-east-1.amazonaws.com/stage02/personalised_recommendation",
          {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({
              user_id: userDetails?.customer_id,
            }),
          }
        );

        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }

        const data = await response.json();
        setKpiData(data);
      } catch (error) {
        console.error("Error fetching customer details:", error);
      }
    };

    fetchCustomerDetails();
  }, []);

  const columns = [
    { field: "txId", headerName: "ID" }
  ];

  const [customerData, setCustomerData] = useState([]);

  useEffect(() => {
    const fetchCustomerDetails = async () => {
      try {
        const response = await fetch(
          "https://es0tr1slkc.execute-api.us-east-1.amazonaws.com/stage02/customer_data",
          {
            method: "GET",
            headers: {
              "Content-Type": "application/json",
            },
          }
        );

        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }

        const data = await response.json();

        const parsedData = JSON.parse(data.body[0]);

        setCustomerData(parsedData);
      } catch (error) {
        console.error("Error fetching customer details:", error);
      }
    };

    fetchCustomerDetails();
  }, []);
  return (
    <Box m="20px">
      {/* Display user details if available */}

      <div>
        {kpiData?.body?.CustomerDetail?.CustomerName && (
          <Box
            display="flex"
            justifyContent="space-between"
            alignItems="center"
          >
            <Header
              title={`${kpiData?.body?.CustomerDetail?.CustomerName}`}
              subtitle={`${kpiData?.body?.CustomerDetail?.CustomerEmail}`}
            />
            <Box display="flex" gap="10px">
              <Typography variant="h3" style={{ padding: "10px 0" }}>
                Churn Probability:
              </Typography>
              <Typography
                variant="h3"
                style={{
                  background: "#3e4396",
                  padding: "10px",
                  borderRadius: "5px",
                }}
              >
                {JSON.stringify(
                  kpiData?.body?.ImportantKPIs?.Customer_Churn_Probablity
                )}
              </Typography>
            </Box>
          </Box>
        )}

        {/* GRID & CHARTS */}
        <Box
          display="grid"
          gridTemplateColumns="repeat(12, 1fr)"
          gridAutoRows="140px"
          gap="20px"
        >
          {/* ROW 1 */}
          <Box
            gridColumn="span 3"
            backgroundColor={colors.primary[400]}
            display="flex"
            alignItems="center"
            justifyContent="center"
          >
            <StatBox
              title="Frequency"
              tooltipText="Frequency is the number of purchases between the date of their last purchase and the current or max date available in the data."
              subtitle={kpiData?.body?.ImportantKPIs?.Frequency || "0"}
              className="stats"
              sx={{ ".css-1yg19ie": { width: "0" } }}
            />
          </Box>

          <Box
            gridColumn="span 3"
            backgroundColor={colors.primary[400]}
            display="flex"
            alignItems="center"
            justifyContent="center"
          >
            <StatBox
              title="Recency"
              tooltipText="Recency is the number of days between the last purchase made by a customer and a reference date, usually the current or max date available in the data."
              subtitle={kpiData.body?.ImportantKPIs?.Recency || "0"}
            />
          </Box>
          <Box
            gridColumn="span 3"
            backgroundColor={colors.primary[400]}
            display="flex"
            alignItems="center"
            justifyContent="center"
          >
            <StatBox
              title="Monetary"
              tooltipText="Monetary is the total amount of money spent between the date of their first and last purchases."
              subtitle={kpiData?.body?.ImportantKPIs?.Monetary || "0"}
            />
          </Box>
          <Box
            gridColumn="span 3"
            backgroundColor={colors.primary[400]}
            display="flex"
            alignItems="center"
            justifyContent="center"
          >
            <StatBox title="Rewards" subtitle={userDetails?.reward_points} />
          </Box>
        </Box>
      </div>

      {/* Personalized Offers Section */}
      <Box
        mt="40px"
        p="20px"
        backgroundColor={colors.primary[400]}
        borderRadius="10px"
      >
        <Typography variant="h4" fontWeight="600" mb="20px">
          Your Personalized Offer
        </Typography>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(3,1fr)",
            gridGap: "10px",
          }}
        >
          {kpiData?.body?.CustomerPersonalisedOffer &&
            kpiData.body.CustomerPersonalisedOffer.map((offer, index) => (
              <Box
                key={index}
                backgroundColor={colors.primary[500]}
                p="20px"
                borderRadius="8px"
                boxShadow="0 4px 8px rgba(0,0,0,0.1)"
                mb="20px" // Add margin-bottom to separate each offer
              >
                <Typography
                  variant="h4"
                  fontWeight="bold"
                  color={colors.greenAccent[400]}
                  mb="10px"
                >
                  {offer.OfferName}
                </Typography>

                <Typography variant="body1" mb="15px">
                  {offer.OfferDescription}
                </Typography>

                <Box
                  display="flex"
                  alignItems="center"
                  justifyContent="space-between"
                >
                  <Typography variant="body2" fontStyle="italic">
                    Valid until: {offer.ValidityPeriod}
                  </Typography>
                  <Button
                    variant="body2"
                    style={{ backgroundColor: "#3e4396" }}
                  >
                    Send Email
                  </Button>
                </Box>
              </Box>
            ))}
        </div>
      </Box>

      {/* {mockTransactions.map((transaction, i) => (
        <Box
          key={`${transaction.txId}-${i}`}
          display="flex"
          justifyContent="space-between"
          alignItems="center"
          borderBottom={`4px solid ${colors.primary[500]}`}
          p="15px"
        >
          <Box>
            <Typography
              color={colors.greenAccent[500]}
              variant="h5"
              fontWeight="600"
            >
              {transaction.txId}
            </Typography>
          </Box>
          <Box color={colors.grey[100]}>{transaction.date}</Box>
          <Box
            backgroundColor={colors.greenAccent[500]}
            p="5px 10px"
            borderRadius="4px"
          >
            ₹{transaction.cost}
          </Box>
        </Box>
      ))} */}
      <Box mt="20px">
        <Typography variant="h5" fontWeight="600" mb="10px">
          Transactions
        </Typography>
        <Box height="400px" backgroundColor={colors.primary[400]}>
          <DataGrid
            rows={mockTransactions.map((transaction, i) => ({
              id: i,
              txId: transaction.txId,
              date: transaction.date,
              cost: transaction.cost,
            }))}
            columns={[
              { field: "txId", headerName: "Transaction ID", flex: 1 },
              { field: "date", headerName: "Date", flex: 1 },
              { field: "cost", headerName: "Cost", flex: 1 },
            ]}
            pageSize={5}
            rowsPerPageOptions={[5]}
            sx={{
              "& .MuiDataGrid-root": {
                border: "none",
              },
              "& .MuiDataGrid-cell": {
                borderBottom: `1px solid ${colors.primary[500]}`,
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
            }}
          />
        </Box>
      </Box>
    </Box>
  );
};

export default ClientDashboard;
