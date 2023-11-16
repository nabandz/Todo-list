import "./app-filter.scss";

const AppFilter = (props) => {
  const buttonsData = [
    { name: "all", label: "Все задачи" },
    { name: "fav", label: "Важные" },
    { name: "unfinished", label: "Невыполненные" },
    { name: "finished", label: "Выполненные" },
  ];

  const buttons = buttonsData.map(({ name, label }) => {
    const active = props.filter === name;
    const btnClass = active ? "app-filter__btn_active" : "";
    return (
      <button
        className={`app-filter__btn ${btnClass}`}
        type="button"
        key={name}
        onClick={() => props.onFilterSelect(name)}
      >
        {label}
      </button>
    );
  });

  return <div className="app-filter">{buttons}</div>;
};

export default AppFilter;
