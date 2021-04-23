const mongoose = require('mongoose')
const { Schema } = mongoose;

const userSchema = Schema({

    UserName:{
        type: Schema.Types.String,
        required: true,
      },
    
    Password:{
        type: Schema.Types.String,
        required: true,
      },

      UserID:{
        type: Schema.Types.Number,
        required: true,
      },
      
    Movie:[{
        type: Schema.Types.String,
        required: false,
    }],

    Food:{
        type: Schema.Types.String,
        required: false,
    },

    Session:{
      type: Schema.Types.String,
      required: false,
    },

    Location:{
      lng: {
        type: Schema.Types.Number,
        required: true,
      },
      lat: {
        type: Schema.Types.Number,
        required: true,
      },
  }


})
module.exports = mongoose.model('user_structure',userSchema)