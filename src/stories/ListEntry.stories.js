import React from "react";
import { Provider, useDispatch } from "react-redux";
import ListEntry from "../components/ListEntry";
import store from "../redux/store";
import styled from "styled-components";

export default {
    title: 'Modal',
    component: ListEntry,
    decorators: [
        (Story) => (
            <Provider store={store}>
                <Story/>
            </Provider>
        ),
    ],
};

export const ListEntryWindow = (arg) => <ListEntry {...arg}/>

// export const ListEntryWindow = (arg) => (
//     <Provider store={store}>
//                 <ListEntry {...arg}/>
//     </Provider>
// )

