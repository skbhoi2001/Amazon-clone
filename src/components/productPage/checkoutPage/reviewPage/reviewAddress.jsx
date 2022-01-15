import { useEffect, useState } from "react";
import "./reviewpage.css"
function ReviewAddress(){
    const [data, setData] = useState([]);

  const getData = () => {
    fetch(
      `https://masai-react-assignment.herokuapp.com/AddressLocal`
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
  useEffect(()=>{
    getData()
  },[])
    return(
        <>
{
              data[0].map((item)=>{
                return(
                    <div className="review_detail_add">
                  <h3 className="review_h3">Shipping address</h3>
                      <p className="review_p">{item.name}</p>
                      <p className="review_p">
                        {item.address1},{item.address2},{item.address3}
                      </p>
                      <p className="review_p">India</p>
                      <p className="review_p">Phone : {item.phone}</p>
                      <p className="review_pAdd">Add delivery instructions</p>
                </div>
                )
              })
            }
        </>
    )
}

export default ReviewAddress