import { useState } from "react";

import AppInfo from "../app-info/app-info";
import SearchPanel from "../search-panel/search-panel";
import AppFilter from "../app-filter/app-filter";
import TasksList from "../tasks-list/tasks-list";
import TasksAddForm from "../tasks-add-form/tasks-add-form";

import "./app.scss";

const App = () => {
  const initialData = [
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
  ];
  const localData = JSON.parse(localStorage.getItem("localTasks"));

  const [data, setData] = useState(localData ?? initialData);
  const [term, setTerm] = useState("");
  const [filter, setFilter] = useState("all");

  let maxId = data.length + 1;

  const deleteItem = (id) => {
    setData((data) => {
      const newData = data.filter((item) => item.id !== id);
      localStorage.setItem("localTasks", JSON.stringify(newData));
      return newData;
    });
  };

  const addItem = (title, description) => {
    const newItem = {
      title,
      description,
      fav: false,
      finish: false,
      id: maxId++,
    };
    setData((data) => {
      const newArr = [...data, newItem];
      localStorage.setItem("localTasks", JSON.stringify(newArr));
      return newArr;
    });
  };

  const onToggleProp = (e, id, prop) => {
    if (e.keyCode === 13 || e.keyCode === 32 || e.type === "click") {
      setData((data) => {
        const newData = data.map((item) => {
          if (item.id === id) {
            return { ...item, [prop]: !item[prop] };
          }
          return item;
        });
        localStorage.setItem("localTasks", JSON.stringify(newData));
        return newData;
      });
    }
  };

  const searchTask = (items, term) => {
    if (term.length === 0) {
      return items;
    }
    return items.filter((item) => {
      return item.title.toLowerCase().indexOf(term.toLowerCase()) > -1;
    });
  };

  const onUpdateSearch = (term) => {
    setTerm(term);
  };

  const filterPost = (items, filter) => {
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

  const onFilterSelect = (filter) => {
    setFilter(filter);
  };

  const tasks = data.length;
  const favorites = data.filter((item) => !item.finish && item.fav).length;
  const finished = data.filter((item) => item.finish).length;
  const visibleData = filterPost(searchTask(data, term), filter);

  return (
    <div className="app">
      <h1 className="title">Список задач</h1>
      <div className="wrapper">
        <div className="wrapper__left">
          <div className="search-panel">
            <SearchPanel onUpdateSearch={onUpdateSearch} />
            <AppFilter filter={filter} onFilterSelect={onFilterSelect} />
          </div>
          <div className="tasks-add-form">
            <TasksAddForm onAdd={addItem} />
            <TasksList
              data={visibleData}
              onDelete={deleteItem}
              onToggleProp={onToggleProp}
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
        <span>Звезда</span> для отметки задачи как важной. <span>Корзина</span>{" "}
        для удаления задачи.
      </div>
    </div>
  );
};

export default App;
