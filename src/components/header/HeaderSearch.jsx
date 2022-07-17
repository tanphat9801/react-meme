import { useState } from "react";
import { useHistory } from "react-router-dom";

const HeaderSearch = () => {
  const [queryStr, setQueryStr] = useState("");
  const history = useHistory();

  const handleOnChange = (e) => {
    setQueryStr(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!queryStr) {
      return;
    }
    const queryStrURL = encodeURIComponent(queryStr);
    history.push("/search?q=" + queryStrURL);
  };

  return (
    <>
   
      <form onSubmit={handleSubmit}>
          <label>
            <input
              type="search"
              name="search-text"
              className="form-control"
              placeholder="Nhập từ khóa ..."
              onChange={handleOnChange}
              value={queryStr}
            />
          </label>
        </form>
    </>
  );
};

export default HeaderSearch;
