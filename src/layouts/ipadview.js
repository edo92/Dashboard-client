import React, { Component } from 'react'

import { Col, Row } from 'antd'
import styled from 'styled-components';
import {
    BulbOutlined, ExperimentOutlined, ShareAltOutlined, SettingOutlined
} from '@ant-design/icons';

const Container = styled.div`
    width: 100%;
    height: 100vh;
    border: 1px solid black;
`
const Icon = styled.div`
    font-size: 30px;
    padding: 1.5rem;
    border-bottom: 1px solid #383a3f;
    padding-top: 4.5rem;
    padding-bottom: 4.5rem;
    background: #202124;
    color: #9f9f9f 
`

const DarkBackground = styled.div`
    background: #202124;
`

const InnerHeader = styled.div`
    border-color: #383a3f;
    height: 55px;
    width: 100%;
    background: #2c2d32;
`

const SideBar = () => (
    <Container>
        <Icon><BulbOutlined /></Icon>
        <Icon><ExperimentOutlined /></Icon>
        <Icon><ShareAltOutlined /></Icon>
        <Icon><SettingOutlined /></Icon>
    </Container>
)

class IpadView extends Component {
    render() {
        return (
            <DarkBackground>
                <Row>
                    <Col md={2}>
                        <SideBar />
                    </Col>
                    <Col md={22}>
                        <InnerHeader />
                        {this.props.children}
                    </Col>
                </Row>
            </DarkBackground>
        )
    }
}

export default IpadView