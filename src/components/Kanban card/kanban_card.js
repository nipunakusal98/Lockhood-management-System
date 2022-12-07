import * as React from 'react';
import { Grid } from "@mui/material";
import { DataGrid} from '@mui/x-data-grid';

const KanbanCard=()=>{

    const rows = ([

    ])

    const columns=[
        {field:"id", headerName:"KID", width:100},
        {field: "date" , headerName:"Date" , width:100},
        {field:"cerated_by" , headerName:"Created By" , width:100},
        {field: "assigned_by", headerName:"Assigned By", width:100},
        {field:"wu_id", headerName:"WUID",width:100},
        {field: "wid", headerName:"WID", width:100},
        {field:"assigned_to", headerName:"Assigned To",width:100},
        {field:"details", headerName:"Details",width:100},
        {field:"task_start_time", headerName:"Task Start Time",width:100},
        {field:"task_end_time", headerName:"Task End Time",width:100},
        {field:"task_duration", headerName:"Task Duration",width:100},
        {field:"status", headerName:"Status",width:100},

    ]
    return (
        <Grid align='center'>

        <div style={{ height: 300, width: '100%' }}>
          <DataGrid rows={rows} columns={columns} />
        </div>

        </Grid>
        
      );



}
export default KanbanCard