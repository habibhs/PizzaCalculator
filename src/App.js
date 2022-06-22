
import Home from './component/Home';
import { PizzaProvider } from './context/PizzaContext';

function App() {
  return (
    <PizzaProvider>
    <Home/>
    </PizzaProvider>
  );
}

export default App;
