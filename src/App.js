import "./App.css";
import Counter from "./component/Counter";
import mystore from "./store/indexstore";
import { Provider } from "react-redux";

const App = () => {
  return (
    <Provider store={mystore}>
      <Counter />
    </Provider>
  );
};

export default App;
