import React, { Component } from 'react';
import styled from 'styled-components';
import {connect} from 'react-redux';
import {notePos} from "./GenerateNotes";

const Note = styled.div`
    border-bottom: 1px solid black;
`;

const Inside = styled.div`
    height:  100px;
    position: relative;
    top: -50px;
    margin: 0px;
    vertical-align: middle;
    display: flex;
    flex-direction: column;
    justify-content: center;
`

const StyledPartition = styled.div`
  margin-top: 30px;
  display: grid;
  grid-auto-rows: 10px;
`;

const StyledChar = styled.div`
    vertical-align: middle;
`;

const noteChar = (bemol, diese) => {
    if (bemol) {
        return <StyledChar>&#9837;o</StyledChar>;
    } else if (diese) {
        return <StyledChar>	&#9839;o</StyledChar>;
    }
    return <StyledChar>o</StyledChar>;
};

class Partition extends Component {

    componentWillMount() {
        //let notes = generateNotes(30);
        this.props.generateNotes(0);
    }



    render() {
        const notes = [];
        const noteColumns = this.props.notes.map(note => {
            const {row} = notePos(note);
            return row;
        });
        const firstLineRow = Math.min(...noteColumns, 0);
        const lastRow = Math.max(...noteColumns, 8);
        console.log("first line", firstLineRow);
        const firstColumn = 0;
        const permanentLines = [0, 2, 4, 6, 8];
        this.props.notes.forEach((note, i) => {
            console.log("note", note);
            const col = i + firstColumn;
            const {row, bemol, diese} = notePos(note);
            for (let j = firstLineRow; j <= lastRow; j++) {
                notes.push(<Note key={`${col},${j}`} style={{gridColumn: col + 1, gridRow: j + 1 - firstLineRow, borderBottomColor: permanentLines.includes(j) || (j % 2 === 0 && (j < 0 || j > 8) && (row === j || row - 1 === j))  ? 'black' : 'white'}}>
                    { row === j &&
                        <Inside style={{color: this.props.activeNote === i? 'red' : 'black'}}>{noteChar(bemol, diese)}</Inside>
                    }
                </Note>);
            }
        });
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
