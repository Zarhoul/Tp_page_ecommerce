import styled from 'styled-components';
import Product from './components/product';
import Header from './components/header';
import Banner from './components/banner';
import Footer from './components/footer';

function App() {
  const Container = styled.div`
    width: 100%;
    height: 100vh;
  `;
  return (
    <Container>
      <Header />
      <Banner />
      <Product />
      <Footer />
    </Container>
  );
}

export default App;
