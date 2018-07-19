import { Meteor } from 'meteor/meteor';
import { Accounts } from 'meteor/accounts-base'

Meteor.startup(() => {

    process.env.MAIL_URL="smtp://romainaartru%40gmail.com:grominou@smtp.gmail.com:587";
    process.env.MAIL_URL="smtp://artruromain%40hotmail.fr:Grominou96@smtp.outlook.com:457";
    // need to accept unsecure connection to my address
    Accounts.config({
      sendVerificationEmail: true
    })
    console.log(Meteor.users.find({}).fetch().map(x => x.emails))

    console.info('Meteor settings', Meteor.settings);
    // const userId = Accounts.findUserByUsername('toto')._id
    // Accounts.sendVerificationEmail(userId)
  });

Meteor.methods({
  'user.signin': function(username,mail,password){
    Accounts.createUser({username, mail, password})

  },
  'user.login': function(username, password){
    const user = Meteor.users.findOne({username})
    console.log(user)
  }
})

Meteor.publish('groups', function() {
  if(!this.userId) return [];
  var user = Meteor.users.findOne(this.userId);
  return user.emails[0]
 /* use user.emails[0].address to search for and return the right groups */
});
