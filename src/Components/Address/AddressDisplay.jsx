import { useEffect, useState } from "react";

function AddressDisplay() {
  const [data, setData] = useState([]);
  const [page, setPage] = useState(1);
  const [refresh,setRefresh] = useState(false)
  const getData = (page) => {
    fetch(
      `https://masai-react-assignment.herokuapp.com/formDetails?_limit=5&_page=${page}`
    )
      .then((res) => res.json())
      .then((res) => {
        setData([...res]);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  useEffect(() => {
    (async ()=>{
        getData(page);
    })()
  }, [page,refresh]);
  function handleRefresh(){
    refresh===false?setRefresh(true):setRefresh(false)
}
  const handlePage = (e) => {
    switch (e.target.name) {
      case "Prev":
        if (page <= 1) {
          setPage(1);
        } else {
          setPage((prev) => prev - 1);
        }
        break;
      case "Next":
        setPage((next) => next + 1);
        break;
      default:
        break;
    }
  };
  const handleDelete = async (id) => {
    try {
      await fetch(
        `https://masai-react-assignment.herokuapp.com/formDetails/${id}`,
        {
          method: "DELETE"
        }
      );
      handleRefresh()
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <div>
      {data.map((item) => {
        return (
          <div>
            <h3>{item.name}</h3>
            <button onClick={() => handleDelete(item.id)}>x</button>
          </div>
        );
      })}
      {
        <div className="page">
          <button name="Prev" onClick={(e) => handlePage(e)}>
            Prev
          </button>
          <h5>{page}</h5>
          <button name="Next" onClick={(e) => handlePage(e)}>
            Next
          </button>
        </div>
      }
    </div>
  );
}
export default AddressDisplay;
