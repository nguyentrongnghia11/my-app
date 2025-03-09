import logo from './logo.svg';
import './App.css';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import Body from './components/Body/Body';
import Product from './components/Product/Product';
function App() {
  return (
    <>
      <Header />

      <Body>
        <Product />
      </Body>

      {/* </><Product/> */}
      {/* <Body/> */}


      <Footer />
    </>
  );
}

export default App;
