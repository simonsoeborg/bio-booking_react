import { Row, Card, CardGroup } from 'react-bootstrap';
import cardDataItems from '../dummydata/carddata';

function listPlayTimes(data) {
    return (
        data.playtimes.map((playtimes) => 
            <Card.Link href="#/infobook/">{playtimes.time}</Card.Link>
        )
    )
}

const Cards = () => {
    return (
        <div>
        <Row style={{ padding: "2rem" }}><h2>Spilles i dag</h2></Row>
        <Row style={{ padding: "2rem" }} className="justify-content-md-center">
            <CardGroup>
                {Object.keys(cardDataItems).map(data => (
                    <a style={{ cursor: 'pointer' }} href='#/movie'>
                        <Card border="dark" style={{ width: '15rem'}}>
                            <Card.Body>
                                <Card.Img variant="top" src={cardDataItems[data].image} style={{ width: '180px', height: '260px' }} />
                                <Card.Title>{cardDataItems[data].title}</Card.Title>
                                { 
                                    listPlayTimes(cardDataItems[data])
                                }
                            </Card.Body>
                        </Card>
                    </a>
                ))}

            </CardGroup>

        </Row>
        </div>
    )

}

export default Cards;
