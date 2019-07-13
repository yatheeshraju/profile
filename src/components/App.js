import React from 'react';
import ContactComponent from './ContactComponent';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import DetailsComponent from './DetailsComponent';
import SkillsComponent from './SkillsComponent';

function App() {
  return (
    <div className="App" >
      <Container style={{paddingLeft:0,paddingRight:0}}>
        <Row>
          <Col></Col>
          <Col>
          <ContactComponent />
          </Col>
          <Col></Col>
        </Row>
        <Row>
          <Col></Col>
          <Col>
          <SkillsComponent/>
          </Col>
          <Col></Col>
        </Row>
        <Row>
          <Col></Col>
          <Col>
          <DetailsComponent/>
          </Col>
          <Col></Col>
        </Row>
     
      </Container>

      
    </div>
  );
}

export default App;
