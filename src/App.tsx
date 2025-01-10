
import UsersComponent from "./components/users-component/UsersComponent.tsx";

const App = () =>  {


    // fetch('https://jsonplaceholder.typicode.com/users')
    //     .then(value => value.json())
    //     .then(response => {
    //         setUsers(response);
    //     });


  return (
      <div>
          <UsersComponent/>
      </div>
  )
}

export default App
