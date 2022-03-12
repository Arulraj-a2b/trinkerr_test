import axios from "axios";
import { useEffect, useState } from "react";
import { searchApi } from "../../apiRoutes";
import styles from "./search.module.css";

const Search = () => {
  const [isValue, setValue] = useState("");
  const [isData, setData] = useState([]);
  const [isLoader, setLoader] = useState(false);

  useEffect(() => {
    if (isValue !== "") {
      setLoader(true);
      axios
        .get(searchApi, { params: { search_string: isValue } })
        .then((res) => {
          setData(res.data);
          setLoader(false);
        });
    }
  }, [isValue]);

  return (
    <div className={styles.overAll}>
      <div className={styles.inputDiv}>
        <input
          autoFocus
          type={"text"}
          value={isValue}
          onChange={(event) => {
            setValue(event.target.value);
          }}
          className={styles.inputStyle}
          placeholder="Search"
        />
      </div>
      {isLoader && <span className={styles.loaderStyle}>Loading...</span>}

      <div className={styles.listDivStyle}>
        {isData.length !== 0 && isData.map((list) => {
          return (
            <span className={styles.listStyle} key={list}>
              {list}
            </span>
          );
        })}
      </div>
    </div>
  );
};

export default Search;
