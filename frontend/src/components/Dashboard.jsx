import { Card, CardContent, Typography, Grid } from "@mui/material";

function Dashboard({tasks}){

const total = tasks.length;

const completed = tasks.filter(
t=>t.status==="completed"
).length;

const pending = total - completed;

return(

<Grid container spacing={2} style={{marginTop:"20px"}}>

<Grid item xs={4}>
<Card>
<CardContent>
<Typography variant="h6">Total Tasks</Typography>
<Typography>{total}</Typography>
</CardContent>
</Card>
</Grid>

<Grid item xs={4}>
<Card>
<CardContent>
<Typography variant="h6">Completed</Typography>
<Typography>{completed}</Typography>
</CardContent>
</Card>
</Grid>

<Grid item xs={4}>
<Card>
<CardContent>
<Typography variant="h6">Pending</Typography>
<Typography>{pending}</Typography>
</CardContent>
</Card>
</Grid>

</Grid>

)

}

export default Dashboard;