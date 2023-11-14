import "./tasks-add-form.scss";

const TasksAddForm = () => {
  return (
    <div className="tasks-add-form__wrapper">
      <form className="add-form">
        <input
          type="text"
          className="add-form__input add-form__input_label"
          placeholder="Добавить задачу"
        />
        <input
          type="text"
          className="add-form__input add-form__input_descr"
          placeholder="Описание задачи"
        />
        <button type="submit" className="add-form__btn">
          <i className="fa-solid fa-arrow-right fa-lg"></i>
        </button>
      </form>
    </div>
  );
};

export default TasksAddForm;
