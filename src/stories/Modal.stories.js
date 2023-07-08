import { Provider } from "react-redux";
import Modal from "../components/Modal";
import store from "../redux/store";
import styled from "styled-components";

export default {
    title: 'Modal',
    component: Modal,
    argTypes: {
        handleSubmit: {setActive:{action:'clicked'}},

    }
};

const ModalWindow = (arg) => (
<Provider store={store}>
    <Modal {...arg}/>
</Provider>)

export const ModalForm = ModalWindow.bind({});
ModalForm.args = {
    title: '"Форма"',
    active: true,
    setActive: () => {console.log('bton click')},
    handleSubmit: () => {console.log('btn click')}
    
}

