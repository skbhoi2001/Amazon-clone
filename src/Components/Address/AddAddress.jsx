import AddressInput from "./AddressInput";
import { v4 as uuid } from "uuid";
import { useEffect, useState } from "react";
// import AddressDisplay from "./AddressDisplay";

function AddAddress() {
  const handleTask = async ({
    name,
    phone,
    pin,
    address1,
    address2,
    address3,
    state,
    addType
  }) => {
    const payload = {
      id: uuid(),
      name: name,
      phone: phone,
      pin: pin,
      address1: address1,
      address2: address2,
      address3: address3,
      state: state,
      addType: addType
    };

    const config = {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(payload)
    };
    await fetch(
      `https://masai-react-assignment.herokuapp.com/formDetails`,
      config
    );
  };
  return (
    <div>
      <AddressInput onTaskCreate={handleTask} />
      {/* <AddressDisplay /> */}
    </div>
  );
}

export default AddAddress;