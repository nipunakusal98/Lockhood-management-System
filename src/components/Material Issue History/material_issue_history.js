import * as React from 'react';
import { Grid } from "@mui/material";
import { DataGrid} from '@mui/x-data-grid';

const MaterialIssueHistory=()=>{
    const rows=([
    
    ])

    const columns=[
        {field:"id", headerName:"Issue History ID",width: 100},
        {field:"mid", headerName:"MID", width:100},
        {field:"quantity",headerName:"Quantity",width:100}

    ]

    return (
        <Grid align='center'>

        <div style={{ height: 300, width: '100%' }}>
          <DataGrid rows={rows} columns={columns} />
        </div>

        </Grid>
        
      );
   
}

export default MaterialIssueHistory
