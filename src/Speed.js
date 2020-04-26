import React, { Component } from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';

const StyledSpeed = styled.p`
    margin-top: 30px;
    font-size: 40px;
`;

class Speed extends Component {
  render() {
    const round = Math.round(this.props.speed);
    return (
      <StyledSpeed>
        {round}
        {' '}
Notes / minute
      </StyledSpeed>
    );
  }
}

const mapStateToProps = (state) => ({
  speed: state.partitions.speed,
});

const mapDispatchToProps = {

};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Speed);
