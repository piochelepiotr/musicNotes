import React, { Component } from 'react';
import styled from 'styled-components';

const StyledInput = styled.input`
    margin-top: 200px;
    font-size: 40px;
`

class Input extends Component {

    constructor() {
        super();
        this.state = {
            message: "",
        };
    }

    onMessageChanged(e) {
        var message = e.target.value;
        this.setState({message: message});
        dispatch({
            type: 'GENERATE_PARTITION',
            message: message,
        })
    }

    render() {
        return(
            <StyledInput type="text" onChange={this.onMessageChanged.bind(this)} value={this.state.message} />
        )
    }
}

export default Input;
