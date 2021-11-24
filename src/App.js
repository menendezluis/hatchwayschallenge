import logo from './logo.svg';
import './App.css';
import { Provider } from 'react-redux';
import store from './store';
import StudentsList from './components/studentsList';

function App() {
  return (
    <Provider store={store}>
    <div className="App">
  <h1>Students</h1>
  <StudentsList />
    </div>
    </Provider>
  );
}

export default App;
