"use client"
import { Box, Typography, useMediaQuery } from "@mui/material";
import Image from "next/image";
// import { NetworkData } from "../dashboard/dashboard-footer";

export const ExternalFooter = () => {
  const lgUp =  true;
// useMediaQuery((theme) => theme.breakpoints.up("lg"));
  if (lgUp) {
    return (
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          px: { xs: 2, md: 3 },
          py: 2,
          background: "rgba(255, 255, 255, 0.2)",
          backdropFilter: "blur(25px)",
        }}
      >
        <Typography
          sx={{
            flex: 1,
            fontStyle: "normal",
            fontSize: "14px",
            fontWeight: "600",
            color: "#FFFFFF",
          }}
        >
          {`Copyright ©${new Date().getFullYear()} Piere, Inc. All rights reserved.`}
        </Typography>
        <Box
          sx={{
            display: "flex",
            flexDirection: "row",
          }}
        >
          {/* {NetworkData.map((data, index) => (
            <Box sx={{ padding: "10px" }} key={index}>
              <Image
                alt={data.alt}
                src={data.image}
                width="20px"
                height="20px"
              />
            </Box>
          ))} */}
        </Box>
      </Box>
    );
  } else {
    return <></>;
  }
};
