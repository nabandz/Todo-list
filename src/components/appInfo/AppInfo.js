import "./appInfo.scss";

const AppInfo = ({ tasks, favorites, finished }) => {
  return (
    <div className="app-info">
      <h2 className="app-info__title">
        <span>{tasks}</span> Общее количество задач
      </h2>
      <h2 className="app-info__title">
        <span>{favorites}</span> Важные задачи
      </h2>
      <h2 className="app-info__title">
        <span>{tasks - finished}</span> Невыполненные задачи
      </h2>
    </div>
  );
};

export default AppInfo;
