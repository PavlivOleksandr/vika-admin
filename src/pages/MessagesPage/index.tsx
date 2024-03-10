import React, { useMemo } from 'react';
import { useFetch } from '../../hooks/useFetch';
import { messagesAPI } from '../../api/messages/messagesAPI';
import Box from '../../components/Additional/Box';
import Text from '../../components/Antd/Text';
import Title from '../../components/Antd/Title';
import { Card } from 'antd';

const MessagesPage = () => {
  const { response }: any = useFetch(() => messagesAPI.getMessages());

  const renderMessages = useMemo(() => {
    if (response?.length) {
      return response.map((message: any, index: number) => (
        <Card key={index} title={`Від: ${message.name}`}>
          <>
            <Text>Email: {message.email}</Text>
            <Text>Текст: {message.description}</Text>
          </>
        </Card>
      ));
    } else {
      <Title level={2}> Повідомлень поки немає</Title>;
    }
  }, [response]);

  return <Box>{renderMessages}</Box>;
};

export default MessagesPage;
