import React, { Component } from 'react';
import styled from 'styled-components';
import {connect} from 'react-redux';

const Blank = styled.p`
  color: white;
  display: inline;
  margin-right: 20px;
`

const NoteDec = styled.p`
  display: inline;
  position: relative;
  top: 9px;
  margin-right: 20px;  
`

const Note = styled.p`
  display: inline;
  margin-right: 20px;  
`

const Line = styled.div`
  border-bottom: 1px solid black;
`

const StyledPartition = styled.div`
  margin-top: 30px;
`

class Partition extends Component {

    buildHTMLLine(base) {
        const line = this.props.notes.map((note, i) => {
            if(base-1 === this.props.notes[i]) {
                if (this.props.activeNote === i) {
                  return <Note key={i} style={{color: 'red'}} >o</Note>;
                }
                else {
                  return <Note key={i}>o</Note>;
                }
            } else if(base === this.props.notes[i]) {
              if (this.props.activeNote === i) {
                return <NoteDec key={i} style={{color: 'red'}} >o</NoteDec>;
              }
              else {
                return <NoteDec key={i}>o</NoteDec>;
              }
            } else {
                return <Blank key={i}>o</Blank>;
            }
        });
        return <Line key={base}>{line}</Line>;
    }

    componentWillMount() {
        //let notes = generateNotes(30);
        this.props.generateNotes(0);
    }

    render() {
        var wrong = ["", "", "", "", ""];
        const lines = wrong.map((base, i) => {
            return this.buildHTMLLine(i*2+1);
        })
      return (
        <StyledPartition>
          {lines}
        </StyledPartition>
      );
    }
  }

const generateNotes = (startTime) => {
    return {
        type: 'GENERATE_NOTES',
        startTime,
    }
}

const mapStateToProps = state => ({
      notes: state.partitions.notes,
      activeNote: state.partitions.activeNote,
  })

  const mapDispatchToProps = {
      generateNotes,
  }

export default connect(
    mapStateToProps,
    mapDispatchToProps)(Partition);
