import { useState } from "react";
import TaskAction from "./TaskAction";
import TaskList from "./TaskLIst";
import TaskSearch from "./TaskSearch";


export default function TaskBoard() {
    const defaultTask = {
        id: crypto.randomUUID(),
        title: "Design new landing page",
        description: "Create a modern and responsive landing page for our new product.",
        tags: ["Design", "UI/UX"],
        priority: "High",
        isFavourite: false,
    }
    const [tasks, setTasks] = useState([defaultTask]);

    return (
        <section className="mb-20" id="tasks">

            <div className="container">
                <TaskSearch />

                <div className="rounded-xl border border-[rgba(206,206,206,0.12)] bg-[#1D212B] px-6 py-8 md:px-9 md:py-16">
                    <TaskAction />

                    <TaskList tasks={tasks} setTasks={setTasks} />
                </div>
            </div>
        </section>
    )
}