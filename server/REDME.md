- Node.js Server Using Exprees.js -
  This project uses the 'yahoo-finance' module to get financial data.
  A Job(using the 'node-schedule' module) runs every 10 seconds (can be changed in the config file)
  to get financial data and a WebSocket server initializes (using socket.io) to push data to all
  clients, every 10 seconds (can be changed in the config file).

- To Run Project:
  1- open terminal
  2- run 'npm install'
  3- then run 'npm start'
