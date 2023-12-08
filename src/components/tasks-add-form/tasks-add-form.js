import { useState } from "react";

import "./tasks-add-form.scss";

const TasksAddForm = (props) => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  const onValueChange = (e) => {
    e.target.name === "title"
      ? setTitle(e.target.value)
      : setDescription(e.target.value);
  };

  const onSubmit = (e) => {
    e.preventDefault();
    if (title.trim() === "") {
      setTitle("");
      setDescription("");
      return;
    }
    props.onAdd(title, description);
    setTitle("");
    setDescription("");
  };

  return (
    <div className="tasks-add-form__wrapper">
      <form className="add-form" onSubmit={onSubmit}>
        <input
          type="text"
          className="add-form__input add-form__input_label"
          placeholder="Добавить задачу"
          name="title"
          value={title}
          onChange={onValueChange}
        />
        <input
          type="text"
          className="add-form__input add-form__input_descr"
          placeholder="Описание задачи (опционально)"
          name="description"
          value={description}
          onChange={onValueChange}
        />
        <button type="submit" className="add-form__btn">
          <i className="fa-solid fa-arrow-right fa-lg"></i>
        </button>
      </form>
    </div>
  );
};

export default TasksAddForm;
