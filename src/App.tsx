import {useState} from "react";

const App = () =>  {
    const [users, setUsers] = useState<any[]>([]);

    fetch('https://jsonplaceholder.typicode.com/users')
        .then(value => value.json())
        .then(response => {
            setUsers(response);
        });

  return (
      <div>
          {
              users.map(value => <div>{value.name}</div>)
          }
      </div>
  )
}

export default App
