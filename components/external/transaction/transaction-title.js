import { Box, Typography, Avatar } from "@mui/material";

export const TransactionTitle = ({ transaction }) => {
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
        mt: 2,
      }}
    >
      <Box sx={{ display: "flex", flexDirection: "row", alignItems: "center" }}>
        <Avatar
          alt={transaction.senderName}
          src={transaction?.senderAvatar}
          sx={{
            height: 60,
            width: 60,
          }}
        />
        <Typography
          sx={{
            fontStyle: "normal",
            fontWeight: 700,
            fontSize: { xs: "24px", md: "40px" },
            color: "#111827",
            ml: 2,
          }}
        >
          {transaction.senderName}
        </Typography>
      </Box>
      <Typography
        sx={{
          fontStyle: "normal",
          fontWeight: 600,
          fontSize: { xs: "20px", md: "24px" },
          color: "#111827",
          mt: 2,
        }}
      >
        {transaction.description
          ? `I want to share ${transaction.description}`
          : "I want to share a transaction"}
      </Typography>
    </Box>
  );
};
