import React, { Component } from 'react';
import styled from 'styled-components';
import {connect} from 'react-redux';
import { textChanged } from './actions/partitions';

const Background = styled.p`
  margin-top: 50px;
  background-color: black;
  height: 300px;
  display: flex;
  justify-content: center;
`

const WhiteKey = styled.p`
  background-color: white;
  width: 40px;
  margin: 1px;
  &:hover {
    background-color: rgb(200,200,200);
  }
`

const BlackKey = styled.p`
  background-color: black;
  width: 30px;
  height: 150px;
  position: relative;
  left: 26px;
  top: 0px;
  &:hover {
    background-color: rgb(100,100,100);
  }
`

class Piano extends Component {

    play(note) {
        this.props.textChanged(note, this.props.notes, this.props.activeNote, this.props.startTime);
    }

    render() {
        return (
            <Background>
                <WhiteKey onClick={() => this.play("d")}>
                    <BlackKey/>
                </WhiteKey>
                <WhiteKey onClick={() => this.play("r")}>
                    <BlackKey/>
                </WhiteKey>
                <WhiteKey onClick={() => this.play("m")}/>
                <WhiteKey onClick={() => this.play("f")}>
                    <BlackKey/>
                </WhiteKey>
                <WhiteKey onClick={() => this.play("o")}>
                    <BlackKey/>
                </WhiteKey>
                <WhiteKey onClick={() => this.play("l")}>
                    <BlackKey/>
                </WhiteKey>
                <WhiteKey onClick={() => this.play("s")}/>
                <WhiteKey onClick={() => this.play("d")}>
                    <BlackKey/>
                </WhiteKey>
                <WhiteKey onClick={() => this.play("r")}>
                    <BlackKey/>
                </WhiteKey>
                <WhiteKey onClick={() => this.play("m")}/>
                <WhiteKey onClick={() => this.play("f")}>
                    <BlackKey/>
                </WhiteKey>
                <WhiteKey onClick={() => this.play("o")}>
                    <BlackKey/>
                </WhiteKey>
                <WhiteKey onClick={() => this.play("l")}>
                    <BlackKey/>
                </WhiteKey>
                <WhiteKey onClick={() => this.play("s")}/>
            </Background>
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
    mapDispatchToProps)(Piano);
