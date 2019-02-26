import React from 'react';
import { Col, Container, Modal, Row, Table, Badge } from 'react-bootstrap'

export default function (props) {
  const capitalize = (string) => {
    return string.charAt(0).toUpperCase() + string.slice(1)
  }
  const userTable = (user) => {
    if (!user) return null
    return Object.keys(user).map(key =>
      <tr key={key}><td><strong>{capitalize(key)}</strong></td><td>{user[key]}</td></tr>
    )
  }
  const makeBadges = (tags) => {
    if (!tags) return null
    return Object.keys(tags).map(key =>
      <Badge variant="primary">{tags[key]}</Badge>
    )
  }
  return (
    <Modal {...props} dialogClassName="image-modal">
      <Modal.Header closeButton />
      <Modal.Body>
        <Container>
          <Row>
            <Col>
              <img src={props.picture} alt={`Created by ${props.user.name}`} />
            </Col>
            <Col>
              <Table>
                <tbody>
                  {userTable(props.user)}
                </tbody>
                {makeBadges(props.tags)}
              </Table>
            </Col>
          </Row>
        </Container>
      </Modal.Body>
    </Modal>
  )
}
