import React,{useState} from 'react'
import styled from 'styled-components'

const Tags = () => {
    const [active, setActive] = useState("h")
    return (
        <TagsWrapper>
            <div className={active == 'h' ? 'active' : ''} onClick={()=>setActive('h')}>48 HOURS</div>
            <div className={active == 'w' ? 'active' : ''} onClick={()=>setActive('w')}>WEEK</div>
            <div className={active == 'm' ? 'active' : ''} onClick={()=>setActive('m')}>MONTH</div>
            <div className={active == 'y' ? 'active' : ''} onClick={()=>setActive('y')}>YEAR</div>
        </TagsWrapper>
    )
}

export default Tags


const TagsWrapper = styled.div`
    display:flex;
    width:100%;
    justify-content:space-between;
    div{
        border-radius:20px;
        padding:0.2rem 0.4rem;
        margin:0.2rem;
        border:1px solid transparent;
    }
    .active{
        border:1px solid black;
    }
`