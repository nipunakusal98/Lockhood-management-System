import * as React from 'react';
import { Grid } from "@mui/material";
import { DataGrid} from '@mui/x-data-grid';

const WorkshopUnit=()=>{

    const rows = ([

    ])

    const columns=[
        {field:"id", headerName:"Workshop Unit ID", width:100},
        {field: "name" , headerName:"Workshop Name" , width:100},
        {field:"did" , headerName:"Department ID" , width:100},
        {field: "type", headerName:"Department Type", width:100},
        {field: "capacity", headerName:"Capacity", width:100},
        {field:"internal_external", headerName:"Internal/External",width:100}
    ]
    return (
        <Grid align='center'>

        <div style={{ height: 300, width: '100%' }}>
          <DataGrid rows={rows} columns={columns} />
        </div>

        </Grid>
        
      );



}
export default WorkshopUnit