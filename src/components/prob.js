import React from 'react';
import styled from 'styled-components';
import { Row, Col } from 'antd';

import Graph from './graph';

const Container = styled.div`
    height: 200px;
    width:100%;
    margin-right: 1rem;
    background: #2c2d32;
    border-color: #383a3f;
    border-radius: 6px;
`

const Wrapper = styled.div`
    padding: 1rem;
    padding-right: 0;
`


const Prob = () => (
    <Container>
        <Row>
            <Col span={15}>
            </Col>
            <Col span={9}>
                <Wrapper>
                    <Graph height={150} />
                </Wrapper>
            </Col>
        </Row>
    </Container>
)

export default Prob;