import React, { useEffect, useState } from "react";

export const UserForm = ({ editedUser, onSave, onSaveEdit }) => {
  const [name, setName] = useState("");
  const [address, setAddress] = useState("");

  const handleInputName = (event) => {
    setName(event.target.value);
  };

  const handleInputAdress = (event) => {
    setAddress(event.target.value);
  };

  const handleSave = (event) => {
    if (name !== "" && address !== "") {
      const newUser = {
        name,
        address
      };

      onSave(newUser);
      setName("");
      setAddress("");
    }
  };

  const handleSaveEdited = (event) => {
    if (name !== "" && address !== "") {
      const newUser = {
        name,
        address
      };

      onSaveEdit(newUser);
    }
  };

  useEffect(() => {
    setName(editedUser === "" ? "" : editedUser.name);
    setAddress(editedUser === "" ? "" : editedUser.address);
  }, [editedUser]);

  return (
    <section>
      <div>
        <label htmlFor="name">Name</label>
        <input
          name="name"
          value={name}
          onChange={(event) => handleInputName(event)}
        />
      </div>
      <div>
        <label htmlFor="address">Address</label>
        <input
          name="address"
          value={address}
          onChange={(event) => handleInputAdress(event)}
        />
      </div>
      <div>
        {!editedUser && (
          <button onClick={(event) => handleSave(event)}>save</button>
        )}
        {editedUser && (
          <button onClick={(event) => handleSaveEdited(event)}>
            save user Edited
          </button>
        )}
      </div>
    </section>
  );
};
