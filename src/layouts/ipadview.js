import React, { Component } from 'react'
import { withRouter } from 'react-router-dom';
import { Link } from 'react-router-dom';
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

const SideBar = (props) => {
    const routes = [
        {
            name: 'dashboard',
            to: '/',
            icon: <BulbOutlined />
        },
        {
            name: 'experiment',
            to: '/experiment',
            icon: <ExperimentOutlined />
        },
        {
            name: 'test',
            to: '/experiment',
            icon: <ShareAltOutlined />
        },
        {
            name: 'test2',
            to: '/experiment',
            icon: <SettingOutlined />
        },
    ]
    return routes.map(route => {
        const { pathname } = props.location;
        const active = (route.to === pathname);
        const dynStyle = { color: active ? 'blue' : '' };
        
        return (
            <Link to={route.to} key={route.name}>
                <Icon style={dynStyle}>{route.icon}</Icon>
            </Link>
        )
    })
}

class IpadView extends Component {
    render() {
        return (
            <DarkBackground>
                <Row>
                    <Col md={2}>
                        <SideBar {...this.props} />
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

export default withRouter(IpadView)