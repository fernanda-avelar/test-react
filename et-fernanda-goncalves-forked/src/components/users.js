import { useCallback, useState } from "react";
import { UserForm } from "./userForm";

export const Users = () => {
  const [users, setUsers] = useState([{ name: "1", address: "2" }]);
  const [editedUser, setEditedUser] = useState("");

  const handleOnClickEdit = useCallback((user) => {
    console.log("Users > handleOnClickEdit", { user });
    setEditedUser(user);
  }, []);

  const handleDeleteUser = (x) => {
    setUsers(users.filter((user) => user.name !== x.name));
  };

  const onSave = (newUser) => {
    setUsers([...users, newUser]);
    console.log(users);
  };

  const onSaveEdit = (newUser) => {
    const newUsers = users.map((user) => {
      if (
        user.name === editedUser.name &&
        user.address === editedUser.address
      ) {
        return (user = newUser);
      }
      return user;
    });

    console.log([...newUsers]);
    setUsers([...newUsers]);

    setEditedUser("");
  };

  return (
    <div>
      <UserForm
        onSave={onSave}
        onSaveEdit={onSaveEdit}
        editedUser={editedUser}
      />
      <h3>List of users</h3>
      <div>
        {users.map((x) => (
          <li key={Math.random()}>
            {x.name} - {x.address}{" "}
            <button onClick={() => handleOnClickEdit(x)}>Edit</button>
            <button onClick={() => handleDeleteUser(x)}>Delete</button>
          </li>
        ))}
      </div>
    </div>
  );
};
