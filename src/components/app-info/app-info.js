import "./app-info.scss";

const AppInfo = () => {
  return (
    <div className="app-info">
      <h2 className="app-info__title">
        Общее количество задач — <span>0</span>
      </h2>
      <h2 className="app-info__title">
        Выполненные задачи — <span>0</span>
      </h2>
      <h2 className="app-info__title">
        Важные задачи — <span>0</span>
      </h2>
    </div>
  );
};

export default AppInfo;
