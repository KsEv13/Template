import React from 'react'
import { Container, Card, Row, Col } from 'react-bootstrap'

export const Home = () => {
  return (
    <div className="home">
      <Container>
        <Row className="home-main-row">
          <Col>
            <Card style={{ width: '800px' }}>
              <Card.Body>
                <Card.Title>
                  <h1>Card Title</h1>
                </Card.Title>
                <Card.Subtitle className="mb-2 text-muted">
                  <h2>Card Subtitle</h2>
                </Card.Subtitle>
                <Card.Text>
                  <p>Here our pages</p>
                </Card.Text>
                <Card.Link href="/About">About page</Card.Link>
                <Card.Link href="/Quiz">Crushes Quiz</Card.Link>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  )
}
