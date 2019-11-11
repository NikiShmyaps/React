import React from 'react';
import { Button } from 'reactstrap';
import styled from 'styled-components';
import './post-add-form.css';

const PostDiv = styled.div`
    display: flex;
    margin-top: 20px;
    width: auto;
    flex-grow: 1;
    margin-right: 3px;
`

const PostAddForm = ({onAdd}) => {
    return (
        <PostDiv>
            <input type="text" placeholder="О чем вы думаете сейчас?" className="form-control new-post-label"/>
            <Button color="info" onClick = {()=> onAdd('Hello')}>
                Добавить
            </Button>
        </PostDiv>
    )
}

export default PostAddForm;