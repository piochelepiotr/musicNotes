import React, { Component } from 'react';
import {connect} from 'react-redux';
import styled from 'styled-components';
import { textChanged, changeKeyboard } from './actions/partitions';
import { mapping } from './Piano';

const Container = styled.div`
`;

const StyledInput = styled.p`
    font-size: 40px;
`;

const Button = styled.p`
    background-color: rgb(100, 100, 100);
    font-size: 30px;
    border-radius: 3px;
    padding: 5px;
    display: inline-block;
    &:hover {
      background-color: rgb(200,200,200);
    }
`;

class Input extends Component {

    constructor() {
        super();
        this.state = {
            message: "",
        };
    }

    onMessageChanged(e) {
        var message = e.target.value;
        this.props.textChanged(message, this.props.notes, this.props.activeNote, this.props.startTime);
    }

    render() {
        return(
            <Container>
                <StyledInput>Note : {mapping[this.props.message] ? mapping[this.props.message].readable : ""}</StyledInput>
                <Button onClick={() => { this.props.changeKeyboard() }}>Switch keyboard</Button>
            </Container>
        )
    }
}

const mapStateToProps = state => ({
    message: state.partitions.inputText,
    notes: state.partitions.notes,
    activeNote: state.partitions.activeNote,
    startTime: state.partitions.startTime
})

const mapDispatchToProps = {
    textChanged,
    changeKeyboard
}

export default connect(
    mapStateToProps,
    mapDispatchToProps)(Input);
