 import './HeaderSection.css';
 import AbtImg from './images/Pharmacist.imag.jpg';


// ---Material UI-----
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
// ---Material UI-----


const AboutPage = () => {
       return ( 
           <>
            <Grid className="title_design" container>
                <Grid  xs={12} sm={12} md={12} >
                <Typography sx={{fontFamily:'cursive','color':'lightgrey'}} variant="h2"> ASTITVA </Typography>
                </Grid>
            </Grid>
           
            
            <Grid sx={{backgroundColor:'snow'}} container>
                 <Grid xs={12} sm={12} md={5}>
                    <Box
                      component="img"
                       sx={{
                       height: 600,
                       width: 600,
                        }}
                     alt="Image_abt_astitva"
                    src={AbtImg}
                     />
                  </Grid>
                  <Grid sx={{marginTop:'20px',fontFamily:'Georgia',fontSize:'24px',color:'dimgray'}} 
                  xs={12} sm={12} md={7}>
                     We at Astitva Supply a wide range of critical care pharmaceiuticals to market across India. <br></br><br></br>
                     We are located at Malad West, Mumbai, Maharastra and have been <br></br> functioning since 1958.
                     <br></br><br></br>Our commitment to provide world class quality, competitive pricing & constant urge to explore new
                     theraupatic segments and expand our product portfolio have gained us 
                     a reputation as a global manufacturer of world class quality medicines  and pharmaceiutical products.
                  </Grid>
           </Grid>
              
          </>)
              }
export default AboutPage;