import "./App.css";
import useAuth from "./hooks/useAuth";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Header from "./component/Header";
import Home from "./pages/Home";
import Vilas from "./pages/Vilas";
import Purchase from "./pages/Purchase";
import PrivateRoute from "./component/PrivateRoute";
import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";
import Register from "./pages/Register";
import Footer from "./component/Footer";

function App() {
  const { loading } = useAuth();

  return (
    <Router>
      {loading ? (
        <span></span>
      ) : (
        <div className="app">
          <Header />
          <Switch>
            <Route path="/" exact>
              <Home />
            </Route>
            <Route path="/explore" exact>
              <Vilas />
            </Route>
            <PrivateRoute path="/purchase" exact>
              <Purchase />
            </PrivateRoute>
            <Route path="/login" exact>
              <Login />
            </Route>
            <Route path="/register" exact>
              <Register />
            </Route>
            <PrivateRoute path="/dashboard">
              <Dashboard />
            </PrivateRoute>
            <Route path="*">"Not Found"</Route>
          </Switch>
          <Footer />
        </div>
      )}
    </Router>
  );
}

export default App;
