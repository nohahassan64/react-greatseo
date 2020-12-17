import React, { Component } from 'react';
import axios from 'axios'
import { Container , Row , Col } from 'react-bootstrap';
import { OurPricingSection , Title  , Desc , Box  , Head, Sup , SpanPrice , Span , TitleBox , Ul , Li , Link } from './style.js'


class OurPricing extends Component {
    state={
        ourpricing: []
    }
    componentDidMount () {
        axios.get('js/data.json').then(res => {this.setState({ ourpricing : res.data.ourpricing})})
    }
    render(){
        const {ourpricing} = this.state;
        const ourpricingList = ourpricing.map( (ourpricingItem) => {
            return(
                <Col md={4} sm={12} key={ourpricingItem.id}>
                   <Box className="border-r6 box-shadow">
                    <Head className="transition border-rTop">
                        <Sup>$</Sup>
                        <SpanPrice>{ourpricingItem.price}</SpanPrice>
                        <Span>/mo</Span>
                        <TitleBox>{ourpricingItem.title}</TitleBox>
                        </Head>
                        <Ul>
                            <Li>{ourpricingItem.li1}</Li>
                            <Li>{ourpricingItem.li2}</Li>
                            <Li>{ourpricingItem.li3}</Li>
                        </Ul>
                        <Link href="#">Choose Plan</Link>
                   </Box>
                </Col>
            )
        })

        return (
            <OurPricingSection className="section text-center">
                <Container>
                    <Title>Our Pricing</Title>
                    <Desc>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam et tincidunt risus, vitae sollicitudin tellus. Sed a nulla nisl. Aenean a lacus eget nibh dignissim molestie in quis magna. Sed vel euismod ligula. Mauris vitae suscipit velit, in vestibulum elit. In sed tellus nec metus consectetur iaculis et vitae tellus.</Desc>
                    <Row>
                        {ourpricingList}
                    </Row>

                </Container>
            </OurPricingSection>
          );
    }

}

export default OurPricing;
