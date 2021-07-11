import { Provider } from "react-redux";
import { store } from "../state/store";
import ReposList from "../components/ReposList";

const App = () => {
  return (
    <Provider store={store}>
      <div>
        <h1>Search for a repo</h1>
        <ReposList />
      </div>
    </Provider>
  );
};

export default App;
