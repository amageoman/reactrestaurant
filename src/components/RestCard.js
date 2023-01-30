import React from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';


function RestCard({ data }) {
    return (
        <Link to={`view-restaurant/${data.id}`} style={{textDecoration:"none"}}>

            <Card classNmae="card" style={{ width: '17rem' ,textAlign:"center",fontSize:"medium"}} >
                <Card.Img variant="top" src={data.photograph} />
                <Card.Body>
                    <Card.Title >{data.name}</Card.Title>
                    <Card.Text>
                       {data.neighborhood}
                    </Card.Text>
                    
                </Card.Body>
            </Card>

        </Link>
    )
}

export default RestCard