import * as React from 'react';
import { Grid } from "@mui/material";
import { DataGrid} from '@mui/x-data-grid';

const Department=()=>{

    const rows=([
        {id:1232,fid:1,name:"finance",description:"dummy text lorem is not here this is a dummy text"},
        
    ])

    const columns=[
        {field :"id", headerName:"Department ID", width: 100},
        {field: "fid", headerName: "Factory ID", width: 100},
        {field: "name", headerName:"Name" , width:100},
        {field: "description", headerName:"Description", width:100}
    ]


    return (
        <Grid align='center'>

        <div style={{ height: 300, width: '100%' }}>
          <DataGrid rows={rows} columns={columns} />
        </div>

        </Grid>
        
      );
   

}
export default Department
