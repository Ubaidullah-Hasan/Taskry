import { useState } from "react";
import TaskAction from "./TaskAction";
import TaskList from "./TaskLIst";
import TaskSearch from "./TaskSearch";
import AddTaskModal from "./AddTaskModal";


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
    const [showAddTaskModal, setShowAddTaskModal] = useState(false);
    const [taskToUpdate, setTaskToUpdate] = useState(null);

    const handleAddEditTask = (newTask, isAdd) => {
        if (isAdd) {
            setTasks([
                ...tasks,
                newTask
            ]);
        } else {
            setTasks(
                tasks.map((task) => {
                    if (task.id === newTask.id) {
                        return newTask;
                    }
                    return task;
                })
            )
        }

        setShowAddTaskModal(false);
        setTaskToUpdate(null);
    }

    const handleEditTask = (updateTask) => {
        setTaskToUpdate(updateTask);
        setShowAddTaskModal(true);

    }

    function handleClose() {
        setShowAddTaskModal(false);
        setTaskToUpdate(null);
    }

    function handleDeleteTask(id) {
        setTasks(tasks.filter((task) => task.id !== id));
    }

    const handleDeleteAllTask = () => {
        setTasks([]);
    }

    const handleTaskFavourite = (id) => {
        setTasks(
            tasks.map((task) => {
                if(task.id === id){
                    return task.isFavourite ? {...task, isFavourite: false} : {...task, isFavourite: true};
                }
                return task;
            })
        )

        // another way
        // const taskIndes = tasks.findIndex(((t) => t.id === id));
        // const updatedTasks = [...tasks];
        // updatedTasks[taskIndes].isFavourite = !updatedTasks[taskIndes].isFavourite;
        // setTasks(updatedTasks);

    }

    return (
        <section className="mb-20" id="tasks">
            {showAddTaskModal && <AddTaskModal
                onSave={handleAddEditTask}
                taskToUpdate={taskToUpdate}
                onCloseClick={handleClose}
            />}
            <div className="container">
                <TaskSearch />

                <div className="rounded-xl border border-[rgba(206,206,206,0.12)] bg-[#1D212B] px-6 py-8 md:px-9 md:py-16">
                    <TaskAction onAddClick={() => setShowAddTaskModal(true)} onDeleteAll={handleDeleteAllTask} />

                    <TaskList
                        tasks={tasks}
                        onEdit={handleEditTask}
                        onDelete={handleDeleteTask}
                        onFav={handleTaskFavourite}
                    />
                </div>
            </div>
        </section>
    )
}