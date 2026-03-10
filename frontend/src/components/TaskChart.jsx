import { Pie } from "react-chartjs-2";
import {
Chart as ChartJS,
ArcElement,
Tooltip,
Legend
} from "chart.js";

ChartJS.register(ArcElement, Tooltip, Legend);

function TaskChart({ tasks }) {

const completed = tasks.filter(
t => t.status === "completed"
).length;

const pending = tasks.length - completed;

const data = {
labels: ["Completed", "Pending"],
datasets: [
{
label: "Tasks",
data: [completed, pending],
backgroundColor: [
"#4caf50",
"#ff9800"
],
borderWidth: 1
}
]
};

return(

<div style={{ width: "300px", marginTop:"20px" }}>
<Pie data={data} />
</div>

)

}

export default TaskChart;