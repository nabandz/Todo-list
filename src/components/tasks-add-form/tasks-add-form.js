import { Component } from "react";

import "./tasks-add-form.scss";

class TasksAddForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: "",
      description: "",
    };
  }

  onValueChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  onSubmit = (e) => {
    e.preventDefault();
    if (this.state.title.trim() === "") {
      this.setState({
        title: "",
        description: "",
      });
      return;
    }
    this.props.onAdd(this.state.title, this.state.description);
    this.setState({
      title: "",
      description: "",
    });
  };

  render() {
    const { title, description } = this.state;

    return (
      <div className="tasks-add-form__wrapper">
        <form className="add-form" onSubmit={this.onSubmit}>
          <input
            type="text"
            className="add-form__input add-form__input_label"
            placeholder="Добавить задачу"
            name="title"
            value={title}
            onChange={this.onValueChange}
          />
          <input
            type="text"
            className="add-form__input add-form__input_descr"
            placeholder="Описание задачи (опционально)"
            name="description"
            value={description}
            onChange={this.onValueChange}
          />
          <button type="submit" className="add-form__btn">
            <i className="fa-solid fa-arrow-right fa-lg"></i>
          </button>
        </form>
      </div>
    );
  }
}

export default TasksAddForm;
