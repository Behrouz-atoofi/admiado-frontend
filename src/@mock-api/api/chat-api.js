import _ from '@lodash';
import FuseUtils from '@fuse/utils';
import mockApi from '../mock-api.json';
import mock from '../mock';

const contactsDB = mockApi.components.examples.chat_contacts.value;
const userDB = mockApi.components.examples.chat_profile.value;
const userChatListDB = mockApi.components.examples.chat_chats.value;
const messages = mockApi.components.examples.chat_messages.value;
const chatsDB = userChatListDB.map((chat) => ({
  ...chat,
  messages: messages.map((message) => ({
    ...message,
    contactId: message.contactId === '' ? chat.contactId : userDB.id,
  })),
}));

mock.onGet('/api/chat/contacts').reply(() => {
  return [200, contactsDB];
});

mock.onPost(/\/api\/chat\/chats\/[^/]+/).reply(({ url, data: value }) => {


  const newMessage = createNewMessage(value, "training");

  return [200, newMessage];
});

mock.onGet('/api/chat/user').reply((config) => {
  return [200, userDB];
});

function createNewMessage(value, contactId) {
  const message = {
    id: FuseUtils.generateGUID(),
    contactId: userDB.id,
    value,
    createdAt: new Date().toISOString(),
  };

  const selectedChat = _.find(chatsDB, { contactId });
  const userSelectedChat = _.find(userChatListDB, { contactId });

  selectedChat.messages.push(message);
  selectedChat.lastMessage = value;
  selectedChat.lastMessageAt = message.createdAt;
  userSelectedChat.lastMessage = value;
  userSelectedChat.lastMessageAt = message.createdAt;

  return message;
}

