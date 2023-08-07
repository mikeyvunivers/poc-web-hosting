import PropTypes from "prop-types";
import { Box } from "@mui/material";
import {
  TransactionAction,
  TransactionDesc,
  TransactionTitle,
} from "./transaction";

export const ExternalBody = (props) => {
  const { transaction, ...other } = props;

  return (
    <Box
      sx={{
        flex: 1,
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <TransactionTitle transaction={transaction} />
      <TransactionDesc transaction={transaction} />
      <TransactionAction transaction={transaction} />
    </Box>
  );
};

ExternalBody.propTypes = {
  transaction: PropTypes.any,
};
