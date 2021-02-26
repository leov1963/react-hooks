import ApiFetch from './components/ApiFetch'
import Counter from './components/Counter'
import './App.css';

function App() {
  return (
    <div className="App">
      <Counter initialNumber={0} />
      <ApiFetch userName={'leov1963'} />
    </div>
  );
}

export default App;
