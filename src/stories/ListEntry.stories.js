import { Provider, useDispatch } from "react-redux";
import store from "../redux/store";
import styled from "styled-components";
import ListEntry from "../components/ListEntry";

export default {
    title: 'Modal',
    component: ListEntry,
    // decorators: [
    //     story => <Provider store={store}>{story()}</Provider>
    // ]
};

export const ListEntryWindow = (arg) => (
    <Provider store={store}>
                <ListEntry {...arg}/>
    </Provider>
)

