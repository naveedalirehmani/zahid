import React from 'react'
import { Icon } from "@iconify/react";
import styled from 'styled-components'

const Navigations = () => {
    return (
        <Navigation>
            <div><Icon icon="ep:arrow-left-bold" width="15" /></div>
            <div className="text">Master Bedroom</div>
            <div className="settings"><Icon icon="bytesize:settings" width="20" /></div>
        </Navigation>
    )
}

export default Navigations

const Navigation = styled.div`
    padding: 0.5rem 0.6rem;
    display:flex;
    align-items:center;
    justify-content:space-between;
    .text{
        margin-left:1.5rem;
    }
    .settings{
        border-radius:50%;
        display:flex;
        justify-content:center;
        align-items:center;
        background-color: #f5f5f5;
        padding:0.3rem;
    }
`