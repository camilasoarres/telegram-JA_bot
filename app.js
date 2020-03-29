'use strict'
// const request = require('request');
// const port = 'http://localhost:3001';
// let port = process.env.PORT;
// if (port == null || port == "") {
//   port = 8000;
// }
// app.listen(port);
const Telegram = require('telegram-node-bot');
const TelegramBaseController = Telegram.TelegramBaseController;
const TextCommand = Telegram.TextCommand;
const chatbot = new Telegram.Telegram('1141948294:AAEuLFBUlpdgU-TumebDzb87JqAOUHtcErM');


class EventsController extends TelegramBaseController {
  fariamAction(scope) {
    // let pathApi = '/fariam'
    let msg = 'oie'

    // request.get(`${port}${pathApi}`, (error, response, body) => {
    //   let min = 0;
    //   let max = 67;
    //   let random = Math.floor(Math.random() * (max - min)) + min;
    //   msg += JSON.parse(body)[random].name;
    //   scope.sendMessage(msg);
    // })
    scope.sendMessage(msg);
  } 
  get routes() {
    return {
      'fariam': 'fariamAction'
    }
  }
}

chatbot.router.when(
  new TextCommand('/fariam', 'fariam'), new EventsController()
);