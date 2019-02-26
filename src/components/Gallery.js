import React from 'react'
import GalleryRow from './GalleryRow'
import { FormControl, Col, Row, Table, Button } from 'react-bootstrap'
import ScrollTrigger from 'react-scroll-trigger'
import { debounce } from 'throttle-debounce'

export default class Gallery extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      loading: true,
      images: []
    }
    this.getImages = this.getImages.bind(this)
    this.divideImagesIntoRows = this.divideImagesIntoRows.bind(this)
    this.handleLoadMore = this.handleLoadMore.bind(this)
    this.handleSearch = this.handleSearch.bind(this)
    this.search = debounce(500, this.search)
  }

  componentDidMount() {
    this.getImages(20)
  }

  search(query) {
    this.setState({
      query: query,
      loading: true,
      images: []
    })
    this.getImages(20)
  }

  handleSearch(event) {
    this.search(event.target.value)
  }

  handleLoadMore(event) {
    if (this.state.loading) return
    this.setState({ loading: true })
    this.getImages(5)
    this.setState({ loading: false })
  }

  async getImages(size) {
    let params = {
      size: size,
      sort: [{ index: "asc" }]
    }

    if (this.state.query) {
      params["query"] = {
        simple_query_string: {
          query: this.state.query
        }
      }
    }

    if (this.state.images[0]) { // If an image exists
      params['search_after'] = [this.state.images[this.state.images.length - 1]._source.index]
    } else {
      params['from'] = 0
    }
    const response = await fetch(
      'http://localhost:9200/paid/pictures/_search',
      {
        headers: { "Content-Type": "application/json" },
        method: "POST",
        body: JSON.stringify(params)
      }
    )
    const json_resp = await response.json()
    this.setState({
      loading: false,
      images: this.state.images.concat(json_resp.hits.hits)
    })
    return json_resp.hits.hits
  }

  divideImagesIntoRows() {
    const imagesPerRow = 5
    const imageCount = this.state.images.length
    let rows = []

    for (let i = 0; i < imageCount; i += imagesPerRow) {
      rows.push(this.state.images.slice(i, i + imagesPerRow))
    }
    return rows
  }

  render() {
    return (
      <>
        <Row>
          <Col>
            <FormControl type="text" placeholder="Search" onChange={this.handleSearch} />
          </Col>
        </Row>
        <Row className="gallery">
          <Table bordered={false}>
            <tbody>
              {this.divideImagesIntoRows().map((row, index) => {
                return <GalleryRow key={index} data={index} images={row} />
              })}
            </tbody>
          </Table>
        </Row>
        <Row>
          <ScrollTrigger onEnter={this.handleLoadMore} onExit={this.handleLoadMore}>
            <Button onClick={this.handleLoadMore}>Load More</Button>
          </ScrollTrigger>
        </Row>
      </>
    )
  }
}
