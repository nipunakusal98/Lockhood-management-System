import * as React from 'react';
import { Grid } from "@mui/material";
import { DataGrid} from '@mui/x-data-grid';

const Users=()=>{
    const rows= ([ 
        {id: 1, fname:"mike",lname:"webb",email:"nipuna@gmail.com",contact_no:25646235,salary:15000,type_id:15,address:"colombo"},
        
    ])
    
    
    const columns = [
        {field:"id", headerName:"Employee ID",width: 100},
        {field:"fname", headerName:"FName",width: 100},
        {field:"lname", headerName:"LName",width: 100},
        {field:"email", headerName:"Email",width: 100},
        {field:"contact_no", headerName:"Contact No",width: 100},
        {field:"salary", headerName:"Salary",width: 100},
        {field:"type_id", headerName:"Employee Type ID",width: 100},
        {field:"address", headerName:"Address",width: 100},
    ]

    return (
        <Grid align='center'>

        <div style={{ height: 300, width: '100%' }}>
          <DataGrid rows={rows} columns={columns} />
        </div>

        </Grid>
        
      );
   
}

export default Users