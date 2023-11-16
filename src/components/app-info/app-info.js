import "./app-info.scss";

const AppInfo = ({ tasks, favorites, finished }) => {
  return (
    <div className="app-info">
      <h2 className="app-info__title">
        Общее количество задач — <span>{tasks}</span>
      </h2>
      <h2 className="app-info__title">
        Невыполненные задачи — <span>{tasks - finished}</span>
      </h2>
      <h2 className="app-info__title">
        Выполненные задачи — <span>{finished}</span>
      </h2>
      <h2 className="app-info__title">
        Важные задачи — <span>{favorites}</span>
      </h2>
    </div>
  );
};

export default AppInfo;
