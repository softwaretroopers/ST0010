import React, { useState, useCallback, useEffect } from "react";
import { IconButton } from "react-native-paper";
import { GiftedChat, InputToolbar, Composer } from "react-native-gifted-chat";
import RenderIf from "./RenderIf";
import { View } from "react-native";

export function AppChat({
  containerStyle,
  iconStyle,
  iconName,
  iconColor,
  composerDisability,
  composerPlaceholder,
}) {
  const [messages, setMessages] = useState([]);
  const customInputToolbar = (props) => {
    return <InputToolbar {...props} containerStyle={containerStyle} />;
  };
  const customComposer = (props) => {
    return <Composer {...props} placeholder={composerPlaceholder} />;
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
      renderComposer={customComposer}
      disableComposer={composerDisability}
      renderInputToolbar={(props) => customInputToolbar(props)}
      renderActions={() => (
        <View>
          {RenderIf(
            !composerDisability,
            <IconButton
              icon={iconName}
              color={iconColor}
              size={25}
              onPress={() => console.log("Pressed")}
              style={iconStyle}
            />
          )}
        </View>
      )}
    />
  );
}
