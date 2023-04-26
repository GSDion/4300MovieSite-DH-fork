const mongoose = require('mongoose');


const ItemSchema = new mongoose.Schema ({
   title: {
       type: String,
       required: true,
   },
   rating: {
       type: String,
   },
   image: {
       type: String,
   },
   id: {
       type: String,
   },
   review: {
       type: String
   }


});


module.exports = Item = mongoose.model('Item', ItemSchema);
