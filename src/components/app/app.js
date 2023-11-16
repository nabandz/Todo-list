import { Component } from "react";

import AppInfo from "../app-info/app-info";
import SearchPanel from "../search-panel/search-panel";
import AppFilter from "../app-filter/app-filter";
import TasksList from "../tasks-list/tasks-list";
import TasksAddForm from "../tasks-add-form/tasks-add-form";

import "./app.scss";

class App extends Component {
  constructor(props) {
    super(props);
    const localData = JSON.parse(localStorage.getItem("localTasks"));
    this.state = {
      data: localData ?? [
        {
          title: "Дописать доклад",
          description: "По дисциплине 'Методы хранения данных'",
          fav: true,
          finish: false,
          id: 1,
        },
        {
          title: "Принять курьера",
          description: "В 15:00",
          fav: false,
          finish: false,
          id: 2,
        },
        {
          title: "Купить продукты",
          description: "Молоко, кефир",
          fav: true,
          finish: true,
          id: 3,
        },
      ],
      term: "",
      filter: "all",
    };
    this.maxId = this.state.data.length + 1;
  }

  deleteItem = (id) => {
    this.setState(({ data }) => {
      const newData = data.filter((item) => item.id !== id);
      localStorage.setItem("localTasks", JSON.stringify(newData));
      return {
        data: newData,
      };
    });
  };

  addItem = (title, description) => {
    const newItem = {
      title,
      description,
      fav: false,
      finish: false,
      id: this.maxId++,
    };
    this.setState(({ data }) => {
      const newArr = [...data, newItem];
      localStorage.setItem("localTasks", JSON.stringify(newArr));
      return {
        data: newArr,
      };
    });
  };

  onToggleProp = (e, id, prop) => {
    if (e.keyCode === 13 || e.keyCode === 32 || e.type === "click") {
      this.setState(({ data }) => {
        const newData = data.map((item) => {
          if (item.id === id) {
            return { ...item, [prop]: !item[prop] };
          }
          return item;
        });
        localStorage.setItem("localTasks", JSON.stringify(newData));
        return {
          data: newData,
        };
      });
    }
  };

  searchTask = (items, term) => {
    if (term.length === 0) {
      return items;
    }
    return items.filter((item) => {
      return item.title.toLowerCase().indexOf(term.toLowerCase()) > -1;
    });
  };

  onUpdateSearch = (term) => {
    this.setState({ term });
  };

  filterPost = (items, filter) => {
    switch (filter) {
      case "fav":
        return items.filter((item) => item.fav && !item.finish);
      case "unfinished":
        return items.filter((item) => !item.finish);
      case "finished":
        return items.filter((item) => item.finish);
      default:
        return items;
    }
  };

  onFilterSelect = (filter) => {
    this.setState({ filter });
  };

  render() {
    const { data, term, filter } = this.state;
    const tasks = this.state.data.length;
    const favorites = this.state.data.filter(
      (item) => !item.finish && item.fav
    ).length;
    const finished = this.state.data.filter((item) => item.finish).length;
    const visibleData = this.filterPost(this.searchTask(data, term), filter);

    return (
      <div className="app">
        <h1 className="title">Список задач</h1>
        <div className="wrapper">
          <div className="wrapper__left">
            <div className="search-panel">
              <SearchPanel onUpdateSearch={this.onUpdateSearch} />
              <AppFilter filter={filter} onFilterSelect={this.onFilterSelect} />
            </div>
            <div className="tasks-add-form">
              <TasksAddForm onAdd={this.addItem} />
              <TasksList
                data={visibleData}
                onDelete={this.deleteItem}
                onToggleProp={this.onToggleProp}
              />
            </div>
          </div>
          <div className="wrapper__right">
            <AppInfo tasks={tasks} favorites={favorites} finished={finished} />
          </div>
        </div>
        <div className="info">
          <span>Клик</span> для переключения статуса задачи.
          <br />
          <span>Звезда</span> для отметки задачи как важной.{" "}
          <span>Корзина</span> для удаления задачи.
        </div>
      </div>
    );
  }
}

export default App;
