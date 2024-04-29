import "./App.css";
import { List } from "./components/List";
import { SearchBar } from "./components/SearchBar";
import apps from '../src/constants/apps';

function App() {
  return (
    <div className="flex flex-col justify-center items-center">
      <div className="w-screen text-center mt-10 mb-10">
      <h1 className="font-primaryBold text-5xl text-primary">REPOSITORIO UNINORTE</h1>
      </div>
      
      <div className="container">
        <List apps={apps} />
      </div>
    </div>
  );
}

export default App;
