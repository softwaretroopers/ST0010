import React, { useState, useCallback, useEffect } from "react";
import { TouchableOpacity } from "react-native";
import { GiftedChat, InputToolbar, Composer } from "react-native-gifted-chat";
import colors from "../configs/colors";
import Icon from "./Icon";

export function AppChat() {
  const [messages, setMessages] = useState([]);
  const customtInputToolbar = (props) => {
    return (
      <InputToolbar
        {...props}
        containerStyle={{
          backgroundColor: colors.themeDark,
        }}
      />
    );
  };
  const customtComposer = (props) => {
    return <Composer {...props} placeholder={"Upload Your Prescription"} />;
  };

  useEffect(() => {
    setMessages([
      {
        _id: 1,
        text: "Hello patient",
        createdAt: new Date(),
        user: {
          _id: 2,
          name: "Ayushaadhi",
          avatar: require("../assets/logo.png"),
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
      renderComposer={customtComposer}
      disableComposer={true}
      renderInputToolbar={(props) => customtInputToolbar(props)}
      renderActions={() => (
        <React.Fragment>
          <TouchableOpacity style={{ marginLeft: 5, padding: 5 }}>
            <Icon
              backgroundColor={colors.themeMedium}
              iconColor={colors.themeLight}
              name="plus"
            />
          </TouchableOpacity>
        </React.Fragment>
      )}
    />
  );
}
