import { useState } from "react";

import "./searchPanel.scss";

const SearchPanel = (props) => {
  const [term, setTerm] = useState("");

  const onUpdateSearch = (e) => {
    const term = e.target.value;
    setTerm(term);
    props.onUpdateSearch(term);
  };

  return (
    <input
      type="text"
      className="search-panel__input"
      placeholder="Найти задачу"
      value={term}
      onChange={onUpdateSearch}
    />
  );
};

export default SearchPanel;
