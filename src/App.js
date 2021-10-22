import Routes from "./routes/Routes";
import './index.css'
import { DataProvider } from "./context/DataContext";

function App() {
  return (
    <DataProvider>
      <Routes />
    </DataProvider>
  );
}

export default App;
