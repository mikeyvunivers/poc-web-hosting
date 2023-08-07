import {
  Box,
  Typography,
  Table,
  TableHead,
  TableBody,
  TableCell,
  TableRow,
} from "@mui/material";
import numeral from "numeral";
import { format } from "date-fns";

export const TransactionDesc = ({ transaction }) => {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        width: "40%",
        minWidth: "360px",
        backgroundColor: "#FFFFFF",
        borderRadius: "20px",
        p: { xs: 2, md: 3 },
        my: 1,
      }}
    >
      <Table>
        <TableHead>
          <TableRow>
            <TableCell sx={{ px: 0, py: 2, whiteSpace: "normal" }}>
              <Typography
                sx={{
                  fontStyle: "normal",
                  fontWeight: 500,
                  fontSize: "16px",
                  color: "#111827",
                }}
              >
                {"Amount Requested:"}
              </Typography>
            </TableCell>
            <TableCell sx={{ px: 0, py: 2, whiteSpace: "normal" }}>
              <Typography
                sx={{
                  fontStyle: "normal",
                  fontWeight: 600,
                  fontSize: "24px",
                  color: "#111827",
                  textAlign: "right",
                }}
              >
                {`${numeral(transaction.requestedAmount).format(
                  "$0,0.00"
                )} (${numeral(
                  (Math.abs(transaction.requestedAmount) /
                    Math.abs(transaction.totalAmount)) *
                    100
                ).format("0")}%)`}
              </Typography>
            </TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          <TableRow>
            <TableCell sx={{ px: 0, py: 2, whiteSpace: "normal" }}>
              <Typography
                sx={{
                  fontStyle: "normal",
                  fontWeight: 500,
                  fontSize: "12px",
                  color: "#6B7280",
                }}
              >
                {"Total amount"}
              </Typography>
            </TableCell>
            <TableCell sx={{ px: 0, py: 2, whiteSpace: "normal" }}>
              <Typography
                sx={{
                  fontStyle: "normal",
                  fontWeight: 600,
                  fontSize: "18px",
                  color: "#111827",
                  textAlign: "right",
                }}
              >
                {`${numeral(Math.abs(transaction.totalAmount)).format(
                  "$0,0.00"
                )}`}
              </Typography>
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell
              sx={{ px: 0, py: 1, border: "none", whiteSpace: "normal" }}
            >
              <Typography
                sx={{
                  fontStyle: "normal",
                  fontWeight: 500,
                  fontSize: "12px",
                  color: "#6B7280",
                }}
              >
                {"Date"}
              </Typography>
            </TableCell>
            <TableCell
              sx={{ px: 0, py: 1, border: "none", whiteSpace: "normal" }}
            >
              <Typography
                sx={{
                  fontStyle: "normal",
                  fontWeight: 500,
                  fontSize: "12px",
                  color: "#111827",
                  textAlign: "right",
                }}
              >
                {format(new Date(transaction.date).getTime(), "MMM dd yyyy")}
              </Typography>
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell
              sx={{ px: 0, py: 1, border: "none", whiteSpace: "normal" }}
            >
              <Typography
                sx={{
                  fontStyle: "normal",
                  fontWeight: 500,
                  fontSize: "12px",
                  color: "#6B7280",
                }}
              >
                {"Merchant"}
              </Typography>
            </TableCell>
            <TableCell
              sx={{ px: 0, py: 1, border: "none", whiteSpace: "normal" }}
            >
              <Typography
                sx={{
                  fontStyle: "normal",
                  fontWeight: 500,
                  fontSize: "12px",
                  color: "#111827",
                  textAlign: "right",
                }}
              >
                {transaction.merchant}
              </Typography>
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell
              sx={{ px: 0, py: 1, border: "none", whiteSpace: "normal" }}
            >
              <Typography
                sx={{
                  fontStyle: "normal",
                  fontWeight: 500,
                  fontSize: "12px",
                  color: "#6B7280",
                }}
              >
                {"Category"}
              </Typography>
            </TableCell>
            <TableCell
              sx={{ px: 0, py: 1, border: "none", whiteSpace: "normal" }}
            >
              <Typography
                sx={{
                  fontStyle: "normal",
                  fontWeight: 500,
                  fontSize: "12px",
                  color: "#111827",
                  textAlign: "right",
                }}
              >
                {transaction.category}
              </Typography>
            </TableCell>
          </TableRow>
        </TableBody>
      </Table>
    </Box>
  );
};
