import React, { useEffect } from 'react'
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import Pagination from '@mui/material/Pagination';


function Textdata({cardDetails,totalpages,setpageno}) {

    

    return (
        <>
 <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Name</TableCell>
            <TableCell align="right">JobTitle</TableCell>
            <TableCell align="right">CompanyName</TableCell>
            <TableCell align="right">Email_Address</TableCell>
            <TableCell align="right">PhoneNumber</TableCell>
            <TableCell align="right">Address</TableCell>
            <TableCell align="right">Visiting Card</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {cardDetails.map((row,i) => (
            <TableRow
              key={i}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {row.Name}
              </TableCell>
              <TableCell align="right">{row.JobTitle}</TableCell>
              <TableCell align="right">{row.CompanyName}</TableCell>
              <TableCell align="right">{row.Email_Address}</TableCell>
              <TableCell align="right">{row.PhoneNumber}</TableCell>
              <TableCell align="right" >{row.Address}</TableCell>
              <TableCell align="right" ><img src={`https://airback.onrender.com/${row.image_path}`} width={'50%'} height={'100px'} /></TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
    <Pagination count={totalpages} onChange={(e,value)=>{setpageno(value)}} />
        </>
    )
}

export default Textdata