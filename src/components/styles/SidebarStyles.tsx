import styled from "styled-components";

export const SidebarStyle = styled.section`
    display: flex;
    flex-direction: column;
    background-color: #cdffff;
    width: 15vw;
    text-align: center;

    ul {
        list-style: none;
    }
    li {
        padding: 18px 0;
        cursor: pointer;
        //flex-direction: column;
        //flex: 1;
    }
    li:hover {
        background-color: #589d9d;
    }
    a {
        
        text-decoration: none;
        color: #333;
    }
`