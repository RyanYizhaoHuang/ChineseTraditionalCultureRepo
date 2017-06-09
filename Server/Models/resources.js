// resources collection schema

let mongoose = require('mongoose');

// single resource schema
let treasure = mongoose.Schema(
    {
        presenter : String,
        uploadDate: Date,
        title: String,
        overSeaUrl: String,
        chinaUrl: String,
        optionalUrl: String,
        optionalNote: String,
        promo: { type: Boolean, default : false },
        click: { type: Number, default : 0 },
        imageUrl : String,
        keyword: String,
        type: String  // Youtube,MP4, audio         
    }
);

// create resources module class
let resourcesSchema = mongoose.Schema(
    {
        topic: String, //了凡四训
        publisher: String, // 华藏净宗学会
        publishDate: Date, 
        introduction: String,
        host: String,  //主持人
        treasures : [treasure],
        promo : { type: Boolean, default: false }, 
        categoryOne: String,
        categoryTwo : String,
        language: String,   // Cantonese, Mandarin, English
        imageUrl: String,
        keyword: String
    },
    {
        collection: 'resources'
    }
);

module.exports = mongoose.model('resources', resourcesSchema);


