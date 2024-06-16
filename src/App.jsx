import Header from "./components/Header"
import Body from "./components/Body"
import { Provider } from "react-redux"
import appStore from "./utils/Redux/appStore"
import { BrowserRouter, Route, Routes } from "react-router-dom"


function App() {
  return (
    <>
    <BrowserRouter>
        <Provider store={appStore}>
        <div>
          <Header />
          <Body />
        </div>
      </Provider>
    </BrowserRouter>
    </>
  )
}

export default App
