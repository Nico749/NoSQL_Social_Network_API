const { Schema, Types } = require('mongoose');
const {model} = require('mongoose');
const reactionSchema = require('./Reaction');

const thoughtSchema = new Schema(
  {
   
    thoughtText: {
      type: String,
      required: true,
      maxlength: 280,
      minlength:1
    },
    username: {
      type: String,
      required: true
    },
    
    createdAt: {
      type: Date,
      default: Date.now,
    },
    reactions:[reactionSchema]
  },
  {
    toJSON: {
      getters: true,
    },
    id: false,
  }
);


const Thought = model('thought',thoughtSchema)
//module.exports = thoughtSchema;
module.exports = Thought;
