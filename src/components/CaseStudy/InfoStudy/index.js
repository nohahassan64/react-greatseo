import React from 'react';
import { Container , Row , Col  } from 'react-bootstrap';
import { Span , Title , Desc  , Box, BoxImage , Image , Over , BoxOver , TitleBox , DescBox , Icon  } from './style.js';

const InfoStudy = () => {
    return(
        <div className="section text-center">
            <Container>
                <Span>Our Awesome Clients</Span>
                <Title>Case Study</Title>
                <Desc>Fusce id mauris non odio fringilla blandit. Vivamus egestas convallis lacus a facilisis. Pellentesque ex nisl, lacinia et risus non, tristique suscipit libero. Aliquam gravida viverra lacus et tincidunt. Praesent non mollis metus. Nullam interdum massa ac purus consequat luctus. Interdum et malesuada fames ac ante ipsum primis in faucibus. Nullam sollicitudin tempor mauris, et gravida ex. Aenean vitae efficitur sapien.Ut sed elit semper, dignissim ex ut, tristique libero. Ut non imperdiet urna. Sed in lacus velit. Morbi ut nulla ut ipsum pellentesque iaculis. Nullam a cursus mauris. Ut a dictum augue, ut imperdiet sem. Donec porttitor, ante cursus iaculis volutpat, ipsum turpis laoreet mauris, ac porttitor sapien nisl in nisi. Morbi at elit in erat suscipit imperdiet a nec justo. Pellentesque ut risus vitae lorem sollicitudin facilisis quis ut risus. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.</Desc>
                <Row>
                    <Col>
                    <Box>
                       <BoxImage>
                       <Over className="transition"></Over>
                        <BoxOver className="transition opacity">
                            <TitleBox>Web Design Project</TitleBox>
                            <DescBox>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin porta in magna egestas ornare. Fusce tortor nibh, interdum eget consequat molestie, blandit vitae sapien.</DescBox>
                        </BoxOver>
                        <Icon className="fas fa-unlink transition opacity"></Icon>
                        <Image src="images/study/01.jpg" alt=""/>
                        </BoxImage>
                        </Box>
                    </Col>

                    <Col>
                    <Box>
                       <BoxImage>
                       <Over className="transition"></Over>
                        <BoxOver className="transition opacity">
                            <TitleBox>Web Design Project</TitleBox>
                            <DescBox>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin porta in magna egestas ornare. Fusce tortor nibh, interdum eget consequat molestie, blandit vitae sapien.</DescBox>
                        </BoxOver>
                        <Icon className="fas fa-unlink transition opacity"></Icon>
                        <Image src="images/study/02.jpg" alt=""/>
                        </BoxImage>
                        </Box>
                    </Col>
                </Row>

                <Row>
                    <Col>
                    <Box>
                       <BoxImage>
                       <Over className="transition"></Over>
                        <BoxOver className="transition opacity">
                            <TitleBox>Web Design Project</TitleBox>
                            <DescBox>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin porta in magna egestas ornare. Fusce tortor nibh, interdum eget consequat molestie, blandit vitae sapien.</DescBox>
                        </BoxOver>
                        <Icon className="fas fa-unlink transition opacity"></Icon>
                        <Image src="images/study/03.jpg" alt=""/>
                        </BoxImage>
                        </Box>
                    </Col>

                    <Col>
                        <Box>
                       <BoxImage>
                       <Over className="transition"></Over>
                        <BoxOver className="transition opacity">
                            <TitleBox>Web Design Project</TitleBox>
                            <DescBox>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin porta in magna egestas ornare. Fusce tortor nibh, interdum eget consequat molestie, blandit vitae sapien.</DescBox>
                        </BoxOver>
                        <Icon className="fas fa-unlink transition opacity"></Icon>
                        <Image src="images/study/04.jpg" alt=""/>
                        </BoxImage>
                        </Box>
                    </Col>
                </Row>

                <Row>
                    <Col>
                        <Box>
                       <BoxImage>
                       <Over className="transition"></Over>
                        <BoxOver className="transition opacity">
                            <TitleBox>Web Design Project</TitleBox>
                            <DescBox>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin porta in magna egestas ornare. Fusce tortor nibh, interdum eget consequat molestie, blandit vitae sapien.</DescBox>
                        </BoxOver>
                        <Icon className="fas fa-unlink transition opacity"></Icon>
                        <Image src="images/study/05.jpg" alt=""/>
                        </BoxImage>
                        </Box>
                    </Col>

                    <Col>
                        <Box>
                       <BoxImage>
                       <Over className="transition"></Over>
                        <BoxOver className="transition opacity">
                            <TitleBox>Web Design Project</TitleBox>
                            <DescBox>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin porta in magna egestas ornare. Fusce tortor nibh, interdum eget consequat molestie, blandit vitae sapien.</DescBox>
                        </BoxOver>
                        <Icon className="fas fa-unlink transition opacity"></Icon>
                        <Image src="images/study/06.jpg" alt=""/>
                        </BoxImage>
                        </Box>
                    </Col>
                </Row>
            </Container>
        </div>

    );
}
export default InfoStudy;