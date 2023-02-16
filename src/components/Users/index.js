import "./user.css";
import { useFetchUsersQuery } from "../../store/api";
import { useState } from "react";

const Users = () => {
  const [showTasks, setShowTasks] = useState(false);
  const { data: users = [] } = useFetchUsersQuery();

  const getUserTaks = () => {
    setShowTasks(true);
  };

  return (
    <ul>
      {users.map(
        ({ name, email, phone, address: { street, suite, city, zipcode } }) => (
          <li key={email} className="user">
            <div>
              <p>{name}</p>
              <p>{email}</p>
            </div>
            <div>
              <p>{phone}</p>
              <p>{`${street}, ${suite}, ${city}, ${zipcode}`}</p>
            </div>
            <div>
              <button onClick={getUserTaks}>Get User Todos</button>
            </div>
            {showTasks && <div className="tasks">Hello</div>}
          </li>
        )
      )}
    </ul>
  );
};

export default Users;
