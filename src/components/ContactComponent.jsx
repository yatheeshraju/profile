import React, { Component } from 'react';
import Card from 'react-bootstrap/Card';
import { FiInstagram } from 'react-icons/fi';
import { FiFacebook } from 'react-icons/fi';
import { FiLinkedin } from 'react-icons/fi';
import Image from 'react-bootstrap/Image';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

class ContactComponent extends Component {
    render() {
        return (
            <div>
                <Card style={{ width: '28em',background:"#4056A1" ,color:"#fff" }}>
                    <Card.Body >
                        <Row>
                            <Col>
                                <Image src="holder.js/180x180"></Image>
                            </Col>
                            <Col>
                                <Card.Title >
                                    Firstname Lastname
                                </Card.Title>
                                <Card.Subtitle className="mb-2" >
                                    my@email.com
                                </Card.Subtitle>

                                <Card.Link href="#linkedin"><FiLinkedin size={24} color='#fff'/></Card.Link>
                                <Card.Link href="#facebook"><FiFacebook  size={24} color='#fff'/></Card.Link>
                                <Card.Link href="#instagram"><FiInstagram size={24} color='#fff' /></Card.Link>

                                <Card.Text className="mt-2">
                                    Some one liner about your experience some nice words about you .
                                 </Card.Text>

                            </Col>

                        </Row>



                    </Card.Body>
                </Card>
            </div>
        );
    }
}

export default ContactComponent;