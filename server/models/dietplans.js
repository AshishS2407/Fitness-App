const { Schema } = require('mongoose');
const { model } = require('mongoose');



const dietplanSchema = new Schema({
   dietplanId: { type: String, required: true },
   title: { type: String, required: true },
   plan: { type: String, required: true },
   createdBy: { type: String, required: true },
   content: { type: String, required: true },
   category: { type: String, required: true }


});


const dietplans = model('dietplans', dietplanSchema);

module.exports = dietplans;
