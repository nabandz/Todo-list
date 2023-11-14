import "./app-filter.scss";

const AppFilter = () => {
  return (
    <div className="app-filter">
      <button className="app-filter__btn app-filter__btn_active" type="button">
        Все задачи
      </button>
      <button className="app-filter__btn" type="button">
        Важные
      </button>
      <button className="app-filter__btn" type="button">
        Не выполненные
      </button>
      <button className="app-filter__btn" type="button">
        Выполненные
      </button>
    </div>
  );
};

export default AppFilter;
