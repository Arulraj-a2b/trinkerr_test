import axios from "axios";
import { useEffect, useState } from "react";
import { searchApi } from "../../apiRoutes";

const Search = () => {
  const [isValue, setValue] = useState("");
  const [isData, setData] = useState([]);
  useEffect(() => {
    if (isValue !== "") {
      axios
        .get(searchApi, { params: { search_string: isValue } })
        .then((res) => {
          setData(res.data);
        });
    }
  }, [isValue]);

  return (
    <div>
      <input
        type={"text"}
        value={isValue}
        onChange={(event) => {
          setValue(event.target.value);
        }}
        placeholder="Search"
      />
      <div style={{ display: "flex", flexDirection: "column" }}>
        {isData.map((list) => {
          return <span key={list}>{list}</span>;
        })}
      </div>
    </div>
  );
};

export default Search;
