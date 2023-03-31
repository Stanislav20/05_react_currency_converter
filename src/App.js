import './App.css';
import Block from './components/Block';

function App() {
  return (
    <div className="App">
      <Block value={0} currency="RUB" />
      <Block value={0} currency="USD" />
    </div>
  );
}

export default App;
