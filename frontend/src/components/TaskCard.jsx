import { Card, CardContent, Typography, Chip, IconButton, Checkbox } from "@mui/material";
import { FaTrash } from "react-icons/fa";
import { deleteTask, updateTask } from "../api";
import { motion } from "framer-motion";

function TaskCard({ task, refresh }) {

const toggleComplete = async () => {

await updateTask(task.id,{
status: task.status === "completed"
? "pending"
: "completed"
});

refresh();
};

return(

<motion.div
initial={{ opacity: 0, y: 20 }}
animate={{ opacity: 1, y: 0 }}
transition={{ duration: 0.3 }}
>

<Card className="glass-card" style={{ marginTop: "15px" }}>

<CardContent>

<Typography variant="h6">
{task.title}
</Typography>

<Typography>
{task.description}
</Typography>

<Chip
label={task.priority}
color={
task.priority === "high"
? "error"
: task.priority === "medium"
? "warning"
: "success"
}
style={{ marginTop: "10px" }}
/>

<Checkbox
checked={task.status === "completed"}
onChange={toggleComplete}
/>

<IconButton
onClick={() => deleteTask(task.id).then(refresh)}
style={{ float: "right" }}
>

<FaTrash />

</IconButton>

</CardContent>

</Card>

</motion.div>

);

}

export default TaskCard;