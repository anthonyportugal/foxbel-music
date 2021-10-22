import { BrowserRouter, Route, Switch } from "react-router-dom"
import HomeView from "../views/Home/HomeView"

const Routes = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path='/' component={HomeView} />
      </Switch>
    </BrowserRouter>
  )
}

export default Routes