import * as React from 'react';
import { Grid } from "@mui/material";
import { DataGrid} from '@mui/x-data-grid';

const EmployeeType=()=>{
    const rows=([
        {id:123, employee_type:"manager"},
    ])

    const columns=[
        {field:"id", headerName:"ETid",width: 100},
        {field:"employee_type", headerName:"Employee Name", width:100}

    ]

    return (
        <Grid align='center'>

        <div style={{ height: 300, width: '100%' }}>
          <DataGrid rows={rows} columns={columns} />
        </div>

        </Grid>
        
      );
   
}

export default EmployeeType
