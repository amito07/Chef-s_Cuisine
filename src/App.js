import {BrowserRouter as Router} from 'react-router-dom';
import { GlobalStyle } from "./globalStyles";
import MainContainer from "./components/MainContainer";
import Products from './components/Products';
import { productData, productDataTwo} from './components/Products/data';
import Feature from './components/Feature';
import Footer from './components/Footer';

function App() {
  return (
    <Router>
      <GlobalStyle/>
      <MainContainer/>
      <Products heading='Choose your favorite' data={productData} />
      <Feature/>
      <Products heading='Choose your favorite' data={productDataTwo}/>
      <Footer/>
    </Router>
  );
}

export default App;
