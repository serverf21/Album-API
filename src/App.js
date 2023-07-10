import AlbumList from "./AlbumList";
import { Provider } from "react-redux";
import { store } from "./redux/store";
import './index.css';

function App() {
  return (
    <div className="App">
      <Provider store={store}>
        <AlbumList />
      </Provider>
    </div>
  );
}

export default App;
