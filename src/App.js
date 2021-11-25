import logo from './logo.svg';
import './App.css';
import { Provider } from 'react-redux';
import store from './store';
import StudentsList from './components/studentsList';
import CardContainer from './components/cardContainer';

function App() {
  return (
    <Provider store={store}>
    
    <div className="App">
      <CardContainer>
        <StudentsList />
      </CardContainer>

    </div>
    </Provider>
  );
}

export default App;
