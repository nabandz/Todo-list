import TasksListItem from "../tasks-list-item/tasks-list-item";

import "./tasks-list.scss";

const TasksList = ({ data, onDelete, onToggleProp }) => {
  const elements = data.map((item) => {
    const { id, ...itemProps } = item;
    return (
      <TasksListItem
        key={id}
        {...itemProps}
        onDelete={() => onDelete(id)}
        onToggleProp={(e) =>
          onToggleProp(e, id, e.currentTarget.getAttribute("data-toggle"))
        }
      />
    );
  });

  return <ul className="tasks-list">{elements}</ul>;
};

export default TasksList;
