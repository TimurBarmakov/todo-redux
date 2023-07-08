import { Provider } from "react-redux";
import Deletion from "../components/Deletion";
import store from "../redux/store";
import styled from "styled-components";


export default {
    title: 'Modal',
    component: Deletion,
};

const DeletionWindow  = (arg) => (
    <Provider store={store}>
        <Deletion {...arg} />
    </Provider>
    
)

export const DeletionForm = DeletionWindow.bind({});

DeletionForm.args = {
    active: true,
    setActive: () => {console.log('bton click')},
    removeHandler: () => {console.log('btn click')}
}

