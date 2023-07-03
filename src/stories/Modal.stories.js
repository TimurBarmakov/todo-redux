import { Provider } from "react-redux";
import Modal from "../components/Modal";
import store from "../redux/store";
import styled from "styled-components";


export default {
    title: 'Modal',
    component: Modal,
};

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
export const ModalWindow = () => (
<Provider store={store}> 
    <StyledModal>
        <ModalContent>
            <InputBlock>
                <h1>Форма</h1>
                <input type="text" className="form-control mb-30" placeholder="Введите данные" aria-label="Username" aria-describedby="basic-addon1"
            /></InputBlock>
            <ButtonsBlock>
                <button type="submit" class="btn btn-primary">Ок</button>
                <button type="button" class="btn btn-light">Отмена</button>
                </ButtonsBlock>
        </ModalContent>
    </StyledModal> 
</Provider>)

