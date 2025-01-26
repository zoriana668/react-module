import {PaginationComponent} from "./components/pagination/PaginationComponent.tsx";
import {UsersComponent} from "./components/users/UsersComponent.tsx";

export const App = () =>  {

  return (
      <div>
          <UsersComponent/>
          <PaginationComponent/>
      </div>
  )
}
