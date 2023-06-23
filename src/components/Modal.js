import { useState } from "react";
import React from "react";
import styled from "styled-components";
import { useDispatch,useSelector } from "react-redux";
import { AddTodoAction } from "../redux/actions/TodoActions";


const StyledModal = styled.div `
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

const ModalContent = styled.div `
padding: 20px;
border-radius:12px;
background-color:white;
heigth: 200px;
width:500px;
`
const InputBlock = styled.div `
margin-bottom: 15px;
margin-top:15px;
`
const ButtonsBlock = styled.div `
display:flex;
align-items:center;
justify-content:flex-end;
`

const Modal = ({active, setActive,setTodoess,addTask,updateData}) => {
    const [userInput,setUserInput] = useState('')

    const [todo,setTodo] = useState();
    const dispatch = useDispatch();
    const Todo = useSelector((state) => state.Todo);
    const { todos } = Todo;



    // const handleChange = (e) => {
    //     setUserInput(e.currentTarget.value)
    // }

    const handleSubmit = (e) => {
        e.preventDefault()
        addTask(userInput)
        dispatch(AddTodoAction(todo))
        setActive(false)
    }

    const handleKeyPress = (e) => {
        if(e.key === "Enter") {
            handleSubmit(e)
        }
    }


    return (
        <StyledModal style={{transform: active ? 'scale(1)' : 'scale(0)' }}>
            <ModalContent  >
                <InputBlock>
                <form onSubmit={handleSubmit}>
                <h1>Форма</h1>
                <input type="text" className="form-control mb-30" placeholder="Введите данные" aria-label="Username" aria-describedby="basic-addon1"
                // value={userInput}
                onChange={(e) => setTodo(e.target.value)}  
                onKeyDown={handleKeyPress}
                />
                </form>
                </InputBlock>
                
            <ButtonsBlock>
                <button type="submit" class="btn btn-primary" onClick={handleSubmit}>Ок</button>
                <button type="button" class="btn btn-light" onClick={() => setActive(false)} >Отмена</button>
            </ButtonsBlock>
            </ModalContent>
        </StyledModal>


        
    );
};

export default Modal;