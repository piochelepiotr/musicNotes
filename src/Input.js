import React, { Component } from 'react';
import {connect} from 'react-redux';
import styled from 'styled-components';
import { textChanged } from './actions/partitions';
import { mapping } from './Piano';

const StyledInput = styled.p`
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
        this.props.textChanged(message, this.props.notes, this.props.activeNote, this.props.startTime);
    }

    render() {
        return(
            <StyledInput>Note : {mapping[this.props.message] ? mapping[this.props.message].readable : ""}</StyledInput>
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
    textChanged
}

export default connect(
    mapStateToProps,
    mapDispatchToProps)(Input);
