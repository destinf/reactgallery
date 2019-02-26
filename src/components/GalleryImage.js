import React, { Component } from 'react'
import ImageModal from './ImageModal'
import Image from 'react-bootstrap/Image'

export default class GalleryImage extends Component {
  state = { show: false }
  handleOpen = () => {
    this.setState({ show: true })
  }

  handleClose = () => {
    this.setState({ show: false })
  }

  render() {
    return (
      <>
        <Image src={this.props.picture} onClick={this.handleOpen} fluid />
        <ImageModal show={this.state.show} onHide={this.handleClose} {...this.props} />
      </>
    )
  }
}
