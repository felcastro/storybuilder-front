import {
  Redirect,
  Route,
  Switch,
} from "react-router-dom";

const AppRoutesSwitch = () => {
  return (
    <Switch>
      <Route
        exact
        path="/"
        component={() => (
          <>
            <div style={{ height: "10rem" }}>lol</div>
            <div style={{ height: "10rem" }}>lol</div>
            <div style={{ height: "10rem" }}>lol</div>
            <div style={{ height: "10rem" }}>lol</div>
            <div style={{ height: "10rem" }}>lol</div>
            <div style={{ height: "10rem" }}>lol</div>
            <div style={{ height: "10rem" }}>lol</div>
            <div style={{ height: "10rem" }}>lol</div>
            <div style={{ height: "10rem" }}>lol</div>
            <div style={{ height: "10rem" }}>lol</div>
            <div style={{ height: "10rem" }}>lol</div>
            <div style={{ height: "10rem" }}>lol</div>
            <div style={{ height: "10rem" }}>lol</div>
            <div style={{ height: "10rem" }}>lol</div>
            <div style={{ height: "10rem" }}>lol</div>
            <div style={{ height: "10rem" }}>lol</div>
          </>
        )}
      />
      <Route exact path="/explore" component={() => <div>explore</div>} />
      <Route exact path="/favorites" component={() => <div>favorites</div>} />

      <Route exact path="/signin" component={() => <div>signin</div>} />
      <Route exact path="/signup" component={() => <div>signup</div>} />
      <Redirect to="/" />
    </Switch>
  );
};

export default AppRoutesSwitch;
