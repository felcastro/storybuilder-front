import { Redirect, Route, Switch } from "react-router-dom";
import { Home } from "./pages/Home";

const AppRoutesSwitch = () => {
  return (
    <Switch>
      <Route exact path="/" component={() => <Home />} />
      <Route exact path="/explore" component={() => <div>explore</div>} />
      <Route exact path="/favorites" component={() => <div>favorites</div>} />

      <Route exact path="/signin" component={() => <div>signin</div>} />
      <Route exact path="/signup" component={() => <div>signup</div>} />
      <Redirect to="/" />
    </Switch>
  );
};

export default AppRoutesSwitch;
