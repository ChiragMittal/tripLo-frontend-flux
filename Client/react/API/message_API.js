var FluxCartActions = require('../Actions/message_actions');
var ServerActions = require('../Actions/server_actions');


module.exports={

     retrieveMessage: function(message,target,token){
     	var message=[
            {
                key : 1,
                username: 'chirag',
                message : "Hello how r u"
            },

            {
              key : 2,
              username: 'chirag',
              message : "Blaaaaa"
            },

            {
              key : 3,
              username: 'chirag',
              message : "Hello h"
            }
      ];

      ServerActions.recieveInitialMessage(message);


     },

     recieveUsername : function(username){
      var users = [
        {
          key : 10,
          username : 'chirag'
        },
        {
          key : 11 , 
          username : 'ali'
        },
        {
          key : 12 ,
          username : 'manish'
        }
      ];

       FluxCartActions.showList(username);

     },





     }
