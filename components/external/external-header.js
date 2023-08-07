"use client";
import { Box, Button, Link, Typography, useMediaQuery } from "@mui/material";
import { LogoPNGWhite } from "../logoPNGWhite";

export const ExternalHeader = () => {
  // const lgUp = useMediaQuery((theme) => theme.breakpoints.up("lg"));
  const lgUp = true;

  return (
    <Box
      sx={{
        display: "flex",
        px: { xs: 2, md: 3 },
        py: 2,
        background: "rgba(255, 255, 255, 0.2)",
        backdropFilter: "blur(25px)",
      }}
    >
      <Box
        sx={{
          flex: 1,
          display: "flex",
          justifyContent: !lgUp && "center",
          alignItems: "center",
          p: 0,
        }}
      >
        <Link href="/">
          <LogoPNGWhite width={119} height={40} />
        </Link>
      </Box>
      {lgUp && (
        <>
          {/* <Button variant={"text"} sx={{ ml: 2 }}>
            <Typography
              sx={{
                fontStyle: "normal",
                fontSize: "18px",
                fontWeight: "600",
                color: "#FFFFFF",
              }}
            >
              {"Piere Institue"}
            </Typography>
          </Button> */}
          <Button variant={"text"} sx={{ ml: 2 }}>
            <Link
              target={"_blank"}
              href={"/authentication/login"}
              underline={"none"}
            >
              <Typography
                sx={{
                  fontStyle: "normal",
                  fontSize: "18px",
                  fontWeight: "600",
                  color: "#FFFFFF",
                }}
              >
                {"Login"}
              </Typography>
            </Link>
          </Button>
          <Button
            variant="contained"
            sx={{
              background: "#353099",
              borderRadius: "8px",
              ml: 2,
            }}
          >
            <Link target={"_blank"} href={"/"} underline={"none"}>
              <Typography
                sx={{
                  fontStyle: "normal",
                  fontSize: "15px",
                  fontWeight: "600",
                  color: "#FFFFFF",
                }}
              >
                {"Join the waitlist"}
              </Typography>
            </Link>
          </Button>
        </>
      )}
    </Box>
  );
};
