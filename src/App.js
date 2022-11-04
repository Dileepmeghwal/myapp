
import './App.css';
import GlobalInstance from './Components/GlobalInstance';
import Header from './Components/Header';
import Mystor from './Components/Mystor';
import Post from './Components/Post';
import PostReq from './Components/PostReq';
import './Components/axios/global'
import ProductsList from './Components/axios-fetch/ProductsList';
import GetCountry from './Components/axios/GetCountry';
function App() {
  return (
    <div className="App">
      <h1>App</h1>

      {/* <Post/> */}
      {/* <Header/> */}
      {/* <PostReq/> */}
      {/* <GlobalInstance/> */}
      {/* <ProductsList/> */}
      {/* <Mystor/> */}
      <GetCountry/>
    </div>
  );
}

export default App;
