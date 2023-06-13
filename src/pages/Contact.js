import React from 'react'
import Layout from '../components/Layout/Layout'
import {Box, Typography, TableContainer, TableHead, TableRow, Table, Paper, TableCell, TableBody} from '@mui/material'
import SupportAgentIcon from '@mui/icons-material/SupportAgent';
import MailIcon from '@mui/icons-material/Mail';
import CallIcon from '@mui/icons-material/Call';
const Contact = () => {
  return (
    <Layout>
        <Box sx={{my: 5, ml: 10, "& h4 ": {fontWeight: "bold", mb:2 }}}>
          <Typography variant="h4">Contact My Restaurant</Typography>
          <p>lorem  Restaurants know the importance of a strong first impression. It's why they invest in exterior design, decorate their entranceways and train hosts to welcome guests with a warm smile. </p>
        </Box>
         <Box sx={{m: 3,  "@media (max-width:500px)": { 
          width: "250px"
        }, }}>
          <TableContainer component={Paper}>
            <Table aria-label="contact table">
              <TableHead>
                <TableRow>
                  <TableCell sx={{bgcolor: "black", color: "white"}} align="center">Contact Details</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                <TableRow>
                  <TableCell>
                    <SupportAgentIcon sx={{ color: "red", pt: 1}} /> 1800-00-0006 (toolfree)
                  </TableCell>
                </TableRow>
                  <TableRow>
                   <TableCell>
                      <MailIcon sx={{ color: "skyblue", pt: 1}} /> help@myrest.com
                    </TableCell>
                  </TableRow>
                  <TableRow>
                  <TableCell>
                      <CallIcon sx={{ color: "green", pt: 1}} /> 1234567890
                    </TableCell>
                  </TableRow>
              </TableBody>
            </Table>
          </TableContainer>
        </Box>
    </Layout>
  )
} 

export default Contact