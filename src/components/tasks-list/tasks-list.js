import TasksListItem from "../tasks-list-item/tasks-list-item";

import "./tasks-list.scss";

const TasksList = () => {
  return (
    <ul className="tasks-list">
      <TasksListItem />
    </ul>
  );
};

export default TasksList;
