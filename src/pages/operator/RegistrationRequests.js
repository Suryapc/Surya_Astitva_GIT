import {useNavigate } from "react-router-dom";
import { useState} from "react";
import axios from "axios";
import '../landingpages/HeaderSection.css';


// ---Material UI-----
import Checkbox from '@mui/material/Checkbox';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import AppBar from '@mui/material/AppBar';
import Button from '@mui/material/Button';
import Toolbar from '@mui/material/Toolbar';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import TextField from '@mui/material/TextField';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Hidden from '@mui/material/Hidden';
import Moment from 'react-moment';
import 'moment-timezone';


// ---Material UI-----

 const RegistrationRequests = () => {
      function display_reason(){
          document.getElementById("reject_reason").style.visibility="visible";
              }
     const [data, setData] = useState([]);
     const [StatusUpdate,setStatusUpdate] = useState("")
     const [chkBxid, setchkBxid] = useState("");
     const [RejectReason, setRejectReason] = useState("");


// Getting records from DB based on ID

    const getDataId=()=>
        { 
          let record_id = document.getElementById('inpRecordNo').value;
          axios.get(`http://localhost:4000/chemist_registration/${record_id}`)
          .then((getData) => {
          setData(getData.data);
                  })
        document.getElementById("table_head").style.visibility="visible";

        
         }
  
// Accepting records based on checkbox value
      const updateAcceptStatus = () => {
          axios.put(`http://localhost:4000/chemist_registration_accept/${chkBxid}`, 
            {
              StatusUpdate
             }).then(() => {
            navigate('/registrationreq')
        })
     document.getElementById('BtnReject').disabled ="true";
   
            }

 // Rejecting records based on checkbox value
       const updateRejectStatus = () => {
        console.log(chkBxid)
          axios.put(`http://localhost:4000/chemist_registration_reject/${chkBxid}`, 
                   {
                    StatusUpdate,
                    RejectReason,
                    }).then(() => {
                   navigate('/registrationreq')
               })
                //  console.log(RejectReason)
                   }
        
  const navigate = useNavigate();
      return (
       <>
        <AppBar className="title_sticky"  sx={{p:2,'backgroundColor':'steelblue'}} position="static">
           <Grid  container>
           <Grid item xs={12} sm={12} md={6}>
              <Typography variant="h2">Operator</Typography>
           </Grid>
           <Grid item xs={12} sm={12} md={6}>
              <Button onClick={()=>navigate("/login")} 
               sx={{backgroundColor:'white',
                    marginLeft:'70%',
                    marginTop:'7%',
                    padding:'10px',
                    '&:hover':{backgroundColor:'gainsboro'}}}>
                      Log out
              </Button>
          </Grid>
          </Grid> 
        </AppBar> 


          <Grid container>
              <Grid item xs={12} sm={12} md={3}>
           
              </Grid>
              <Grid item xs={12} sm={12} md={6}>

              <TextField 
              sx={{'marginLeft':'4%',
             'marginTop':'4%',
             'width':'60%'}} 
             id="inpRecordNo"
              type="text" 
              placeholder='Enter Id here..' 
              variant="outlined"/>
             <Hidden >
              
          <Button 
           sx={{'&:hover':{backgroundColor:'gainsboro','color':'blue'},
           'marginTop':'4%',
           'marginLeft':'1%',
           'padding':'2%',
           'width':'14%'}}
           variant="contained"
           onClick={getDataId}>Submit
           </Button>
          </Hidden>
            
          </Grid>
        </Grid>
        <Grid container>
              <Grid item xs={12} sm={12} md={12 }>
        <TableContainer sx={{'width':'100%',
        'alignItems':'left',
        'margin':'1%' }}>
        <Table  id="table_head" aria-label="customized table">

          <TableHead>
              <TableRow sx={{color:'blue'}} className="tableHeaderDesign">
                  <TableCell sx={{color:'blue'}} className="tableHeaderDesign"></TableCell>
                  <TableCell  sx={{color:'blue'}}>ID</TableCell>
                  <TableCell sx={{color:'blue'}} className="tableHeaderDesign">Pharmacy Name</TableCell>
                  <TableCell sx={{color:'blue'}} className="tableHeaderDesign">Contact Name</TableCell>
                  <TableCell sx={{color:'blue'}} className="tableHeaderDesign">Email</TableCell> 
                  <TableCell sx={{color:'blue'}} className="tableHeaderDesign">Mobile Number</TableCell>
                  <TableCell sx={{color:'blue'}} className="tableHeaderDesign">Door No</TableCell>
                  <TableCell sx={{color:'blue'}} className="tableHeaderDesign">Street</TableCell>
                  <TableCell sx={{color:'blue'}} className="tableHeaderDesign">Area</TableCell>
                  <TableCell sx={{color:'blue'}} className="tableHeaderDesign">City</TableCell>
                  <TableCell sx={{color:'blue'}} className="tableHeaderDesign">State </TableCell>
                  <TableCell sx={{color:'blue'}} className="tableHeaderDesign">Pincode</TableCell>
                  <TableCell sx={{color:'blue'}} className="tableHeaderDesign">Chemist Drug Licence No</TableCell>
                  <TableCell sx={{color:'blue'}} className="tableHeaderDesign">Chemist Photo</TableCell>
                  <TableCell sx={{color:'blue'}} className="tableHeaderDesign">Status</TableCell> 
                  <TableCell sx={{color:'blue'}} className="tableHeaderDesign">Reject Reason</TableCell> 
                  <TableCell sx={{color:'blue'}} className="tableHeaderDesign">reason</TableCell> 
                  <TableCell sx={{color:'blue'}} className="tableHeaderDesign">Date</TableCell> 
              </TableRow>
            </TableHead>

            <TableBody>
             {data.map((datas) => (
              <TableRow >
                  <TableCell  className="tableDataDesign" key={datas.id}>
                      <input type='checkbox' id="chkBxId" value={datas.chemist_id} 
                      onClick={e =>setchkBxid(e.target.value)}/>  
                      
                  </TableCell>  
                  <TableCell className="tableDataDesign" key={datas.id}>{datas.chemist_id}</TableCell>  
                  <TableCell className="tableDataDesign" key={datas.id} >{datas.pharmacy_name}</TableCell>
                  <TableCell className="tableDataDesign" key={datas.id}>{datas.contact_name}</TableCell>
                  <TableCell className="tableDataDesign" key={datas.id}>{datas.email_id}</TableCell> 
                  <TableCell className="tableDataDesign" key={datas.id}>{datas.mobile_no}</TableCell>
                  <TableCell className="tableDataDesign" key={datas.id}>{datas.door_no}</TableCell>
                  <TableCell className="tableDataDesign" key={datas.id}>{datas.street}</TableCell>
                  <TableCell className="tableDataDesign" key={datas.id}>{datas.area}</TableCell>
                  <TableCell className="tableDataDesign" key={datas.id}>{datas.city}</TableCell> 
                  <TableCell className="tableDataDesign" key={datas.id}>{datas.state_name}</TableCell> 
                  <TableCell className="tableDataDesign" key={datas.id}>{datas.pincode}</TableCell>  
                  <TableCell className="tableDataDesign" key={datas.id}>{datas.chemist_drug_licence_no}</TableCell>
                  <TableCell className="tableDataDesign" key={datas.id}>{datas.chemist_photo}</TableCell>
                  <TableCell className="tableDataDesign" key={datas.id}>{datas.status}</TableCell>  
                  <TableCell className="tableDataDesign" key={datas.id}>
                      <input type='text' style={{width:"150px"}} id="txtBxRejReason" value={RejectReason} 
                      onChange={e =>setRejectReason(e.target.value)}/>
                  </TableCell> 
                  <TableCell className="tableDataDesign" key={datas.id}>
                     {RejectReason}
                  </TableCell>
                  <TableCell className="tableDataDesign" key={datas.id}>
                     <Moment format="DD/MM/YYYY">{datas.added_date}</Moment> 
                  </TableCell>

              </TableRow>
                   ))}
             </TableBody>
        </Table>
        </TableContainer> 
         <Button value="Approved" 
                      id="BtnApprove" 
                       onClick={updateAcceptStatus} 
                      sx={{color:'green','border':'1px solid gray','marginLeft':'40%',
                      '&:hover':{backgroundColor:'lightsteelblue'}}}>
                      Approve
        </Button>
        <Button value="Reject" 
                       id="BtnReject" 
                      onClick={updateRejectStatus} 
                      sx={{color:'red','border':'1px solid gray','marginLeft':'1%',
                      '&:hover':{backgroundColor:'lightsteelblue'}}}>
            Reject
        </Button>
     </Grid>
     </Grid>
                </> );
              };
export default RegistrationRequests;