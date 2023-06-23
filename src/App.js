import React, { Component,useState,setState } from "react";
import styled from "styled-components";
import { SnackbarProvider, enqueueSnackbar } from 'notistack';
import Modal from "./components/Modal";
import { useDispatch,useSelector } from "react-redux";
import Deletion from "./components/Deletion";
import { RemoveTodoAction, getUsersFetch } from "./redux/actions/TodoActions";
import ListEntry from "./components/ListEntry";
import axios from "axios";
import { useQuery } from "react-query";

const AppWrapper = styled.div `
width:100%;
min-height: 100vh;
padding: 100px 200px;
// background: black;
color:black;
`

const List = styled.div `
display:flex;
width:100%
padding-left:0;
align-items:center;
margin-top:20px;
margin-bottom:20px;
`
async function fetchCoins() {
  const { data } = await axios({
    url: "https://graphqlzero.almansi.me/api",
    method: "post",
    data: {
      query: `{
        user(id: 1) {
          id
          name
          username
          email
        }
      }`
    }
  }
    
  );

  return data;
}

function App () {
  const [modalActive, setModalActive] = useState(true)
  const [deletionActive, setDeletionActive] = useState(false)

  const dispatch = useDispatch()
  const todoes = useSelector(state => state.Todo.todos)
  console.log(todoes)

  const users = useSelector(state => state.Data.users.data)
  console.log(users)

  const [products,setProducts] = useState([
    {label:'Запись 1', id: 1},
    {label:'Запись 2', id: 2},
    {label:'Данные 3', id: 3},
    {label:'Данные 4', id: 4}
    ])

  const {data, isLoading, isError} = useQuery('coins',fetchCoins);

  console.log(data)

  if (isLoading) {
    return <h3>Идет загрузка</h3>
  }

  if (isError) {
    return <h3>Ошибка при получении данных</h3>
  }

  if (!data) {
    return <h3>Нет данных</h3>
  }


  const handleDeleteItem = (id) => {
    console.log("Deleted id",id);
    setProducts((prevState) => {
      const idx = prevState.findIndex((item) => item.id === id)
      return [...prevState.slice(0,idx), ...prevState.slice(idx + 1)]
    })
  } 

  const addTask = (userInput) => {
    if(userInput) {
      const newItem = {
        id: Math.random().toString(36).substr(2,9),
        label: userInput
      }
      setProducts([...products,newItem])
    }
  }

  const removeHandler = (t) => {
    dispatch(RemoveTodoAction(t));
  }
  
  return (
      <AppWrapper>
      <div className="container pt-3">
        <div className="row">
          <h1>Test Work</h1>
          <h2>Ввод данных</h2>
          <div className="col">
          </div>
        </div>
        <div className="row">
          <button type="button" className="btn btn-light" onClick={() => (setModalActive(true), dispatch(getUsersFetch()))}>Добавить</button>

          <List>
          <ListEntry 
            addTask = {addTask}
            todos = {todoes}
            onDeleted= {handleDeleteItem}
            setDeletionActive={setDeletionActive}
            removeHandler={removeHandler}
            active={deletionActive}
            setActive={setDeletionActive}
          />
          </List>
          <SnackbarProvider />
          <button type="button" className="btn btn-primary" onClick={() => {enqueueSnackbar(`Имя: ${data.data.user.name} / Username: ${data.data.user.username} / Email: ${data.data.user.email}`) }}>Тест GraphQL</button>
        </div>
        <Modal 
          active={modalActive} 
          setActive={setModalActive}
          addTask={addTask}
          todos={products}/>

          
      </div>
      </AppWrapper>
      
    );
  }
  
export default App;
