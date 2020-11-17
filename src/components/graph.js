import React from 'react'
import LineGraph from 'react-line-graph'
import styled from 'styled-components'

const Container = styled.div`
    display: flex;
    height: 75px
`
const Graph = () => {
    const data = [33, 32, 36, 31, 34, 35, 39, 38, 37];
    const props = {
        data,
        smoothing: 0.7,
        accent: 'red',
        fillBelow: '#2c2d32',
        hover: false,
    };

    return (
        <Container>
            <LineGraph {...props} />
        </Container>
    )
}

export default Graph