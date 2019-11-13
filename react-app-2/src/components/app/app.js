import React, {Component} from 'react';
import {Col, Row, Container} from 'reactstrap';
import Header from '../header';
import RandomChar from '../randomChar';
import ItemList from '../itemList';
import CharDetails from '../charDetails';
import gotService from '../../services/gotService.js';
import './app.sass';


export default class App extends Component {
    constructor (props) {
        super(props);
        this.state = {
            randomChar: true
        };
        this.toggleRandomChar = this.toggleRandomChar.bind(this);
    }    

    toggleRandomChar() {
        const {randomChar} = this.state;
        this.setState({randomChar: !randomChar});
    }

    render() {
        const service = new gotService();

        const {randomChar} = this.state;
        const buttonText = randomChar ? "Hide Random Character" : "Show Random Character";
        const content = randomChar ? <RandomChar/> : null;

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

        service.getAllHauses().then(res => {
            console.log(`All houses:`);
            console.log(res);
        });

        service.getAllHauses().then(res => {
            console.log(`Title of each house:`);
            res.forEach( item => console.log(item.name));
        });

        return (
            <> 
                <Container>
                    <Header />
                </Container>
                <Container>
                    <Row>
                        <Col lg={{size: 5, offset: 0}}>
                            <div className="random-char">
                                <button className="random-char__button" onClick={this.toggleRandomChar}>{buttonText}</button>
                                {content}
                            </div>
                            
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
    }
}