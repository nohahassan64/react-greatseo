import React, { Component } from 'react';
import axios from 'axios'
import { Container , Row , Col } from 'react-bootstrap';
import { Desc , Box  , Head, Sup , SpanPrice , Span , TitleBox , Ul , Li , Link } from './../../Home/OurPricing/style';
import { PricingInfoSection , Title } from './style.js';


class PricingInfo extends Component {
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
                <Col  md={4} xs={12} key={ourpricingItem.id}>
                   <Box>
                    <Head>
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
            <PricingInfoSection className="section text-center">
                <Container>
                    <Title>Pricing</Title>
                    <Desc>Get the red carpet treatment just $39 per month! It is estimated that 3.5 million established by personal blogs.<br/>From each other, we share paid WordPress themes WP Service...</Desc>
                    <Row>
                        {ourpricingList}
                    </Row>

                </Container>
            </PricingInfoSection>
          );
    }

}

export default PricingInfo;
