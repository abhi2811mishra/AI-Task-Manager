import TaskCard from "./TaskCard";
import { Typography } from "@mui/material";

function TaskList({ tasks, refresh }) {

if(tasks.length === 0){
return(
<Typography style={{marginTop:"20px"}}>
No tasks yet. Add one above 🚀
</Typography>
);
}

return(

<div style={{marginTop:"20px"}}>

{tasks.map(task=>(
<TaskCard
key={task.id}
task={task}
refresh={refresh}
/>
))}

</div>

)

}

export default TaskList;