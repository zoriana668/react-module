import './App.css'
import MyComponent from "./components/MyComponent.tsx";

function App() {
  return (
    <>
        <MyComponent title ={'title 1'}>
            Lorem ipsum dolor sit amet.
        </MyComponent>
        <MyComponent title ={'title 2'}></MyComponent>
      <MyComponent title = {'title 3'}/>
    </>
  )
}

export default App
