import { useCallback, useState } from "react";
import SearchIcon from '@material-ui/icons/Search'; 
import { InputBase } from "@material-ui/core";
import "./searchbar.css";
import { Link } from "react-router-dom";

export default function SearchBar() {
  const [search, setSearch] = useState([]);

  const debounce = (func) => {
    let timer;
    return function (...args) {
      const context = this;
      if (timer) clearTimeout(timer);
      timer = setTimeout(() => {
        timer = null;
        func.apply(context, args);
      }, 500);
    };
  };

  const handleChange = (e) => {
    const  prod  = e.target.value;
      fetch(`https://serpapi.com/search.json?engine=walmart&query=${prod}&api_key=adf094f424eaf9d4a30af607e33833c06f551834dc546131c8125fff0876d7e9
   `)
      .then((res) => res.json())
      .then((json) => setSearch(json.data));
  };

  const optimisedVersion = useCallback(debounce(handleChange), []);

  const handleClick = ()=>{
      alert(optimisedVersion)
  } 

  return (
    <div>
     <div style={{border:"5px solid #7F7F79",height:"40px"}}>
     <InputBase type={"text"}
        name={"search"}
        onChange={optimisedVersion}
         className={"inputBox"}
          placeholder="Search..." />
     {/* <input
        type={"text"}
        name={"search"}
        className={"search"}
        onChange={optimisedVersion}
      /> */}
      <SearchIcon onClick={handleClick} className={"srcBtn"} />
     </div>
      <div className={'searchItem'}>
      {search?.length > 0 && (
        <div className={'searchContent'} >
          {search?.map((el, i) => (
            <div key={i}>
              <Link to={`./${el.name}`}>{el.name}</Link>
            </div>
          ))}
        </div>
      )}
      </div>
    </div>
  );
}
