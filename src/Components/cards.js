import { Row, Card, CardGroup } from 'react-bootstrap';
import shanchiImg from '../images/shangchi.jpg';
import freeguyImg from '../images/freeguy.jfif';
import duneImg from '../images/dune.jpg';
import jawsImg from '../images/jaws.jpg';
import interstellarImg from '../images/interstellar.jpg';



const Cards = () => {
    return (
        <>
        <Row style={{ padding: "2rem" }}><h2>Spilles i dag</h2></Row>
        <Row style={{ padding: "2rem" }} className="justify-content-md-center">
            <CardGroup>
                <Card border="dark" style={{ width: '15rem'}}>
                    <Card.Body>
                        <Card.Img variant ="top" src={shanchiImg} style={{width: '180px', height: '260px'}} />
                        <Card.Title>Shang Chi</Card.Title>
                        <Card.Link href="#/infobook/">18:00</Card.Link>
                        <Card.Link href="#">21:00</Card.Link>
                        <Card.Link href="#">22:30</Card.Link>
                    </Card.Body>
                </Card>

                <Card border="dark" style={{ width: '15rem'}}>
                    <Card.Body>
                        <Card.Img variant ="top" src={freeguyImg} style={{width: '180px', height: '260px'}} />
                        <Card.Title>Free Guy</Card.Title>
                        <Card.Link href='#'>18:00</Card.Link>
                        <Card.Link href="#">21:00</Card.Link>
                    </Card.Body>
                </Card>

                <Card border="dark" style={{ width: '15rem'}}>
                    <Card.Body>
                        <Card.Img variant ="top" src={jawsImg} style={{width: '180px', height: '260px'}} />
                        <Card.Title>Jaws</Card.Title>
                        <Card.Link href="#">19:00</Card.Link>
                        <Card.Link href="#">21:30</Card.Link>
                    </Card.Body>
                </Card>

                <Card border="dark" style={{ width: '15rem'}}>
                    <Card.Body>
                        <Card.Img variant ="top" src={interstellarImg} style={{width: '180px', height: '260px'}} />
                        <Card.Title>Interstellar</Card.Title>
                        <Card.Link href="#">18:00</Card.Link>
                    </Card.Body>
                </Card>

                <Card border="dark" style={{ width: '15rem'}}>
                    <Card.Body>
                        <Card.Img variant ="top" src={interstellarImg} style={{width: '180px', height: '260px'}} />
                        <Card.Title>Interstellar</Card.Title>
                        <Card.Link href="#">00:00</Card.Link>
                    </Card.Body>
                </Card>

                <Card border="dark" style={{ width: '15rem'}}>
                    <Card.Body>
                        <Card.Img variant ="top" src={duneImg} style={{width: '180px', height: '260px'}} />
                        <Card.Title>Dune</Card.Title>
                        <Card.Link href="#/infobook/">18:00</Card.Link>
                        <Card.Link href="#">21:00</Card.Link>
                        <Card.Link href="#">22:30</Card.Link>
                    </Card.Body>
                </Card>

            </CardGroup>

        </Row>
        </>
    )

}

export default Cards;
