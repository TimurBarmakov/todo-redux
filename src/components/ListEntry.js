import React from "react";
import styled from "styled-components";
import Deletion from "./Deletion";
import { useSelector } from "react-redux";
import { useState } from "react";

const ListLi = styled.li `
    display:flex;
    margin-bottom:25px;
    justify-content:space-between;
    `

const BtnDelete = styled.div `
    padding-left:50px
    `
    
const ListEntry = ({ products,todos,active,setActive,onDeleted,handleToggle,removeTask, setDeletionActive,removeHandler}) => {

    // const todoes = useSelector(state => state.todos)
    // const dispatch = useDispatch()
    const els = useSelector(state => state.Todo.todos)
    const [selectedEntry, setSelectedEntry] = useState()
    const elements = els.map((t) => {

        return (
            <>
            <ListLi key={t.id} onClick={() => (setSelectedEntry(t))}>
                <span>{t.todo}</span>
                <BtnDelete key={t.id}>
                    <button type="button" class="btn btn-outline-danger btn-sm" onClick={() => (setDeletionActive(true))} >Удалить</button>
                </BtnDelete>
            </ListLi>
                
            </>
            
        );
    });
    

    
    return (
        <>
            <ul>
                {elements} 
            </ul>
            
            <Deletion 
                    t={selectedEntry}
                    removeHandler={removeHandler}
                    active={active}
                    setActive={setActive} 
            />

        </>
    )
}



export default ListEntry;
