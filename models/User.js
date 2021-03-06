const { Schema } = require('mongoose');
const { model } = require('mongoose')
//const thoughtSchema = require('./Thought')
//const reactionSchema = require('./Reaction')

// Schema to create User model
const userSchema = new Schema(
  {
    username: {
      type: String,
      required: true,
      unique: true,
      trim: true
    },
    thoughts: [
      {
        type: Schema.Types.ObjectId,
        ref: 'Thought'
      },
    ],
    email: {
      type: String,
      required: true,
      unique: true,
      validate: {
        validator: function (email) {
          var re = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
          return re.test(email)
        },
        message: mail => `${mail.value} is not a valid mail!`
      },
      match: [/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/, 'Please fill a valid email address']
    },


    friends: [
      {
        type: Schema.Types.ObjectId,
        ref: 'User'
      },]
  },
  {
    toJSON: {
      getters: true,
    },
  },
  {
    toJSON: {
      virtuals: true,
    },
    id: false,
  }
);


// Create a virtual property `commentCount` that gets the amount of comments per post
userSchema.virtual('friendCount').get(function () {
  return this.friends.length;
});

const User = model('user', userSchema);

module.exports = User;
