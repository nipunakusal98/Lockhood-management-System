import * as React from 'react';
import { Grid } from "@mui/material";
import { DataGrid} from '@mui/x-data-grid';

const Factory=()=>{
    const rows=([
        { id:123, name:"manager", location:"Sri Lanka"},
    ])

    const columns=[
        {field:"id", headerName:"Factory ID",width: 100},
        {field:"name", headerName:"Factory Name", width:100},
        {field:"location",headerName:"Location",width:100}

    ]

    return (
        <Grid align='center'>

        <div style={{ height: 300, width: '100%' }}>
          <DataGrid rows={rows} columns={columns} />
        </div>

        </Grid>
        
      );
   
}

export default Factory
