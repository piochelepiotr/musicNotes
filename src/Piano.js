import React, { Component } from 'react';
import styled from 'styled-components';
import {connect} from 'react-redux';
import { textChanged } from './actions/partitions';

const Background = styled.div`
  margin-top: 50px;
  background-color: black;
  height: 300px;
  display: grid;
`;

const WhiteKeys = styled.div`
  grid-column: 1;
  grid-row: 1;
  display: flex;
  justify-content: center;
`;

const BlackKeys = styled.div`
  grid-column: 1;
  grid-row: 1;
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
  margin-left: 6px;
  margin-right: 6px;
  &:hover {
    background-color: rgb(100,100,100);
  }
`;

const BlackKeySpacer = styled.div`
  width: 30px;
  height: 150px;
  margin-left: 6px;
  margin-right: 6px;
`;

export const mapping = {
    "d1": {
        "letter": "3C",
        "readable": "Do",
    },
    "r1b": {
        "letter": "3Db",
        "readable": "Ré bémol",
    },
    "r1": {
        "letter": "3D",
        "readable": "Ré",
    },
    "m1b": {
        "letter": "3Eb",
        "readable": "Mi bémol",
    },
    "m1": {
        "letter": "3E",
        "readable": "Mi",
    },
    "f1": {
        "letter": "3F",
        "readable": "Fa",
    },
    "o1b": {
        "letter": "3Gb",
        "readable": "Sol bé",
    },
    "o1": {
        "letter": "3Gb",
        "readable": "Sol",
    },
    "l1b": {
        "letter": "3Ab",
        "readable": "La bémol",
    },
    "l1": {
        "letter": "3A",
        "readable": "La",
    },
    "s1b": {
        "letter": "3Bb",
        "readable": "Si bémol",
    },
    "s1": {
        "letter": "3B",
        "readable": "Si",
    },

    "d2": {
        "letter": "4C",
        "readable": "Do",
    },
    "r2b": {
        "letter": "4Db",
        "readable": "Ré bémol",
    },
    "r2": {
        "letter": "4D",
        "readable": "Ré",
    },
    "m2b": {
        "letter": "4Eb",
        "readable": "Mi bémol",
    },
    "m2": {
        "letter": "4E",
        "readable": "Mi",
    },
    "f2": {
        "letter": "4F",
        "readable": "Fa",
    },
    "o2b": {
        "letter": "4Gb",
        "readable": "Sol bémol",
    },
    "o2": {
        "letter": "4G",
        "readable": "Sol",
    },
    "l2b": {
        "letter": "4Ab",
        "readable": "La bémol",
    },
    "l2": {
        "letter": "4A",
        "readable": "La",
    },
    "s2b": {
        "letter": "4Bb",
        "readable": "Sol bémol",
    },
    "s2": {
        "letter": "4B",
        "readable": "Sol",
    },
};

const getAudio = note => "notes/Piano.pp." + mapping[note]["letter"] + ".mp3";

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
                <WhiteKeys>
                    <WhiteKey onClick={() => this.play("d1")}/>
                    <WhiteKey onClick={() => this.play("r1")}/>
                    <WhiteKey onClick={() => this.play("m1")}/>
                    <WhiteKey onClick={() => this.play("f1")}/>
                    <WhiteKey onClick={() => this.play("o1")}/>
                    <WhiteKey onClick={() => this.play("l1")}/>
                    <WhiteKey onClick={() => this.play("s1")}/>
                    <WhiteKey onClick={() => this.play("d2")}/>
                    <WhiteKey onClick={() => this.play("r2")}/>
                    <WhiteKey onClick={() => this.play("m2")}/>
                    <WhiteKey onClick={() => this.play("f2")}/>
                    <WhiteKey onClick={() => this.play("o2")}/>
                    <WhiteKey onClick={() => this.play("l2")}/>
                    <WhiteKey onClick={() => this.play("s2")}/>
                </WhiteKeys>
                <BlackKeys>
                    <BlackKey onClick={() => this.play("r1b")}/>
                    <BlackKey onClick={() => this.play("m1b")}/>
                    <BlackKeySpacer/>
                    <BlackKey onClick={() => this.play("o1b")}/>
                    <BlackKey onClick={() => this.play("l1b")}/>
                    <BlackKey onClick={() => this.play("s1b")}/>
                    <BlackKeySpacer/>
                    <BlackKey onClick={() => this.play("r2b")}/>
                    <BlackKey onClick={() => this.play("m2b")}/>
                    <BlackKeySpacer/>
                    <BlackKey onClick={() => this.play("o2b")}/>
                    <BlackKey onClick={() => this.play("l2b")}/>
                    <BlackKey onClick={() => this.play("s2b")}/>
                </BlackKeys>
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
