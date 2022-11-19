import './App.css';
import DecComp from './components/DecComp';
import IncComp from './components/IncComp';
import IncContextProvider from './context/IncContext';
import DecContextProvider from './context/DecContext';

const App=()=> {
  
  return (
    <DecContextProvider>
    <IncContextProvider>
    <div className="App">
        <DecComp/>
        <IncComp/>
    </div>
    </IncContextProvider>
    </DecContextProvider>
  );
}

export default App;
