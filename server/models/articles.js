const {Schema} =require('mongoose');
const {model} =require('mongoose');

const articleSchema = new Schema({
   articleId: { type: String, required: true },
   title: { type: String, required: true },
   description: { type: String, required: true },
   createdBy: { type:String, required :true },
   content : {type: String, required: true},
   category: { type: String, required: true }

});

const articles = model('articles', articleSchema);

module.exports = articles;
