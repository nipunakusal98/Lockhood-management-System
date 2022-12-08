import * as React from 'react';
import { Grid } from "@mui/material";
import { DataGrid} from '@mui/x-data-grid';

const IssueHistory=()=>{

    const rows=([

        
    ])

    const columns=[
        {field :"id", headerName:"IH ID", width: 100},
        {field :"eid", headerName:"EID", width: 100},
        {field: "wuid", headerName:"WUID" , width:100},
        {field: "date", headerName:"Date", width:100},
        
    ]


    return (
        <Grid align='center'>

        <div style={{ height: 300, width: '100%' }}>
          <DataGrid rows={rows} columns={columns} />
        </div>

        </Grid>
        
      );
   

}
export default IssueHistory