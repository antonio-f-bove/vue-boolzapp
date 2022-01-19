new Vue ({
  el: '#app',
  data: {
    contacts: [
      {
        name: 'Michele',
        avatar: '_1',
        visible: true,
        messages: [
          {
            date: '10/01/2020 15:30:55',
            text: 'Hai portato a spasso il cane?',
            status: 'sent'
          },
          {
            date: '10/01/2020 15:50:00',
            text: 'Ricordati di dargli da mangiare',
            status: 'sent'
          },
          {
            date: '10/01/2020 16:15:22',
            text: 'Tutto fatto!',
            status: 'received'
          }
        ],
      },
      {
        name: 'Fabio',
        avatar: '_2',
        visible: true,
        messages: [
          {
            date: '20/03/2020 16:30:00',
            text: 'Ciao come stai?',
            status: 'sent'
          },
          {
            date: '20/03/2020 16:30:55',
            text: 'Bene grazie! Stasera ci vediamo?',
            status: 'received'
          },
          {
            date: '20/03/2020 16:35:00',
            text: 'Mi piacerebbe ma devo andare a fare la spesa.',
            status: 'sent'
          }
        ],
      },
    ],
    currentIndex: 0,
    newMessage: '',
    isAnswered: true,
  },
  methods: {
    inputMessage: function (sender) {
      let newMessageObject = {
        date: '10/01/2020 16:15:22',
        text: this.newMessage,
        status: ''
      };

      if (sender === 'user') {
        newMessageObject.status = 'sent';
        this.isAnswered = false;
      } else {
        newMessageObject.text = 'ok';
        newMessageObject.status = 'received';
      }
      
      this.contacts[this.currentIndex].messages.push(newMessageObject);
      this.newMessage = '';

      if (!this.isAnswered) {
        this.autoAnswer();
      }
    },
    autoAnswer: function () {
      this.isAnswered = true;
      setTimeout(() => {
        this.inputMessage('contact');
      }, 1000);
    }
    // getLastAcces: function () {
    //   let latest = null;
    //   this.contacts.messages.forEach(message => {
    //     // TODO
    //   });
    //   return latest
    // }
  }
})