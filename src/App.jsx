import "./App.css";
import AddTransaction from "./components/AddTransaction";
import Balance from "./components/Balance";
import Header from "./components/Header";
import Incomeexpenses from "./components/Incomeexpenses";
import TransactionList from "./components/TransactionList";
import { GlobalProvider } from "./context/GlobalState";

function App() {
  return (
    <GlobalProvider>
      <Header />
      <div className="container"></div>
      <Balance />
      <Incomeexpenses />
      <TransactionList />
      <AddTransaction />
    </GlobalProvider>
  );
}

export default App;
