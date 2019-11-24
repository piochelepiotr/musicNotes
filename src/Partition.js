import React, { Component } from 'react';
import styled from 'styled-components';
import {connect} from 'react-redux';

const Note = styled.div`
    margin: 0px;
    border-bottom: 1px solid black;
`;

const Inside = styled.p`
margin: 0px;
position: relative;
top: -10px;
`

const StyledPartition = styled.div`
  margin-top: 30px;
  display: grid;
  grid-auto-rows: 10px;
`

class Partition extends Component {

    componentWillMount() {
        //let notes = generateNotes(30);
        this.props.generateNotes(0);
    }


    render() {
        const notes = [];
        const firstLineRow = 0;
        const firstColumn = 0;
        const permanentLines = [0, 2, 4, 6, 8].map(x => x + firstLineRow);
        const lastRow = 9;
        this.props.notes.forEach((note, i) => {
            const col = i + firstColumn;
            for (let j = 0; j <= lastRow; j++) {
                notes.push(<Note key={`${col},${j}`} style={{gridColumn: col + 1, gridRow: j + 1, borderBottomColor: permanentLines.includes(j) ? 'black' : 'white'}}>
                    { this.props.notes[col] === j &&
                        <Inside style={{color: this.props.activeNote === i? 'red' : 'black'}}>o</Inside>
                    }
                </Note>);
            }
        })
      return (
          <StyledPartition>
              {notes}
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
