import React , { useState } from 'react';
import { Container ,  Accordion , Card , Button  } from 'react-bootstrap';
import SwiperCore, { Navigation , Autoplay } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper.scss';
import 'swiper/components/navigation/navigation.scss';
import ImgServ1 from '../../../images/services/01.png'
import ImgServ2 from '../../../images/services/02.png'
import ImgServ3 from '../../../images/services/03.png'
import ImgServ4 from '../../../images/services/04.png'
import ImgServ5 from '../../../images/services/05.png'
import ImgServ6 from '../../../images/services/06.png'
import { ServicesInfoSection , Title , DescTitle , IconHeader , DescCard , Ul , Li , Icon ,  Box , Image , TitleBox , Desc  } from './style.js';
import './main.css';
SwiperCore.use([Navigation , Autoplay]);
const ServicesInfo = () => {
  const [open, setOpen] = useState(false);
    return(
        <ServicesInfoSection className="section">
            <Container>
                <Title>SEO Services</Title>
                <DescTitle>We offer unlimited solutions to all your business needs. in the installation package we prepare search engine optimization, social media support, we provide corporate identity and graphic design services.<br/>Etiam velit libero, lacinia eu felis eget, pharetra gravida ipsum. Praesent tincidunt faucibus iaculis. Morbi id augue interdum diam scelerisque pellentesque. Sed eget consequat velit, quis facilisis leo. Suspendisse finibus turpis sit amet elit maximus, et semper magna pharetra. Nullam in risus metus. Nunc ultricies non odio ut consectetur.</DescTitle>
                <Accordion defaultActiveKey="0">
                        <Card>
                            <Card.Header>
                            <Accordion.Toggle as={Button} variant="link" eventKey="0">Discovery</Accordion.Toggle>
                            <IconHeader className="fas fa-search"></IconHeader>
                            </Card.Header>
                            <Accordion.Collapse eventKey="0">
                            <Card.Body>
                              <DescCard>Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch et. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident. Ad vegan excepteur butcher vice lomo. Leggings occaecat craft beer farm-to-table, raw denim aesthetic synth nesciunt you probably haven't heard of them accusamus labore sustainable VHS.</DescCard>
                                <Ul>
                                    <Li className="transition border-r6"><Icon className="far fa-hand-point-right"></Icon> Lorem ipsum dolor sit amet, consectetur adipiscing elit.</Li>
                                    <Li className="transition border-r6"><Icon className="far fa-hand-point-right"></Icon>In bibendum ante at blandit egestas.</Li>
                                    <Li className="transition border-r6"><Icon className="far fa-hand-point-right"></Icon>Nullam in urna vulputate, aliquet dui in, consequat mi.</Li>
                                    <Li className="transition border-r6"><Icon className="far fa-hand-point-right"></Icon> Cras tempor orci at eros faucibus egestas.</Li>
                                    <Li className="transition border-r6"><Icon className="far fa-hand-point-right"></Icon>Vivamus sollicitudin nulla vitae malesuada fringilla.</Li>
                                </Ul>
                            </Card.Body>
                            </Accordion.Collapse>
                        </Card>

                        <Card>
                            <Card.Header>
                            <Accordion.Toggle as={Button} variant="link" eventKey="1">Strategy</Accordion.Toggle>
                            <IconHeader className="fas fa-bullseye"></IconHeader>
                            </Card.Header>
                            <Accordion.Collapse eventKey="1">
                            <Card.Body>
                              <DescCard>Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch et. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident. Ad vegan excepteur butcher vice lomo. Leggings occaecat craft beer farm-to-table, raw denim aesthetic synth nesciunt you probably haven't heard of them accusamus labore sustainable VHS.</DescCard>
                                <Ul>
                                    <Li className="transition border-r6"><Icon className="far fa-hand-point-right"></Icon> Lorem ipsum dolor sit amet, consectetur adipiscing elit.</Li>
                                    <Li className="transition border-r6"><Icon className="far fa-hand-point-right"></Icon>In bibendum ante at blandit egestas.</Li>
                                    <Li className="transition border-r6"><Icon className="far fa-hand-point-right"></Icon>Nullam in urna vulputate, aliquet dui in, consequat mi.</Li>
                                    <Li className="transition border-r6"><Icon className="far fa-hand-point-right"></Icon> Cras tempor orci at eros faucibus egestas.</Li>
                                    <Li className="transition border-r6"><Icon className="far fa-hand-point-right"></Icon>Vivamus sollicitudin nulla vitae malesuada fringilla.</Li>
                                </Ul>
                            </Card.Body>
                            </Accordion.Collapse>
                        </Card>

                        <Card>
                            <Card.Header>
                            <Accordion.Toggle as={Button} variant="link" eventKey="2">On-site Optimization</Accordion.Toggle>
                            <IconHeader className="fas fa-code"></IconHeader>
                            </Card.Header>
                            <Accordion.Collapse eventKey="2">
                            <Card.Body>
                              <DescCard>Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch et. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident. Ad vegan excepteur butcher vice lomo. Leggings occaecat craft beer farm-to-table, raw denim aesthetic synth nesciunt you probably haven't heard of them accusamus labore sustainable VHS.</DescCard>
                                <Ul>
                                    <Li className="transition border-r6"><Icon className="far fa-hand-point-right"></Icon> Lorem ipsum dolor sit amet, consectetur adipiscing elit.</Li>
                                    <Li className="transition border-r6"><Icon className="far fa-hand-point-right"></Icon>In bibendum ante at blandit egestas.</Li>
                                    <Li className="transition border-r6"><Icon className="far fa-hand-point-right"></Icon>Nullam in urna vulputate, aliquet dui in, consequat mi.</Li>
                                    <Li className="transition border-r6"><Icon className="far fa-hand-point-right"></Icon> Cras tempor orci at eros faucibus egestas.</Li>
                                    <Li className="transition border-r6"><Icon className="far fa-hand-point-right"></Icon>Vivamus sollicitudin nulla vitae malesuada fringilla.</Li>
                                </Ul>
                            </Card.Body>
                            </Accordion.Collapse>
                        </Card>

                        <Card>
                            <Card.Header>
                            <Accordion.Toggle as={Button} variant="link" eventKey="3">Content Marketing</Accordion.Toggle>
                            <IconHeader className="far fa-newspaper"></IconHeader>
                            </Card.Header>
                            <Accordion.Collapse eventKey="3">
                            <Card.Body>
                              <DescCard>Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch et. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident. Ad vegan excepteur butcher vice lomo. Leggings occaecat craft beer farm-to-table, raw denim aesthetic synth nesciunt you probably haven't heard of them accusamus labore sustainable VHS.</DescCard>
                                <Ul>
                                    <Li className="transition border-r6"><Icon className="far fa-hand-point-right"></Icon> Lorem ipsum dolor sit amet, consectetur adipiscing elit.</Li>
                                    <Li className="transition border-r6"><Icon className="far fa-hand-point-right"></Icon>In bibendum ante at blandit egestas.</Li>
                                    <Li className="transition border-r6"><Icon className="far fa-hand-point-right"></Icon>Nullam in urna vulputate, aliquet dui in, consequat mi.</Li>
                                    <Li className="transition border-r6"><Icon className="far fa-hand-point-right"></Icon> Cras tempor orci at eros faucibus egestas.</Li>
                                    <Li className="transition border-r6"><Icon className="far fa-hand-point-right"></Icon>Vivamus sollicitudin nulla vitae malesuada fringilla.</Li>
                                </Ul>
                            </Card.Body>
                            </Accordion.Collapse>
                        </Card>

                        <Card>
                            <Card.Header>
                            <Accordion.Toggle as={Button} variant="link" eventKey="4">Analysis & Reporting</Accordion.Toggle>
                            <IconHeader className="fas fa-chart-line"></IconHeader>
                            </Card.Header>
                            <Accordion.Collapse eventKey="4">
                            <Card.Body>
                              <DescCard>Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch et. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident. Ad vegan excepteur butcher vice lomo. Leggings occaecat craft beer farm-to-table, raw denim aesthetic synth nesciunt you probably haven't heard of them accusamus labore sustainable VHS.</DescCard>
                                <Ul>
                                    <Li className="transition border-r6"><Icon className="far fa-hand-point-right"></Icon> Lorem ipsum dolor sit amet, consectetur adipiscing elit.</Li>
                                    <Li className="transition border-r6"><Icon className="far fa-hand-point-right"></Icon>In bibendum ante at blandit egestas.</Li>
                                    <Li className="transition border-r6"><Icon className="far fa-hand-point-right"></Icon>Nullam in urna vulputate, aliquet dui in, consequat mi.</Li>
                                    <Li className="transition border-r6"><Icon className="far fa-hand-point-right"></Icon> Cras tempor orci at eros faucibus egestas.</Li>
                                    <Li className="transition border-r6"><Icon className="far fa-hand-point-right"></Icon>Vivamus sollicitudin nulla vitae malesuada fringilla.</Li>
                                </Ul>
                            </Card.Body>
                            </Accordion.Collapse>
                        </Card>
                        </Accordion>
            </Container>
            <Swiper
       spaceBetween={5}
       slidesPerView={3}
       navigation
       loop={true}
       grabCursor={true}
       autoplay={{
         delay: 5000,
         disableOnInteraction: false}}
       onSlideChange={() => console.log('slide change')}
       onSwiper={(swiper) => console.log(swiper)}
     >
      <SwiperSlide>
        <Box className="box-shadow">
        <Image src={ImgServ1} alt=""/>
        <TitleBox>Search Engine Optimization</TitleBox>
        <Desc>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Officia optio repellat nisi eaque corrupti et nobis rem, dolorum harum libero ipsum dolor sit amet!</Desc>
        </Box>
      </SwiperSlide>

      <SwiperSlide>
        <Box className="box-shadow">
        <Image src={ImgServ2} alt=""/>
        <TitleBox>Email Marketing</TitleBox>
        <Desc>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Officia optio repellat nisi eaque corrupti et nobis rem, dolorum harum libero ipsum dolor sit amet!</Desc>
        </Box>
      </SwiperSlide>

      <SwiperSlide>
        <Box className="box-shadow">
        <Image src={ImgServ3} alt=""/>
        <TitleBox>Pay Per Click</TitleBox>
        <Desc>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Officia optio repellat nisi eaque corrupti et nobis rem, dolorum harum libero ipsum dolor sit amet!</Desc>
        </Box>
      </SwiperSlide>

      <SwiperSlide>
        <Box className="box-shadow">
        <Image src={ImgServ4} alt=""/>
        <TitleBox>Website Development</TitleBox>
        <Desc>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Officia optio repellat nisi eaque corrupti et nobis rem, dolorum harum libero ipsum dolor sit amet!</Desc>
        </Box>
      </SwiperSlide>

      <SwiperSlide>
        <Box className="box-shadow">
        <Image src={ImgServ5} alt=""/>
        <TitleBox>Reporting</TitleBox>
        <Desc>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Officia optio repellat nisi eaque corrupti et nobis rem, dolorum harum libero ipsum dolor sit amet!</Desc>
        </Box>
      </SwiperSlide>

      <SwiperSlide>
        <Box className="box-shadow">
        <Image src={ImgServ6} alt=""/>
        <TitleBox>Social Media Marketing</TitleBox>
        <Desc>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Officia optio repellat nisi eaque corrupti et nobis rem, dolorum harum libero ipsum dolor sit amet!</Desc>
        </Box>
      </SwiperSlide>
    </Swiper>
        </ServicesInfoSection>

    );
}
export default ServicesInfo;

