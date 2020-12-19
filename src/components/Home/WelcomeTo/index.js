import React from 'react';
import { Container , Row , Col  } from 'react-bootstrap';
import imgWelcome from '../../../images/about/about.jpg'
import { Box  , Span , Title , Desc , Buttons , Link } from './style.js'

const WelcomeTo = () => {
    return(
        <div className="section">
            <Container>
                <Box>
                    <Row>
                        <Col lg={6} md={12}>
                            <Span>Seo Company</Span>
                            <Title>Welcome to Greatseo</Title>
                            <Desc>Quisque eget nisl id nulla sagittis auctor quis id. Aliquam quis vehicula enim, non aliquam risus. Sed a tellus quis mi honcus dignissim.</Desc>
                            <Desc>Interdum et malesuada fames ac ante ipsum primis in faucibus. Vestibulum sed elit a ex ullamcorper gravida. Integer lorem libero, hendrerit sed hendrerit in, molestie quis urna. Nullam sed sapien at nisi mollis blandit porttitor at dolor. Suspendisse fermentum vestibulum iaculis. Quisque tempor sagittis bibendum. Quisque pulvinar dui vitae fringilla euismod. Integer gravida commodo nisl a feugiat. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.</Desc>
                        </Col>
                        <Col  lg={6} md={12}>
                            <img className="img-fluid" src={imgWelcome} alt=""/>
                        </Col>
                    </Row>
                    <Buttons>
                        <Link primary className="border-r6 transition">Our Mission</Link>
                        <Link className="border-r6 transition">Our Vission</Link>
                    </Buttons>
                <Desc>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi scelerisque tortor mi, eget mattis velit sagittis id. Duis ornare mauris eu eros interdum, vitae finibus arcu ultricies. Donec vitae felis eleifend, dignissim erat a, pretium diam. Donec eu massa odio. Suspendisse et ornare lacus, pharetra imperdiet ligula.</Desc>
                <Desc>Vestibulum ac quam id lorem semper condimentum. Nulla vel ligula turpis. Nullam luctus, mi nec rhoncus gravida, tortor est semper purus, a feugiat sapien odio non urna. Fusce pellentesque neque ut nisi rhoncus imperdiet. Sed eu purus vel turpis consectetur convallis. Donec a dolor tellus. Phasellus dignissim erat nec ipsum condimentum sollicitudin.</Desc>
                </Box>
            </Container>
        </div>
    );
} 
export default WelcomeTo;