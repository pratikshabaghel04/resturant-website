import React from 'react'
import Layout from '../components/Layout/Layout'
import {Box, Typography} from '@mui/material'
const About = () => {
  return (
    <Layout>
        <Box sx={{ my: 20, textAlign: "center",  "& h4":{fontWeight:'bold', my: 2, fontSize: "2rem"}, "& p":{textAlign:'justify', },
        "@media (max-width:500px)": {mt: 0, "& h4 ":{fontSize: "1.5rem", }, },
        }}>
          <Typography variant= 'h4'>
            Welcome To My Resturant
          </Typography>
          <p >
          Restaurants know the importance of a strong first impression. It's why they invest in exterior design, decorate their entranceways and train hosts to welcome guests with a warm smile. 

          Nowadays, however, more than 70% of diners visit a restaurant's website before deciding where to dine, which means the first impression happens long before they set foot on-premises. It happens online. And when it does, the restaurant description plays a pivotal role.
          </p>
          <br />
          <p>lorem Despite this, many restaurants struggle to write an effective description for their website. Doing so requires a mix of skills not every restaurant has — writing, design and a keen understanding of digital user behavior — but there are tools in place to make the job easier. For example, if you build your website with BentoBox, full-service designers can help create your website on a template that is proven to be user-friendly. That takes care of the design and user behavior hurdles.</p>
        </Box>
    </Layout>
  )
}

export default About