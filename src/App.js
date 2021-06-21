
import './App.css';
import ShopPage from './pages/shop-page/shop-pagecomponent';
import HomePage from './pages/home-page/home-pagecomponent'

//attaching the application
import {Switch,Route,Link} from 'react-router-dom';


function App() {
  return (
    <div className="App">
      

      <Route exact path ='/' component={HomePage} />
      <Route path='/shop' component ={ShopPage}/>

    </div>
  );
}

export default App;
