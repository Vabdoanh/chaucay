import React, {useState, useEffect} from 'react'
import { Button } from 'react-bootstrap';
import { Form } from 'react-bootstrap';
import { Row,Col } from 'react-bootstrap';
import Item from './Item';

const Product = () => {
  const [products,setProducts] = useState([]);
  const [name,setName ] =useState('');
  
  useEffect(() =>{
    
  }, []);

  useEffect(() =>{
    
  }, [name]);

  return (
    <div>
        <Form.Group style={{width: '300px'}} className="mb-2" controlId="exampleForm.ControlInput1">
        <Form.Label>Name product:</Form.Label>
        <Form.Control 
            type="name" 
            placeholder="may hut bui..." 
            onChange={(e) => setName(e.target.value)}
        />
        </Form.Group>
        <Row xs={1} md={4} className="g-4">
            {
                products.map((product,index) =>(
                    <Col>
                        <Item key={index} product={product} />
                    </Col>
                ))
            }
        </Row>
    </div>
  )
}

export default Product