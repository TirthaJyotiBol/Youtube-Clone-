import './App.css';
import Header from './Components/Header';
import RecommendedVideos from './Components/RecommendedVideos';
import Sidebar from './Components/Sidebar';
import SearchPage from './Components/SearchPage';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

function App() {
  return (
        
    <div className="App">

      <Router>
        <Switch>

          <Route exact path='/'> 
              <Header/> 
              <div className='section__recom_sidebar' >
              <Sidebar/>
              <RecommendedVideos/>
              </div>
          </Route>   

          <Route exact path='/search/:searchTerm'>
              <Header/> 
              <div className='section__recom_sidebar' >
              <Sidebar/>
              <SearchPage/>
              </div>
          </Route>    

        </Switch>
      </Router>

    </div>

  );
}

export default App;



     {/* <Header/>  */}
     {/* <div className='section__recom_sidebar' >
     <Sidebar/>
     <RecommendedVideos/>
     </div> */}