'use strict'
const request = require('request');
const urlApi = 'http://localhost:3001';
const Telegram = require('telegram-node-bot');
const TelegramBaseController = Telegram.TelegramBaseController;
const TextCommand = Telegram.TextCommand;
const chatbot = new Telegram.Telegram('1141948294:AAEuLFBUlpdgU-TumebDzb87JqAOUHtcErM');


class EventsController extends TelegramBaseController {
  fariamAction(scope) {
    let pathApi = '/fariam'
    let msg = ''

    request.get(`${urlApi}${pathApi}`, (error, response, body) => {
      let min = 0;
      let max = 67;
      let random = Math.floor(Math.random() * (max - min)) + min;
      msg += JSON.parse(body)[random].name;
      scope.sendMessage(msg);
    })
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