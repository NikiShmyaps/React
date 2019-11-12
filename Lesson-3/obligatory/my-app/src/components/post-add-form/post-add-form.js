import React, {Component} from 'react';
import { Button } from 'reactstrap';
import styled from 'styled-components';
import './post-add-form.css';

const PostForm = styled.form`
    display: flex;
    margin-top: 20px;
    width: auto;
    flex-grow: 1;
    margin-right: 3px;
`

export default class PostAddForm extends Component{
    constructor(props) {
        super(props);
        this.state = {
            text: ''
        }
        this.onValueChange = this.onValueChange.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
    }

    onValueChange(event){
        this.setState({
            text: event.target.value
        });
    }

    onSubmit(event) {
        event.preventDefault();
        if(this.state.text.length>0){
           this.props.onAdd(this.state.text);
           this.setState({
                text: ''
           });
        } else {
            alert(`Введите текст в поле для ввода`)
        }
    }

    render() {
        return (
            <PostForm onSubmit={this.onSubmit}>
                <input type="text" placeholder="О чем вы думаете сейчас?" className="form-control new-post-label" onChange={this.onValueChange} value={this.state.text}/>
                <Button color="info">
                    Добавить
                </Button>
            </PostForm>
        )
    }
    
}