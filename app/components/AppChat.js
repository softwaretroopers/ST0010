import React, { useState, useCallback, useEffect } from "react";
import { TouchableOpacity } from "react-native";
import { GiftedChat } from "react-native-gifted-chat";
import colors from "../configs/colors";
import Icon from "./Icon";

export function AppChat() {
  const [messages, setMessages] = useState([]);

  useEffect(() => {
    setMessages([
      {
        _id: 1,
        text: "Hello patient",
        createdAt: new Date(),
        user: {
          _id: 2,
          name: "Ayushaadhi",
          avatar: "",
        },
      },
    ]);
  }, []);

  const onSend = useCallback((messages = []) => {
    setMessages((previousMessages) =>
      GiftedChat.append(previousMessages, messages)
    );
  }, []);

  return (
    <GiftedChat
      messages={messages}
      onSend={(messages) => onSend(messages)}
      user={{
        _id: 1,
      }}
      renderActions={() => (
        <React.Fragment>
          <TouchableOpacity style={{ marginLeft: 5, padding: 5 }}>
            <Icon
              backgroundColor={colors.patientPrimary}
              iconColor="white"
              name="plus"
            />
          </TouchableOpacity>
        </React.Fragment>
      )}
    />
  );
}
