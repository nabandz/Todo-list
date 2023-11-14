import "./tasks-list-item.scss";

const TasksListItem = () => {
  return (
    <li className="list-item">
      <div className="list-item__info">
        <span className="list-item__label">Купить продукты</span>
        <span className="list-item__descr">Молоко, кефир</span>
      </div>
      <div className="list-item__btns">
        <button type="button" className="list-item__btn list-item__btn_active">
          <i className="fa-solid fa-star fa-lg"></i>
        </button>
        <button type="button" className="list-item__btn">
          <i className="fa-solid fa-trash fa-lg"></i>
        </button>
      </div>
    </li>
  );
};

export default TasksListItem;
