import { Meteor } from 'meteor/meteor';
import { Accounts } from 'meteor/accounts-base'

Meteor.startup(() => {
    process.env.MAIL_URL="smtp://romainaartru%40gmail.com:grominou@smtp.gmail.com:587";
    // need to accept unsecure connection to my address
    Accounts.config({
      sendVerificationEmail: true
    })

    console.info('Meteor settings', Meteor.settings);
    const userId = Accounts.findUserByUsername('toto')._id
    console.log(userId)
    Accounts.sendVerificationEmail(userId)

  });
