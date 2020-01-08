import React, { Component } from 'react'
import { connect } from 'react-redux'
import BandInput from '../components/BandInput';


class BandsContainer extends Component {
  render() {
    return(
      <div>
        <BandInput addBand={this.props.addBand}/>
        {
          this.props.bands.map((band, i) => {
            return <li key={i}>{band.name}</li>
          })
        }
      </div>
    )
  }
}

const mapStateToProps = state => ({ bands: state.bands })

const mapDispatchToProps = dispatch => ({
  addBand: band => {
    return dispatch({ type: "ADD_BAND", band })
  }
})

export default connect(mapStateToProps, mapDispatchToProps)(BandsContainer)
