import React from 'react'
import styled from './Home.module.css';
import { Container, Row, Col } from 'react-bootstrap';

const Home = () => {
    return (
        <React.Fragment>
            <div className={styled.content}>
                <Container>
                    <Row> <Col>    <div className={styled.author}><p> Created by:  </p> </div> </Col> </Row>
                    <Row lg={3} md={3} sm={1}>

                        <Col lg={4} md={6} sm={12} className={styled.box}  >
                            <div className="badge-base LI-profile-badge" data-locale="en_US" data-size="medium" data-theme="light" data-type="HORIZONTAL" data-vanity="djordje-djuric" data-version="v1"><a class="badge-base__link LI-simple-link" href="https://ba.linkedin.com/in/djordje-djuric?trk=profile-badge"></a></div>
                        </Col>
                        <Col lg={4} md={6} sm={12}  className={styled.box}   >
                            <div class="badge-base LI-profile-badge" data-locale="en_US" data-size="medium" data-theme="light" data-type="HORIZONTAL" data-vanity="srdjan-djuric-87a573213" data-version="v1"><a class="badge-base__link LI-simple-link" href="https://ba.linkedin.com/in/srdjan-djuric-87a573213?trk=profile-badge"></a></div>
                        </Col>
                        <Col lg={4} md={6} sm={12}   className={styled.box}  >
                            <div class="badge-base LI-profile-badge" data-locale="en_US" data-size="medium" data-theme="light" data-type="HORIZONTAL" data-vanity="maid-idrizovic-51b282235" data-version="v1"><a class="badge-base__link LI-simple-link" href="https://ba.linkedin.com/in/maid-idrizovic-51b282235?trk=profile-badge"></a></div>
                        </Col>
                    </Row>
                </Container>
            </div>





        </React.Fragment>
    )
}

export default Home