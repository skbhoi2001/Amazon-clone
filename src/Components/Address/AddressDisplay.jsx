import { useEffect, useState } from "react";

function AddressDisplay() {
  const [data, setData] = useState([]);
  const [page, setPage] = useState(1);
  const [refresh, setRefresh] = useState(false);
  const getData = (page) => {
    fetch(
      `https://masai-react-assignment.herokuapp.com/formDetails?_limit=3&_page=${page}`
    )
      .then((res) => res.json())
      .then((res) => {
        console.log(res.length)
        setData([...res]);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  useEffect(() => {
    (async () => {
      getData(page);
    })();
  }, [page, refresh]);
  function handleRefresh() {
    refresh === false ? setRefresh(true) : setRefresh(false);
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
      handleRefresh();
    } catch (err) {
      console.log(err);
    }
  };
  const handleAddress =  async(item) => {
    try{
      const payload = {
        id: item.id,
        name: item.name,
        phone: item.phone,
        pin: item.pin,
        address1: item.address1,
        address2: item.address2,
        address3: item.address3,
        state: item.state,
        addType: item.addType
      };
  
      const config = {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(payload)
      };
      await fetch(
        `https://masai-react-assignment.herokuapp.com/AddressLocal`,
        config
      );
    }
    catch (err){
      console.log(err)
    }
  };
  return (
    <div>
      <div className="add_container">
        {data.map((item) => {
          return (
            <div className="address_display">
              <div>
                <h4>{item.name}</h4>
                <hr />
                <div>
                  <p>
                    <span>{item.address1}</span> <span>{item.address2}</span>
                    <br /> <span>{item.address3}</span>
                  </p>
                  <p>{item.pin} India</p>
                  <p>Phone Number: {item.phone}</p>
                  <br />
                  <div >
                  <button className="address_button_delete" onClick={() => handleDelete(item.id)}>Delete</button>
                  <button className="address_button_continue" onClick={() => handleAddress({...item})}>Continue with This</button>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
        <div></div>
      </div>
      {
        <div className="page">
          <button name="Prev" onClick={(e) => handlePage(e)}>
            Prev
          </button>
          <button name="Next" onClick={(e) => handlePage(e)}>
            Next
          </button>
        </div>
      }
    </div>
  );
}
export default AddressDisplay;
