import React from 'react';
import styled from 'styled-components';

const FormContainer = styled.form`
    padding: 75px 0;
`;

const ActionInput = styled.input`
    font-size: 1rem;
    padding: 10px;
    width: 325px;
    outline: none;
`;

const ActionButton = styled.button`
    font-size: 1rem;
    background-color: #05668D;
    padding: 11px;
    color: white;
    cursor: pointer;
    margin-left: 15px;
    width: 150px;
    border: none;
`;

const CallToAction = () => {
    return (
        <FormContainer>
            <ActionInput type="text" name="email" placeholder="your email address"/>
            <ActionButton>REGISTER</ActionButton>
        </FormContainer>
    )
}

export default CallToAction;