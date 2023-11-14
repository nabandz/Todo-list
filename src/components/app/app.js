import AppInfo from "../app-info/app-info";
import SearchPanel from "../search-panel/search-panel";
import AppFilter from "../app-filter/app-filter";
import TasksList from "../tasks-list/tasks-list";
import TasksAddForm from "../tasks-add-form/tasks-add-form";

import "./app.scss";

function App() {
  return (
    <div className="app">
      <h1 className="title">Список задач</h1>
      <div className="wrapper">
        <div className="wrapper__left">
          <div className="search-panel">
            <SearchPanel />
            <AppFilter />
          </div>
          <div className="tasks-add-form">
            <TasksAddForm />
            <TasksList />
          </div>
        </div>
        <div className="wrapper__right">
          <AppInfo />
        </div>
      </div>
    </div>
  );
}

export default App;
