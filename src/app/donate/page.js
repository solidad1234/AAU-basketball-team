// 'use client';
// import React, { useState } from 'react';
// import { Box, Button, TextField, Typography, Checkbox, FormControlLabel, Link } from '@mui/material';
// import EmailIcon from '@mui/icons-material/Email';
// import InstagramIcon from '@mui/icons-material/Instagram';

// export default function DonatePage() {
//   const [amount, setAmount] = useState(''); 


//   const handleAmountClick = (value) => {
//     setAmount(value); 
//   };

//   return (
//     <Box sx={{ padding: '20px', maxWidth: '800px', margin: '0 auto', marginTop: '100px' }}>
//       <Box sx={{ textAlign: 'center', marginBottom: '40px' }}>
//         <Typography variant="h2" component="h1" gutterBottom>
//           Support the UEBL Wolves
//         </Typography>
//         <Typography variant="h6" component="p">
//           Your contribution helps us achieve our goals and supports our community.
//         </Typography>
//       </Box>

//       <Box sx={{ textAlign: 'center', marginBottom: '40px' }}>
//         <Button variant="outlined" sx={{ margin: '10px' }} onClick={() => handleAmountClick('10')}>$10</Button>
//         <Button variant="outlined" sx={{ margin: '10px' }} onClick={() => handleAmountClick('25')}>$25</Button>
//         <Button variant="outlined" sx={{ margin: '10px' }} onClick={() => handleAmountClick('50')}>$50</Button>
//         <Button variant="outlined" sx={{ margin: '10px' }} onClick={() => handleAmountClick('100')}>$100</Button>
//         <Box>
//           <p> Or Donate a custom amount...</p>
//         </Box>
//         <TextField
//           label="Enter your amount"
//           variant="outlined"
//           fullWidth
//           value={amount} // Bind the input field value to the state
//           onChange={(e) => setAmount(e.target.value)} // Update the state when the input changes
//           sx={{ margin: '20px 0' }}
//         />
//         <FormControlLabel control={<Checkbox />} label="Make this a monthly donation" />
//         <Button variant="contained" color="primary" fullWidth sx={{ padding: '15px' }}>
//           Donate Now
//         </Button>
//         <Typography variant="body2" color="textSecondary" sx={{ marginTop: '10px' }}>
//           Your payment information is secure.
//         </Typography>
//       </Box>

//       <Box sx={{ textAlign: 'center', marginBottom: '40px' }}>
//         <Typography variant="h5" component="h3" gutterBottom>
//           Your Impact
//         </Typography>
//         <Typography variant="body1" component="p" gutterBottom>
//           Thanks to your support, we were able to provide new equipment and facilities for our team...
//         </Typography>
        
//       </Box>

//       <Box sx={{ textAlign: 'center', marginBottom: '40px' }}>
//         <Typography variant="h6" component="h4">
//           Have Questions?
//         </Typography>
//         <Typography variant="body2" component="p" sx={{ marginBottom: '20px' }}>
//           Contact us:
//         </Typography>
//         <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', gap: '15px', marginBottom: '10px' }}>
//           <EmailIcon />
//           <Link href="mailto:uptownelitebasketball@gmail.com" sx={{ textDecoration: 'none', color: 'primary.main', fontWeight: 'bold' }}>
//             uptownelitebasketball@gmail.com
//           </Link>
//         </Box>
//         <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', gap: '15px', marginBottom: '10px' }}>
//           <InstagramIcon />
//           <Link href='https://www.instagram.com/uebl_wolves?igsh=MWhxYzB3N3ltdmdkbw==' sx={{ textDecoration: 'none', color: 'primary.main', fontWeight: 'bold' }}>
//             Instagram
//           </Link>
//         </Box>
//         <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', gap: '15px', marginBottom: '10px' }}>
//           <Link href='https://www.gofundme.com/f/uptown-elite-basketball-league-uebl-wolves' sx={{ textDecoration: 'none', color: 'primary.main', fontWeight: 'bold' }}>
//             GoFundMe
//           </Link>
//         </Box>
//       </Box>
//     </Box>
//   );
// }

'use client';
import React from 'react';
import { Box, Typography, Link } from '@mui/material';
import EmailIcon from '@mui/icons-material/Email';
import InstagramIcon from '@mui/icons-material/Instagram';

export default function ZellePaymentPage() {
  return (
    <Box sx={{ padding: '20px', maxWidth: '800px', margin: '0 auto', marginTop: '100px' }}>
      <Box sx={{ textAlign: 'center', marginBottom: '40px' }}>
        <Typography variant="h2" component="h1" gutterBottom>
          Support the UEBL Wolves with Zelle
        </Typography>
        <Typography variant="h6" component="p">
          Your contribution helps us achieve our goals and supports our community.
        </Typography>
      </Box>

      <Box sx={{ textAlign: 'center', marginBottom: '40px', padding: '30px', border: '2px solid #1976d2', borderRadius: '10px', backgroundColor: '#f5f5f5' }}>
        <Typography variant="h4" component="p" sx={{ marginBottom: '20px', fontWeight: 'bold' }}>
          Pay using Zelle
        </Typography>
        <Typography variant="body1" component="p" sx={{ marginBottom: '20px' }}>
          To make a contribution, please use Zelle and send your payment to:
        </Typography>
        <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', gap: '10px', marginBottom: '20px' }}>
          <EmailIcon />
          <Typography variant="body1" component="p" sx={{ fontWeight: 'bold' }}>
            uptownelitebasketball@gmail.com
          </Typography>
        </Box>
        <Typography variant="body2" component="p" sx={{ marginBottom: '20px' }}>
          Please ensure you enter the correct email address to avoid any issues with your payment.
        </Typography>
        <Typography variant="body2" component="p">
          Thank you for your support!
        </Typography>
      </Box>

      <Box sx={{ textAlign: 'center', marginBottom: '40px', color: '#ffffff' }}>
        <Typography variant="h5" component="h3" gutterBottom>
          Your Impact
        </Typography>
        <Typography variant="body1" component="p" gutterBottom>
          Thanks to your support, we were able to provide new equipment and facilities for our team...
        </Typography>
      </Box>

      <Box sx={{ textAlign: 'center', marginBottom: '40px', color: '#ffffff' }}>
        <Typography variant="h6" component="h4">
          Have Questions?
        </Typography>
        <Typography variant="body2" component="p" sx={{ marginBottom: '20px' }}>
          Contact us:
        </Typography>
        <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', gap: '15px', marginBottom: '10px' }}>
          <EmailIcon />
          <Link href="mailto:uptownelitebasketball@gmail.com" sx={{ textDecoration: 'none', color: 'primary.main', fontWeight: 'bold' }}>
            uptownelitebasketball@gmail.com
          </Link>
        </Box>
        <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', gap: '15px', marginBottom: '10px' }}>
          <InstagramIcon />
          <Link href='https://www.instagram.com/uebl_wolves?igsh=MWhxYzB3N3ltdmdkbw==' sx={{ textDecoration: 'none', color: 'primary.main', fontWeight: 'bold' }}>
            Instagram
          </Link>
        </Box>
        <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', gap: '15px', marginBottom: '10px' }}>
          <Link href='https://www.gofundme.com/f/uptown-elite-basketball-league-uebl-wolves' sx={{ textDecoration: 'none', color: 'primary.main', fontWeight: 'bold' }}>
            GoFundMe
          </Link>
        </Box>
      </Box>
    </Box>
  );
}
