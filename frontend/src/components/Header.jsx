import { AppBar, Toolbar, Typography } from "@mui/material";
import { FaTasks } from "react-icons/fa";

function Header() {

return(

<AppBar position="static">

<Toolbar>

<FaTasks style={{marginRight:"10px"}} />

<Typography variant="h6">
AI Task Manager
</Typography>

</Toolbar>

</AppBar>

)

}

export default Header;