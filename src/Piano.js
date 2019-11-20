import React, { Component } from 'react';
import styled from 'styled-components';
import {connect} from 'react-redux';
import { textChanged } from './actions/partitions';
import {notesNames} from "./GenerateNotes";

const Background = styled.div`
  margin-top: 50px;
  background-color: black;
  height: 300px;
  display: flex;
  justify-content: center;
`;

const WhiteKey = styled.div`
  background-color: white;
  width: 40px;
  margin: 1px;
  &:hover {
    background-color: rgb(200,200,200);
  }
`;

const BlackKey = styled.div`
  background-color: black;
  width: 30px;
  height: 150px;
  position: relative;
  left: 26px;
  top: 0px;
  &:hover {
    background-color: rgb(100,100,100);
  }
`;

const mapping = {
    "d1": "3C",
    "r1b": "3Db",
    "r1": "3D",
    "m1b": "3Eb",
    "m1": "3E",
    "f1": "3F",
    "o1b": "3Gb",
    "o1": "3Gb",
    "l1b": "3Ab",
    "l1": "3A",
    "s1b": "3Bb",
    "s1": "3B",

    "d2": "4C",
    "r2b": "4Db",
    "r2": "4D",
    "m2b": "4Eb",
    "m2": "4E",
    "f2": "4F",
    "o2b": "4Gb",
    "o2": "4G",
    "l2b": "4Ab",
    "l2": "4A",
    "s2b": "4Bb",
    "s2": "4B",
};

const getAudio = note => "notes/Piano.pp." + mapping[note] + ".mp3";

class Piano extends Component {

    constructor(props) {
        super(props);
        this.audio = {};
        this.previous = "";
        Object.keys(mapping).forEach(note => this.audio[note] = new Audio(getAudio(note)));
    }

    state = {
        play: false,
        previous: "",
        next: "",
    };

    play = note => {
        this.setState({ play: !this.state.play, previous: this.state.next, next: note }, () => {
            // console.log(this.state.play);
            console.log(this.audio[note]);
            console.log("previous", this.state.previous);
            console.log("next", this.state.next);
            if (this.state.previous != "") {
                console.log("heer");
                this.audio[this.state.previous].pause();
            }
            //if (this.state.play) {
                var audio = this.audio[note];
                audio.currentTime = 0.2;
                audio.play();
            //} else {
            //    this.audio[note].pause()
            //}
        });
        this.props.textChanged(note, this.props.notes, this.props.activeNote, this.props.startTime);
    };

    render() {
        return (
            <Background>
                <WhiteKey onClick={() => this.play("d1")}>
                    <BlackKey onClick={() => this.play("r1b")}/>
                </WhiteKey>
                <WhiteKey onClick={() => this.play("r1")}>
                    <BlackKey onClick={() => this.play("m1b")}/>
                </WhiteKey>
                <WhiteKey onClick={() => this.play("m1")}/>
                <WhiteKey onClick={() => this.play("f1")}>
                    <BlackKey onClick={() => this.play("o1b")}/>
                </WhiteKey>
                <WhiteKey onClick={() => this.play("o1")}>
                    <BlackKey onClick={() => this.play("l1b")}/>
                </WhiteKey>
                <WhiteKey onClick={() => this.play("l1")}>
                    <BlackKey onClick={() => this.play("s1b")}/>
                </WhiteKey>
                <WhiteKey onClick={() => this.play("s1")}/>
                <WhiteKey onClick={() => this.play("d2")}>
                    <BlackKey onClick={() => this.play("r2b")}/>
                </WhiteKey>
                <WhiteKey onClick={() => this.play("r2")}>
                    <BlackKey onClick={() => this.play("m2b")}/>
                </WhiteKey>
                <WhiteKey onClick={() => this.play("m2")}/>
                <WhiteKey onClick={() => this.play("f2")}>
                    <BlackKey onClick={() => this.play("o2b")}/>
                </WhiteKey>
                <WhiteKey onClick={() => this.play("o2")}>
                    <BlackKey onClick={() => this.play("l2b")}/>
                </WhiteKey>
                <WhiteKey onClick={() => this.play("l2")}>
                    <BlackKey onClick={() => this.play("s2b")}/>
                </WhiteKey>
                <WhiteKey onClick={() => this.play("s2")}/>
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
