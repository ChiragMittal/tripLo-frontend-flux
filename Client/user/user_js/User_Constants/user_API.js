var FluxCartActions = require('../User_Actions/user_actions');


// function sleep(milliseconds) {
//   var start = new Date().getTime();
//   for (var i = 0; i < 1e7; i++) {
//     if ((new Date().getTime() - start) > milliseconds){
//       break;
//     }
//   }
// }

module.exports={

     retrieveInfo: function(username,target,token){
     	var user={
        username: '@Cmittal',
        picpath: '../../public/img/13332864_10206800296946966_2355546499428281173_n.jpg',
        fname : 'Chirag',
        lname : 'Mittal',
        dob : '11-March-1997',
        info : 'Blaaaaaaaaaa',
        follow_count : 10,
        following_count : 10,
        favourites_count : 10,
        destination_categories : ['Delhi','Mumbai']
       }

       //sleep(5000);

      FluxCartActions.recieveInfo(user);


     },

     retrievePost:function(username,target,token,start){
        var post=[
    {
      id: 88,
      post: "The trip could have been better if more people are going 😞",
      type: 0,
      pic: null,
      username: "admin21",
      created_at: "2017-01-12T17:53:38.000Z",
      updated_at: "0000-00-00 00:00:00",
      public_bool: 1,
      foreignId: null,
      foreignContent: null,
      placeTypeTag: "country",
      placeKeyTag: "India"
    },
    {
      id: 87,
      post: "The trip to Manali was AWESOME!!!",
      type: 0,
      pic: null,
      username: "admin21",
      created_at: "2017-01-12T17:53:08.000Z",
      updated_at: "0000-00-00 00:00:00",
      public_bool: 1,
      foreignId: null,
      foreignContent: null,
      placeTypeTag: "country",
      placeKeyTag: "India"
    },
    {
      id: 85,
      post: "blablabla",
      type: 0,
      pic: null,
      username: "admin21",
      created_at: "2017-01-07T03:12:31.000Z",
      updated_at: "0000-00-00 00:00:00",
      public_bool: 1,
      foreignId: null,
      foreignContent: null,
      placeTypeTag: "country",
      placeKeyTag: "India"
    },
    {
      id: 84,
      post: "blablabla",
      type: 0,
      pic: null,
      username: "admin21",
      created_at: "2017-01-07T03:12:30.000Z",
      updated_at: "0000-00-00 00:00:00",
      public_bool: 1,
      foreignId: null,
      foreignContent: null,
      placeTypeTag: "country",
      placeKeyTag: "India"
    },
    {
      id: 83,
      post: "blablabla",
      type: 0,
      pic: null,
      username: "admin21",
      created_at: "2017-01-07T03:12:29.000Z",
      updated_at: "0000-00-00 00:00:00",
      public_bool: 1,
      foreignId: null,
      foreignContent: null,
      placeTypeTag: "country",
      placeKeyTag: "India"
    },
    {
      id: 82,
      post: "blablabla",
      type: 0,
      pic: null,
      username: "admin21",
      created_at: "2017-01-07T03:11:43.000Z",
      updated_at: "0000-00-00 00:00:00",
      public_bool: 1,
      foreignId: null,
      foreignContent: null,
      placeTypeTag: "country",
      placeKeyTag: "India"
    },
    {
      id: 81,
      post: "blablabla",
      type: 0,
      pic: null,
      username: "admin21",
      created_at: "2017-01-07T03:11:08.000Z",
      updated_at: "0000-00-00 00:00:00",
      public_bool: 1,
      foreignId: null,
      foreignContent: null,
      placeTypeTag: "country",
      placeKeyTag: "India"
    }
      ];

      FluxCartActions.loadPost(post);
        
     }

}