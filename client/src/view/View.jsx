import React, { useEffect, useState } from 'react'
import DeleteIcon from '@mui/icons-material/Delete';
import IconButton from '@mui/material/IconButton';
import UpgradeIcon from '@mui/icons-material/Upgrade';
import Axios from 'axios'

export const View = () => {
    const [stuData,setStuData] = useState([]);

    useEffect(()=>{
      Axios.get("http://localhost:3001/api/get").then((response)=>{
        console.log(response.data);
        setStuData(response.data);
       })
      },[])

  return (
    <div className="tbl-view">
      <table>
        <thead>
      
          <th>First Name</th>
          <th>Last Name</th>
          <th>Address</th>
          <th>Salary</th>
        </thead>

        <tbody>
          {stuData.map((details)=>{
            return(
          <tr>    
          <td>{details.firstName}</td>
          <td>{details.lastName}</td>
          <td>{details.address}</td>
          <td>{details.salary}</td>
          <td onClick={()=>alert("Deleted")}>
            <IconButton aria-label="delete" color='warning'>
            <DeleteIcon />
            </IconButton>
            </td>
            <td>
            <IconButton aria-label="delete" color='success'>
            <UpgradeIcon />
            </IconButton>
          </td>
          </tr>
            )
          })}       
        </tbody>
      </table>
    </div>
  )
}
