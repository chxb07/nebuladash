import React, { useState } from 'react';
import { MessageSquare, Send, Search, MoreVertical } from 'react-feather';

const Messages = () => {
  const [selectedMessage, setSelectedMessage] = useState(null);

  const messages = [
    { id: 1, sender: 'Cherif Bourechache', subject: 'Welcome to NebulaDash', preview: 'Thank you for joining our platform...', time: '2h ago', unread: true },
    { id: 2, sender: 'Support Team', subject: 'Your account has been verified', preview: 'We have successfully verified your account...', time: '1d ago', unread: false },
    { id: 3, sender: 'Jane Smith', subject: 'Project update', preview: 'Here is the latest update on our project...', time: '2d ago', unread: false },
  ];

  return (
    <div className="flex-1 overflow-y-auto p-6">
      <div className="max-w-8xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-6">
          <h1 className="text-2xl font-bold text-gray-900 dark:text-white">Messages</h1>
          <button className="flex items-center space-x-1 bg-cosmic-500 hover:bg-cosmic-600 text-white px-4 py-2 rounded-lg transition mt-4 md:mt-0">
            <Send size={16} />
            <span>New Message</span>
          </button>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <div className="lg:col-span-1 bg-white dark:bg-gray-800 rounded-xl shadow-sm p-5 card-hover">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white">Inbox</h3>
              <div className="relative">
                <Search size={16} className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                <input
                  type="text"
                  placeholder="Search messages..."
                  className="pl-10 pr-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-cosmic-500 text-sm"
                />
              </div>
            </div>

            <div className="space-y-2">
              {messages.map((message) => (
                <div
                  key={message.id}
                  onClick={() => setSelectedMessage(message)}
                  className={`p-3 rounded-lg cursor-pointer transition ${
                    selectedMessage?.id === message.id
                      ? 'bg-cosmic-50 dark:bg-gray-700 border border-cosmic-200 dark:border-gray-600'
                      : 'hover:bg-gray-50 dark:hover:bg-gray-700'
                  } ${message.unread ? 'bg-blue-50 dark:bg-gray-700' : ''}`}
                >
                  <div className="flex items-center justify-between mb-1">
                    <h4 className={`text-sm font-medium ${message.unread ? 'text-gray-900 dark:text-white' : 'text-gray-600 dark:text-gray-300'}`}>
                      {message.sender}
                    </h4>
                    <span className="text-xs text-gray-500 dark:text-gray-400">{message.time}</span>
                  </div>
                  <h5 className={`text-sm font-medium mb-1 ${message.unread ? 'text-gray-900 dark:text-white' : 'text-gray-700 dark:text-gray-300'}`}>
                    {message.subject}
                  </h5>
                  <p className="text-xs text-gray-500 dark:text-gray-400 truncate">{message.preview}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="lg:col-span-2 bg-white dark:bg-gray-800 rounded-xl shadow-sm p-5 card-hover">
            {selectedMessage ? (
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 dark:text-white">{selectedMessage.subject}</h3>
                    <p className="text-sm text-gray-600 dark:text-gray-300">From: {selectedMessage.sender}</p>
                  </div>
                  <button className="text-gray-500 dark:text-gray-400 hover:text-cosmic-600 dark:hover:text-cosmic-400">
                    <MoreVertical size={16} />
                  </button>
                </div>
                <div className="prose dark:prose-invert max-w-none">
                  <p className="text-gray-700 dark:text-gray-300">
                    {selectedMessage.preview}
                  </p>
                  <p className="text-gray-700 dark:text-gray-300 mt-4">
                    This is a sample message content. In a real application, this would contain the full message body with proper formatting and attachments.
                  </p>
                </div>
              </div>
            ) : (
              <div className="flex items-center justify-center h-64">
                <div className="text-center">
                  <MessageSquare size={48} className="text-gray-400 dark:text-gray-600 mx-auto mb-4" />
                  <h3 className="text-lg font-medium text-gray-900 dark:text-white mb-2">Select a message</h3>
                  <p className="text-gray-500 dark:text-gray-400">Choose a message from the list to view its contents</p>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Messages;