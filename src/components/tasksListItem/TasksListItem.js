import "./tasksListItem.scss";

const TasksListItem = (props) => {
  const { title, description, onDelete, onToggleProp, fav, finish } = props;

  let classNames = "list-item";

  if (fav && !finish) {
    classNames += " list-item_fav";
  }

  if (finish) {
    classNames += " list-item_finish";
  }

  return (
    <li className={classNames}>
      <div
        className="list-item__info"
        onClick={onToggleProp}
        onKeyDown={onToggleProp}
        data-toggle="finish"
        tabIndex={0}
      >
        <span className="list-item__title">{title}</span>
        <span className="list-item__descr">{description}</span>
      </div>
      <div className="list-item__btns">
        <button
          type="button"
          className="list-item__btn"
          onClick={onToggleProp}
          data-toggle="fav"
          disabled={finish}
        >
          <i className="fa-solid fa-star fa-lg"></i>
        </button>
        <button type="button" className="list-item__btn" onClick={onDelete}>
          <i className="fa-solid fa-trash fa-lg"></i>
        </button>
      </div>
    </li>
  );
};

export default TasksListItem;
