import Image from 'next/image'
import styles from '../page.module.css'
import { ExternalBody, ExternalHeader, ExternalFooter } from '@/components/external';
import { Backdrop, Box } from "@mui/material";
import { GridLoader } from "react-spinners";



export default async function ExternalTransaction({ params, searchParams }) {

  const { split_id } = searchParams;
  let transaction = null;

  if (split_id) {
    console.log(split_id)
   
    const response = await  fetch("https://njzslar9cc.execute-api.us-east-1.amazonaws.com/dev/get_transaction_from_split", {
      "headers": {
        "accept": "application/json, text/plain, */*",
        "accept-language": "en-US,en;q=0.9",
        "content-type": "application/json; charset=UTF-8",
      },
      "body": JSON.stringify({"split_id": split_id}),
      "method": "POST"
    });
    
    // console.log('response', JSON.stringify(await response.json()));
    const result = await response.json();
    transaction = {
      requestedAmount: result.splits.find(
        (split) => split["ID"] == split_id
      ).amount,
      phone: result.splits.find((split) => split["ID"] == split_id).phone,
      totalAmount: result.SignedAmount,
      date: result.DateAndTime,
      merchant: result?.FromTo,
      category: result.Category,
      notes: result?.Notes,
      senderName:
        result?.user?.first_name + " " + result?.user?.last_name,
      p2p: result?.user?.p2p?.[0]?.["venmo_id"],
      senderAvatar: result?.user?.avatar_url,
      description: result?.description,
    }
  }

  return (
    <main className={styles.main}>
       <Box
        className={"custom_animation_bg"}
        sx={{
          display: "flex",
          flex: 1,
          flexDirection: "column",
        }}
      >
        {transaction && (
          <>
            <ExternalHeader />
            <ExternalBody transaction={transaction} />
            <ExternalFooter />
          </>
        )}
      </Box>
    </main>
  )
}
