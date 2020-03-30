'use strict'
const Telegram = require('telegram-node-bot');
const TelegramBaseController = Telegram.TelegramBaseController;
const TextCommand = Telegram.TextCommand;
const chatbot = new Telegram.Telegram('1141948294:AAEuLFBUlpdgU-TumebDzb87JqAOUHtcErM');

const persons = [
  {
    name: 'off: camila?',
  },
  {
    name: 'off: Zoë Kravitz?',
  },
  {
    name: 'off: dede?',
  },
  {
    name: 'off: Jamie Dornan?'
  },
  {
    name: 'off: mat?',
  },
  {
    name: 'off: Henry Cavill?',
  },
  {
    name: 'off: roger?',
  },
  {
    name: 'off: Lula?',
  },
  {
    name: 'off: Dua Lipa?',
  },
  {
    name: 'off: arthur?',
  },
  {
    name: 'off: Pabllo Vittar?',
  },
  {
    name: 'off: thaina?',
  },
  {
    name: 'off: bailey may?',
  },
  {
    name: 'off: lucas?',
  },
  {
    name: 'off: Idris Elba?'
  },
  {
    name: 'off: mathews?',
  },
  {
    name: 'off: bea de manaus?',
  },
  {
    name: 'off: dana?',
  },
  {
    name: 'off: David Beckham?'
  },
  {
    name: 'off: bernardo?',
  },
  {
    name: 'off: vic fã de kpop?',
  },
  {
    name: 'off: Carlisle Cullen?',
  },
  {
    name: 'off: ana paula?',
  },
  {
    name: 'off: Madonna?',
  },
  {
    name: 'off: tabata?',
  },
  {
    name: 'off: milene?',
  },
  {
    name: 'off: Ryan Gosling?',
  },
  {
    name: 'off: quezinha?',
  },
  {
    name: 'off: marco?',
  },
  {
    name: 'off: Ryan Reynolds?',
  },
  {
    name: 'off: gabi?',
  },
  {
    name: 'off: Robert Pattinson?',
  },
  {
    name: 'off: brenda?',
  },
  {
    name: 'off: Sebastian Stan?',
  },
  {
    name: 'off: bea fã do miranha?',
  },
  {
    name: 'off: Bradley Cooper?',
  },
  {
    name: 'off: bea larry shipper?',
  },
  {
    name: 'off: marcelo?',
  },
  {
    name: 'off: Jake Gyllenhaal?',
  },
  {
    name: 'off :joão?',
  },
  {
    name: 'off: Ivete Sangalo?',
  },
  {
    name: 'off: carol?',
  },
  {
    name: 'off: Pharrell Williams?',
  },
  {
    name: 'off: bibika?',
  },
  {
    name: 'off: Jason Momoa?',
  },
  {
    name: 'off: julia?',
  },
  {
    name: 'off: Hugh Jackman?',
  },
  {
    name: 'off: roberta?',
  },
  {
    name: 'off: Zac Efron?',
  },
  {
    name: 'off: George Clooney?',
  },
  {
    name: 'off: Harry Judd?',
  },
  {
    name: 'off: Gary Barlow?',
  },
  {
    name: 'off: Gerard Butler?',
  },
  {
    name: 'off: James Franco?',
  },
  {
    name: 'off: Taylor Lautner?',
  },
  {
    name: 'off: Brad Pitt?',
  },
  {
    name: 'off: Orlando Bloom?',
  },
  {
    name: 'off: Justin Timberlake?',
  },
  {
    name: 'off: Olly Murs?',
  },
  {
    name: 'off: Tinie Tempah?',
  },
  {
    name: 'off: Anthony Joshua?',
  },
  {
    name: 'off: bruno?',
  },
  {
    name: 'off: victor?',
  },
  {
    name: 'off: thay?',
  },
  {
    name: 'off: luísa?',
  },
  {
    name: 'off: millie?',
  },
  {
    name: 'off: Faustão?',
  },
  {
    name: 'off: julia conífera?',
  },
  {
    name: 'on: o bot?',
  },
]

class EventsController extends TelegramBaseController {
  fariamAction(scope) {
    let msg = '';
    let min = 0;
    let max = 69;
    let random = Math.floor(Math.random() * (max - min)) + min;

    msg += persons[random].name;

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