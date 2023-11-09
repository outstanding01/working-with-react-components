import './App.css';
import Card from 'react-bootstrap/Card';
import Description from './description';
// import Image from './image';
import Namecompo from './namecompo';
import Price from './pricecompo';
import product from './product';


function App() {
  
  const firstName = 'OLANREWAJU';

  return (
    <>
      <div className='container'>
        <Card style={{ width: '18rem' }}>
          <Card.Img className='productphoto' src={product.urlpath} />
          <Card.Body >
            <Namecompo name={product.name}/>
            <Price price={product.price}/>
            <Description  description={product.description}/>
          </Card.Body>
        </Card>
        <div className='secondSection'>
          {firstName ? (
            <div>
              <p>HELLO,{firstName}</p>
              <img className='firstnameImage' src={"/ola-Image.JPG"} alt={firstName} />
            </div>
          ) : (
            <p>HELLO, THERE!.</p>
          )
          }
        </div>
      </div>
      
    </>
  )
}

export default App
