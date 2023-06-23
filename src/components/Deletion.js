import React from "react";
import styled from "styled-components";
import { useDispatch } from "react-redux";
import { RemoveTodoAction } from "../redux/actions/TodoActions";





const StyledDeletion = styled.div `
height: 100vh;
width: 100vw;
background-color: rgba(0,0,0,0.4);
position: fixed;
top: 0;
left: 0;
color:black;
display:flex;
align-items:center;
justify-content:center;
transform:scale(1);

`

const DeletionContent = styled.div `
padding: 20px;
border-radius:12px;
background-color:white;
heigth: 200px;
width:500px;
`

const ButtonsBlock = styled.div `
display:flex;
align-items:center;
justify-content:flex-end;
`


const Deletion = ({todo,t, active, setActive,removeHandler}) => {
    const dispatch = useDispatch()
    console.log(t)
    


    return (
        <StyledDeletion style={{transform: active ? 'scale(1)' : 'scale(0)' }}>
            <DeletionContent  >
                <h3>Действительно хотите удалить выбранную запись?</h3>
            <ButtonsBlock>
                <button type="button" class="btn btn-primary"onClick={() => {removeHandler(t); setActive(false)}} >Да</button>
                <button type="button" class="btn btn-light" onClick={() => (setActive(false))} >Нет</button>
            </ButtonsBlock>
            </DeletionContent>
        </StyledDeletion>
    );
    
};


export default Deletion;