import React from 'react';
import { Container , Row , Col  } from 'react-bootstrap';
import imgChoose1 from '../../../images/choose/01.jpg'
import imgChoose2 from '../../../images/choose/02.jpg'
import { Title , DescTitle , TitleBox , Desc , Image  } from './style.js'

const WhyChoose = () => {
    return(
        <div className="section">
            <Container>
            <Title className="text-center">Why Choose Us</Title>
            <DescTitle className="text-center">We offer unlimited solutions to all your business needs. in the installation package we prepare search engine optimization, social media support, we provide corporate identity and graphic design services. </DescTitle>
            <Row>
              <Col lg={6} md={12}>
                <Image src={imgChoose1} alt=""/>
              </Col>
              <Col lg={6} md={12}>
                <TitleBox>Research Optimization</TitleBox>
                <Desc>Donec in mattis felis. Vivamus eu convallis metus. Phasellus mattis tincidunt eros, et malesuada ligula pharetra non. Cras fringilla iaculis augue, eu aliquam erat. Fusce convallis dolor dolor, eu fermentum risus mattis eget. Etiam id eleifend lorem. Pellentesque ut urna pharetra, vulputate magna quis, feugiat turpis. Aenean at nulla sit amet elit fringilla lobortis. Etiam ac lectus eget eros cursus sagittis sit amet dapibus nisi. Nullam elementum, lectus vitae feugiat fermentum, massa mauris laoreet neque, a semper diam lorem ut ante.</Desc>
                <Desc>Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.</Desc>
              </Col>
            </Row>

            <Row>
              <Col lg={6} md={12}>
                <TitleBox>Research Optimization</TitleBox>
                <Desc>Donec in mattis felis. Vivamus eu convallis metus. Phasellus mattis tincidunt eros, et malesuada ligula pharetra non. Cras fringilla iaculis augue, eu aliquam erat. Fusce convallis dolor dolor, eu fermentum risus mattis eget. Etiam id eleifend lorem. Pellentesque ut urna pharetra, vulputate magna quis, feugiat turpis. Aenean at nulla sit amet elit fringilla lobortis. Etiam ac lectus eget eros cursus sagittis sit amet dapibus nisi. Nullam elementum, lectus vitae feugiat fermentum, massa mauris laoreet neque, a semper diam lorem ut ante.</Desc>
                <Desc>Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.</Desc>
              </Col>
              <Col lg={6} md={12}>
                <Image src={imgChoose2} alt=""/>
              </Col>
            </Row>
            </Container>
        </div>
    );
} 
export default WhyChoose;