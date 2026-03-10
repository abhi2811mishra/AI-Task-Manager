import { useEffect, useState } from "react";
import { ThemeProvider, createTheme, CssBaseline, Button } from "@mui/material";

import { getTasks } from "./api";

import Header from "./components/Header";
import Dashboard from "./components/Dashboard";
import TaskForm from "./components/TaskForm";
import TaskList from "./components/TaskList";
import TaskChart from "./components/TaskChart";

const lightTheme = createTheme({
  palette: {
    mode: "light",
  },
});

const darkTheme = createTheme({
  palette: {
    mode: "dark",
  },
});

function App(){

const [darkMode,setDarkMode] = useState(false);
const [tasks,setTasks] = useState([]);

const loadTasks = async () => {
const res = await getTasks();
setTasks(res.data);
};

useEffect(()=>{
loadTasks();
},[]);

return(

<ThemeProvider theme={darkMode ? darkTheme : lightTheme}>

<CssBaseline />

<Header/>

<div style={{padding:"20px"}}>

<Button
variant="contained"
onClick={()=>setDarkMode(!darkMode)}
style={{marginBottom:"20px"}}
>
Toggle Theme
</Button>

<Dashboard tasks={tasks}/>

<div style={{display:"flex", gap:"40px", flexWrap:"wrap"}}>

<div style={{flex:"1"}}>
<TaskForm refresh={loadTasks}/>
<TaskList tasks={tasks} refresh={loadTasks}/>
</div>

<div>
<TaskChart tasks={tasks}/>
</div>

</div>

</div>

</ThemeProvider>

);

}

export default App;