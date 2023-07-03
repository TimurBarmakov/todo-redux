import { Provider } from "react-redux";
import Deletion from "../components/Deletion";
import store from "../redux/store";
import styled from "styled-components";

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

export default {
    title: 'Modal',
    component: Deletion,
};

export const DeletionWindow = () => (
    <Provider store={store}>
        <StyledDeletion>
        <DeletionContent  >
                <h3>Действительно хотите удалить выбранную запись?</h3>
            <ButtonsBlock>
                <button type="button" class="btn btn-primary" >Да</button>
                <button type="button" class="btn btn-light" >Нет</button>
            </ButtonsBlock>
            </DeletionContent>
        <Deletion/>
        </StyledDeletion>
    </Provider>
    
)

