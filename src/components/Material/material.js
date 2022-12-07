import * as React from 'react';
import { Grid } from "@mui/material";
import { DataGrid} from '@mui/x-data-grid';

const Material=()=>{

    const rows = ([

    ])

    const columns=[
        {field:"id", headerName:"MID", width:100},
        {field: "material_name" , headerName:"Material Name" , width:100},
        {field:"price" , headerName:"Price" , width:100},
        {field: "supplier", headerName:"Supplier", width:100},
        {field: "quantity", headerName:"Quantity", width:100},
        {field:"amount", headerName:"Amount",width:100},
        {field:"min_level", headerName:"Min Level",width:100},
        {field:"max_level", headerName:"Max Level",width:100},

    ]
    return (
        <Grid align='center'>

        <div style={{ height: 300, width: '100%' }}>
          <DataGrid rows={rows} columns={columns} />
        </div>

        </Grid>
        
      );



}
export default Material