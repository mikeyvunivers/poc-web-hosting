"use client"
// import segment from "@/utils/segment";
import { Box, Button, Link, Typography } from "@mui/material";
import { format } from "date-fns";

function mobileCheck() {
  let check = false;
  (function (a) {
    if (
      /(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino|android|ipad|playbook|silk/i.test(
        a
      ) ||
      /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(
        a.substr(0, 4)
      )
    )
      check = true;
  })(navigator.userAgent || navigator.vendor || window.opera);
  return check;
}

function getMobileOperatingSystem() {
  if (mobileCheck()) {
    var userAgent = navigator.userAgent || navigator.vendor || window.opera;

    // Windows Phone must come first because its UA also contains "Android"
    if (/windows phone/i.test(userAgent)) {
      return "Windows Phone";
    }

    if (/android/i.test(userAgent)) {
      return "Android";
    }

    // iOS detection from: http://stackoverflow.com/a/9039885/177710
    if (/iPad|iPhone|iPod/.test(userAgent) && !window.MSStream) {
      return "iOS";
    }
  }
  return "Unknown";
}

export const TransactionAction = ({ transaction }) => {
  const thePlatform = getMobileOperatingSystem();

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        width: "40%",
        minWidth: "360px",
        background: "rgba(255, 255, 255, 0.1)",
        border: "4px solid rgba(253, 253, 253, 0.4)",
        backdropFilter: "blur(25px)",
        borderRadius: "20px",
        p: { xs: 2, md: 3 },
        my: 1,
        mb: 2,
      }}
    >
      <Button
        variant={"contained"}
        sx={{
          background: "#353099",
          borderRadius: "8px",
          px: { xs: 4, md: 8 },
          py: 2,
        }}
        onClick={(e) => {
          e.preventDefault();

          const desc = transaction.description
            ? `For ${transaction.description}`
            : "";
          const transactionInfo = `Merchant: ${
            transaction.merchant
          }\r\nDate: ${format(
            new Date(transaction.date).getTime(),
            "MMM do, yyyy"
          )}\r\nCategory: ${transaction.category}`;
          const fullDescription = encodeURIComponent(
            `${desc}\r\n${transactionInfo}`
          );

          // segment.track("Click on Pay back with Venmo", {
          //   amount: transaction.requestedAmount,
          //   phone: transaction.phone,
          // });

          const theDeepLink = `venmo://paycharge?txn=pay&recipients=${transaction.p2p}&note=${fullDescription}&amount=${transaction.requestedAmount}`;

          if (thePlatform === "Unknown") {
            // desktop not mobile phone
            window.open(theDeepLink, "_blank");
          } else {
            // need to install Venmo or open it if exists
            setTimeout(function () {
              if (
                window.confirm(
                  "Would you like to go to the store to install Venmo?"
                )
              ) {
                location.href =
                  getMobileOperatingSystem() === "Android"
                    ? "https://play.google.com/store/apps/details?id=com.venmo&hl=en&gl=US"
                    : "https://apps.apple.com/us/app/venmo/id351727428";
              }
            }, 100);
            window.location = theDeepLink;
          }
        }}
      >
        <Typography
          sx={{
            fontStyle: "normal",
            fontWeight: 600,
            fontSize: "18px",
            color: "#FFFFFF",
          }}
        >
          {"Pay back with Venmo"}
        </Typography>
      </Button>
      <Box sx={{ mt: 2 }}>
        <Typography
          sx={{
            fontStyle: "normal",
            fontWeight: 600,
            fontSize: "18px",
            color: "#FFFFFF",
            textAlign: "center",
          }}
        >
          {"Love seeing your transaction details?"}
        </Typography>
        <Typography
          sx={{
            fontStyle: "normal",
            fontWeight: 600,
            fontSize: "18px",
            color: "#FFFFFF",
            textAlign: "center",
          }}
        >
          <Link
            target={"_blank"}
            href={"https://www.univers.tech/pierewaitlist"}
            variant="body2"
            color={"#FFFFFF"}
            sx={{
              fontStyle: "normal",
              fontWeight: 600,
              fontSize: "18px",
              color: "#FFFFFF",
              textAlign: "center",
            }}
            underline={"always"}
          >
            {"Create your own account"}
          </Link>
          <br />
          {` on\n Piere to share transactions with friends`}
        </Typography>
      </Box>
    </Box>
  );
};
