import React from 'react';
import { Container , Row , Col  } from 'react-bootstrap';
import { Title , Desc , Form , InputLeft , InputRight, TextArea , Link , Image } from './style.js';


const ContactInfo = () => {
    return(
        <div className="section">
            <Container>
                <Title>Get In Touch</Title>
                <Desc>All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, true generator<br/> on the Internet. It uses a dictionary of over..</Desc>
                <Row>
                    <Col md={6} xs={12}>
                    <form>
                        <InputLeft className="border-r6" placeholder="First Name"/>
                        <InputRight className="border-r6" placeholder="Last Name"/>
                        <InputLeft className="border-r6" placeholder="Your Email"/>
                        <InputRight className="border-r6" placeholder="Your Website"/>
                        <TextArea className="border-r6" placeholder="Give us more details.."></TextArea>
                    </form>
                    <Link href="#">Get A Quote</Link>
                    </Col>
                    <Col md={6} xs={12}>
                        <Image className="box-shadow" src="images/contact.png" alt=""/>
                    </Col>
                </Row>    
            </Container>
        </div>

    );
}
export default ContactInfo;