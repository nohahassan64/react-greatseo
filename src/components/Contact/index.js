import React from 'react';
import { Container , Row , Col  } from 'react-bootstrap';
import imgcontact from '../../images/logo/logo-seo.png';
import { Desc , Title , Ul , Li , Input , Icon  , IconSocial } from './style.js'

const Contact = () => {
    return(
        <div className="section">
            <Container>
               <Row>
                   <Col md={4} sm={12}>
                     <img src={imgcontact}/>
                     <Desc>SEO Mauris pharetra quam ut commodo malesuada. Sed a ornare purus, nec cursus tortor. Integer vehicula felis nec nunc pulvinar efficitur. In et semper odio. Sed laoreet ullamcorper augue, ut mattis metus mattis quis.</Desc>
                     <Desc>Sed fermentum est vitae rhoncus molestie. Cum sociis natoque penatibus et magnis dis montes.</Desc>
                   </Col>

                   <Col md={2} sm={12}>
                    <Title>Information</Title>
                    <Ul>
                        <Li className="transition">Home</Li>
                        <Li className="transition">Blog</Li>
                        <Li className="transition">Pricing</Li>
                        <Li className="transition">About</Li>
                        <Li className="transition">Faq</Li>
                        <Li className="transition">Contact</Li>
                    </Ul>
                   
                   </Col>

                   <Col md={3} sm={12}>
                   <Title>Newsletter</Title>
                    <Desc>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam et tincidunt risus, vitae sollicitudin tellus</Desc>
                    <Input placeholder="Email"></Input>
                    <Icon className="fas fa-long-arrow-alt-right"></Icon>
                    <Title>Social</Title>
                    <IconSocial facebook className="fab fa-facebook"></IconSocial>
                    <IconSocial git className="fab fa-github"></IconSocial>
                    <IconSocial twitter className="fab fa-twitter"></IconSocial>
                    <IconSocial dribble className="fab fa-dribbble"></IconSocial>
                    <IconSocial pinter className="fab fa-pinterest"></IconSocial>
                   </Col>

                   <Col md={3} sm={12}>
                    <Title>Contact Details</Title>
                    <Ul>
                        <Li className="transition">info@yoursite.com</Li>
                        <Li className="transition">www.yoursite.com</Li>
                        <Li className="transition">PO Box 16122 Collins Street West Victoria 8007 Australia</Li>
                        <Li className="transition">+61 3 8376 6284</Li>
                    </Ul>
                   </Col>
               </Row>

            </Container>
        </div>
    );
} 
export default Contact;