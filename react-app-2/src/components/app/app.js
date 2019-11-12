import React from 'react';
import {Col, Row, Container} from 'reactstrap';
import Header from '../header';
import RandomChar from '../randomChar';
import ItemList from '../itemList';
import CharDetails from '../charDetails';
import GotService from '../../services/GotService.js'

const App = () => {
    return (
        <> 
            <Container>
                <Header />
            </Container>
            <Container>
                <Row>
                    <Col lg={{size: 5, offset: 0}}>
                        <RandomChar/>
                    </Col>
                </Row>
                <Row>
                    <Col md='6'>
                        <ItemList />
                    </Col>
                    <Col md='6'>
                        <CharDetails />
                    </Col>
                </Row>
            </Container>
        </>
    );
};

const service = new GotService();

service.getAllCharacters().then(res => {
    console.log('All characters:');
    console.log(res);
});

service.getCharacter(130).then(res=>{ 
    console.log(`Each character:`);
    console.log(res);
});

service.getAllBooks().then(res => {
    console.log(`All books:`);
    console.log(res);
})

service.getAllBooks().then(res => {
    console.log(`Title of each book:`);
	res.forEach( item => console.log(item.name));
})

service.getAllHouses().then(res => {
    console.log(`All houses:`);
    console.log(res);
});

service.getAllHouses().then(res => {
    console.log(`Title of each house:`);
    res.forEach( item => console.log(item.name));
});

export default App;