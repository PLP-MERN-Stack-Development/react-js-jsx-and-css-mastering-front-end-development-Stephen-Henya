import React from "react";
import TaskManager from "../components/TaskManager";

function Home() {
  return (
    <div className="flex flex-col items-center justify-center">
        <h1 className="text-3xl font-bold mb-4">Welcome to the PLP Task Manager</h1>
        <p className="text-gray-500 dark:text-gray-400 mt-4">
            Manage your tasks — add, complete and delete them using the Task Manager below.
        </p>
      <TaskManager />
    </div>
  );
}

export default Home;
