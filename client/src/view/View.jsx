import React, { useEffect, useState } from 'react'
import DeleteIcon from '@mui/icons-material/Delete';
import IconButton from '@mui/material/IconButton';
import UpgradeIcon from '@mui/icons-material/Upgrade';
import Axios from 'axios'
import './View.css'

//table style import
import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

//table stayle function in mui

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.common.white,
    color: theme.palette.common.black,
    fontWeight :700,
    fontSize: 16,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
    
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  '&:nth-of-type(odd)': {
    backgroundColor: theme.palette.action.hover,
  },
  // hide last border
  '&:last-child td, &:last-child th': {
    border: 0,
  },
}));

function createData(name, calories, fat, carbs, protein) {
  return { name, calories, fat, carbs, protein };
}

const rows = [
  createData('Frozen yoghurt', 159, 6.0, 24, 4.0),
  createData('Ice cream sandwich', 237, 9.0, 37, 4.3),
  createData('Eclair', 262, 16.0, 24, 6.0),
  createData('Cupcake', 305, 3.7, 67, 4.3),
  createData('Gingerbread', 356, 16.0, 49, 3.9),
];

export const View = () => {
    const [stuData,setStuData] = useState([]);

    useEffect(()=>{
      Axios.get("http://localhost:3001/api/get").then((response)=>{
        console.log(response.data);
        setStuData(response.data);
       })
      },[])

  return (
    //mui table

    <TableContainer component={Paper}>
    <Table sx={{ minWidth: 700 }} aria-label="customized table">
      <TableHead>
        <TableRow>
          <StyledTableCell align="left">Cus Id</StyledTableCell>
          <StyledTableCell align="left">First Name</StyledTableCell>
          <StyledTableCell align="left">Last Name</StyledTableCell>
          <StyledTableCell align="left">Address</StyledTableCell>
          <StyledTableCell align="left">Salary</StyledTableCell>
          <StyledTableCell align="left">Delete</StyledTableCell>
          <StyledTableCell align="left">Update</StyledTableCell>
        </TableRow>
      </TableHead>
      <TableBody>
        {stuData.map((details) => (
          <StyledTableRow key={details.cusId}>
            {/* <StyledTableCell component="th" scope="row">
           {details.cusId}
            </StyledTableCell> */}
            <StyledTableCell align="left">{details.cusId}</StyledTableCell>
            <StyledTableCell align="left">{details.firstName}</StyledTableCell>
            <StyledTableCell align="left">{details.lastName}</StyledTableCell>
            <StyledTableCell align="left">{details.address}</StyledTableCell>
            <StyledTableCell align="left">{details.salary}</StyledTableCell>
            <StyledTableCell align="left">
            <IconButton aria-label="delete" color='warning'>
             <DeleteIcon />
             </IconButton>
               </StyledTableCell>

            <StyledTableCell align="left">
             <IconButton aria-label="update" color='success'>
             <UpgradeIcon />
            </IconButton>
              
            </StyledTableCell>
          </StyledTableRow>
        ))}
      </TableBody>
    </Table>
  </TableContainer>
  );

    ///////////////////////////////////////////////////////
  //   <div className="tbl-view">
  //     <table>
  //       <thead>

  //         <th>Id</th>
  //         <th>First Name</th>
  //         <th>Last Name</th>
  //         <th>Address</th>
  //         <th>Salary</th>
  //       </thead>

  //       <tbody>
  //         {stuData.map((details)=>{
  //           return(
  //         <tr> 
  //          <td>{details.cusId}</td>    
  //         <td>{details.firstName}</td>
  //         <td>{details.lastName}</td>
  //         <td>{details.address}</td>
  //         <td>{details.salary}</td>
  //         <td onClick={()=>alert("Deleted")}>
  //           <IconButton aria-label="delete" color='warning'>
  //           <DeleteIcon />
  //           </IconButton>
  //           </td>
  //           <td>
  //           <IconButton aria-label="delete" color='success'>
  //           <UpgradeIcon />
  //           </IconButton>
  //         </td>
  //         </tr>
  //           )
  //         })}       
  //       </tbody>
  //     </table>
  //   </div>
  // )
}
