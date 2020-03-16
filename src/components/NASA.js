import React, { useState, useEffect } from "react";
import styled from 'styled-components';
import axios from "axios";
require('dotenv').config();


const StyledContainer = styled.div`
    height: 100vh;
    width: 100%;
    background-color: rgba(22, 22, 26, 1);
    display: flex;
    justify-content: center;
    align-items: center;
`

const StyledPage = styled.div`
    background-color: #aaaaaa;
    width: 50%;
    padding: 40px 25px 25px;
    margin: 0 auto;
    border-radius: 5px;
    display: flex;
    flex-direction: column;
`

const StyledHeading = styled.h1`
    color: rgb(252, 248, 215, 1);
    font-size:36px;
`
const StyledSmallerHeading = styled.h3`
    color: rgb(252, 248, 215, 1);
`



function Nasa() {

    // const [data, setData] = useState();
    const [photo, setPhoto] = useState();
    const [description, setDescription] = useState();
    useEffect(() => {
        axios.get(`https://api.nasa.gov/planetary/apod?api_key=ICLzHW9yb3MGATQd9zYxOun8OmsxIJVxyejtDhQE`)
            .then(response => {
                // setData(response.data)
                setPhoto(response.data.hdurl);
                setDescription(response.data.explanation);

            })
            .catch(error => {
                console.log(error)
            })
    })
    // console.log(data)
    return (
        <StyledContainer>
            <StyledPage>
                <StyledHeading>Photo of the Day</StyledHeading>
                <img src={photo} alt={description} style={{ width: "500px", height: "600px" }} />
                <StyledSmallerHeading>{description}</StyledSmallerHeading>
            </StyledPage>
        </StyledContainer>
    )




}


export default Nasa