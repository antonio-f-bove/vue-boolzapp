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
    contactIndex: 0,
    messageIndex: -1,
    newMessage: '',
    isAnswered: true,
    nameSearch: '',
    isVisible: true,
  },
  methods: {
    inputMessage: function (sender) {
      let newMessageObject = {
        date: this.whatTimeIsIt(),
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
      
      this.contacts[this.contactIndex].messages.push(newMessageObject);
      this.newMessage = '';

      // se non è un messaggio autogenerato, allora risponde
      if (!this.isAnswered) {
        this.autoAnswer();
      }
    },
    autoAnswer: function () {
      this.isAnswered = true;
      setTimeout(() => {
        this.inputMessage('contact');
      }, 1000);
    },
    filterContacts: function () {
      this.contacts.forEach((contact) => {
       if (contact.name.toLowerCase().includes(this.nameSearch) || this.nameSearch === '') {
          contact.visible = true;
          console.log(contact.visible)
       } else {
         contact.visible = false;
         console.log(contact.visible + '#')
       }
      })         
    }, 
    whatTimeIsIt: function () {
      return dayjs().format('DD/MM/YYYY HH:mm:ss')
    },
    showDropdown: function (index) {
      this.messageIndex = index;
    },
    hideDropdown: function () {
      this.messageIndex = -1;
    },
    deleteMessage: function (index, array) {
      array.splice(index, 1);
      this.messageIndex = -1;
    },
    getLastAccess: function (contact) {
      let latest = null;
      // this.contacts.messages.forEach(message => {
      //   // TODO
      // });
      return latest
    }
  }
})