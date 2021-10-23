import React, { useState, useEffect } from 'react';
import { ScrollView } from 'react-native';
import { api } from '../../services';
import { io } from 'socket.io-client';

import { Message, MessageProps } from '../Message';
import { styles } from './styles';

const messageQueue: MessageProps[] = []

const socket = io(String(api.defaults.baseURL))
socket.on('new_message', (newMessage) => {
  messageQueue.push(newMessage)
})

export function MessageList() {
  const [currentMessage, setCurrentMessage] = useState<MessageProps[]>([])

  useEffect(() => {
    const timer = setInterval(() => {
      if (messageQueue.length > 0) {
        setCurrentMessage(prevState => [
          messageQueue[0],
          prevState[0],
          prevState[1]
        ].filter(Boolean))

        messageQueue.shift()
      }
    }, 3000)
    return () => clearInterval(timer)
  }, [])

  useEffect(() => {

    async function fetchMessages() {
      const messageResponse = await api.get<MessageProps[]>('/messages/last3')
      setCurrentMessage(messageResponse.data)
    }
    fetchMessages()
  }, [])
  return (
    <ScrollView
      style={styles.container}
      contentContainerStyle={styles.content}
      keyboardShouldPersistTaps='never'
    >
      {currentMessage.map((message) => <Message key={message.id} data={message} />)}

    </ScrollView>
  );
}