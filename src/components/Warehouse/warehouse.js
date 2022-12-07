import * as React from 'react';
import { Grid } from "@mui/material";
import { DataGrid} from '@mui/x-data-grid';


const Warehouse=()=>{
    const rows=([
        
    ])

    const columns=[
        {field:"id", headerName:"WID",width: 100},
        {field:"name", headerName:"Warehouse Name", width:100}

    ]

    return (
        <Grid align='center'>

        <div style={{ height: 300, width: '100%' }}>
          <DataGrid rows={rows} columns={columns} />
        </div>

        </Grid>
        
      );
   
}

export default Warehouse
