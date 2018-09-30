import "./styles/main.scss";

// redux
// ======================================================/
import {appReducer} from "./redux/reducer.js";
import {createStore} from "redux";

let store = createStore(appReducer);

// store.subscribe(() => 
  // console.log(store.getState())
// )

// store.dispatch({type: "R1"});

// router with route config
// ======================================================/
// import Home_Router from "./components/Home+Router.jsx";

// ReactDOM.render(
//   <Home_Router />,
//   document.getElementById('root')
// );

// default
// ======================================================/
import Home from "./components/Home.jsx";

ReactDOM.render(  
  <Home />,
  document.getElementById('root')
);