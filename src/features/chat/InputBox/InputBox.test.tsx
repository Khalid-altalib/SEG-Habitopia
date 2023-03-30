import React from "react";
import { fireEvent, render, waitFor } from "@testing-library/react-native";
import configureStore from "redux-mock-store";
import thunk from "redux-thunk";
import InputBox from "./InputBox";
import TestingWrapper from "@app/testingWrapper";
import chatMockState from "../chatMockState";


describe('InputBox_function', () => {

    
    // Clears the actions dispatched by the mock store after each test.
    afterEach(() => { mockStore.clearActions(); });

    const mockState = {chat: chatMockState,};
    // create a mock Redux store with the mock state and middleware
    const mockStore = configureStore([thunk])(mockState);

    
    // Tests that the onsubmit function is called with a non-empty message and the form is reset correctly. tags: [happy path]
    it("dispatchs the sendMessage action with the correct payload when the user prompts it", async () => {
        const wrapper = render(
            <TestingWrapper store={mockStore}>
              <InputBox chatRoomID={"chat-1"} />
            </TestingWrapper>
        );
        
        const input = wrapper.getByPlaceholderText("Chat")
        fireEvent.changeText(input, "Hello World");
        fireEvent(input, 'submitEditing');
    
        await waitFor(() => {
            const actions = mockStore.getActions();
            expect(actions[0].type).toEqual("messages/send/pending");
            expect(actions[0].meta.arg.chatRoomID).toEqual("chat-1");
            expect(actions[0].meta.arg.message).toEqual("Hello World");
        });
    });
    
    
    // Tests that the onsubmit function is not called with an empty message and the form is not reset. tags: [happy path]
    it("doesn't send empty messages", async () => {
        
        const wrapper = render(
            <TestingWrapper store={mockStore}>
              <InputBox chatRoomID={"chat-1"} />
            </TestingWrapper>
        );
        
        const input = wrapper.getByPlaceholderText("Chat")
        fireEvent.changeText(input, "");
        fireEvent(input, 'submitEditing');
    
        await waitFor(() => {
            const actions = mockStore.getActions();
            expect(actions.length).toEqual(0);
            expect(actions).toEqual([]);
        });
    });

    // Tests that the makecheckin function is called when the check-in button is pressed. tags: [happy path]
    it("should dispatch the makeCheckin action when the button is pressed", async () => {
        const wrapper = render(
            <TestingWrapper store={mockStore}>
              <InputBox chatRoomID={"chat-1"} />
            </TestingWrapper>
        );
        
        const checkInButton = wrapper.getByRole('button')
        fireEvent.press(checkInButton);
        await waitFor(() => {
            const actions = mockStore.getActions();
            expect(actions[0].type).toEqual("checkIn/send/pending");
            expect(actions[0].meta.arg).toEqual("chat-1");
        });
    });

});
