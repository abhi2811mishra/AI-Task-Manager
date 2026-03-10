import { useState } from "react";
import { createTask } from "../api";
import { TextField, Button, Card, CardContent, Typography } from "@mui/material";
import axios from "axios";

function TaskForm({ refresh }) {

 const [title,setTitle] = useState("");
 const [description,setDescription] = useState("");
 const [suggestion,setSuggestion] = useState("");

 const handleSubmit = async(e)=>{
   e.preventDefault();

   await createTask({title,description});

   setTitle("");
   setDescription("");
   setSuggestion("");

   refresh();
 };

 const getSuggestion = async () => {

   if(!description) return;

   const res = await axios.post(
     "http://localhost:5000/ai/suggest",
     { description }
   );

   setSuggestion(res.data.priority);
 };

 return(

<Card className="glass-card" style={{marginTop:"20px"}}>

<CardContent>

<Typography variant="h6" gutterBottom>
Create New Task
</Typography>

<form onSubmit={handleSubmit}>

<TextField
label="Task Title"
fullWidth
margin="normal"
value={title}
onChange={(e)=>setTitle(e.target.value)}
/>

<TextField
label="Task Description"
fullWidth
margin="normal"
value={description}
onChange={(e)=>setDescription(e.target.value)}
/>

{suggestion && (
<Typography style={{marginTop:"10px"}}>
AI Suggested Priority: <b>{suggestion}</b>
</Typography>
)}

<div style={{marginTop:"15px"}}>

<Button
variant="outlined"
onClick={getSuggestion}
style={{marginRight:"10px"}}
>
AI Suggest Priority
</Button>

<Button
variant="contained"
type="submit"
>
Add Task
</Button>

</div>

</form>

</CardContent>

</Card>

 );
}

export default TaskForm;