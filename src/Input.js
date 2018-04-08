import React, { Component } from 'react';
import {connect} from 'react-redux';
import styled from 'styled-components';
import { textChanged } from './actions/partitions';

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
        this.props.textChanged(message, this.props.notes, this.props.activeNote, this.props.startTime);
    }

    render() {
        return(
            <StyledInput type="text" onChange={this.onMessageChanged.bind(this)} value={this.props.message} />
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
