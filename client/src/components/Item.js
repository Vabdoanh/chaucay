import React from 'react'
import { Card } from 'react-bootstrap'

const Item = () => {
  return (
    <>
    <Card>
        <Card.Img variant="top" src="holder.js/100px160" />
        <Card.Body>
          <Card.Title>Card title</Card.Title>
          <Card.Text>
            This is a longer card with supporting text below as a natural
          </Card.Text>
        </Card.Body>
      </Card>
    </>
  )
}

export default Item