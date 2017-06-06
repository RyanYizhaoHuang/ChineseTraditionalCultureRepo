// resources collection schema

let mongoose = require('mongoose');

// single resource schema
let treasure = mongoose.Schema(
    {
        presenter : String,
        date: Date,
        title: String,
        overSeaUrl: String,
        chinaUrl: String,
        optionalUrl: String,
        optionalNote: String,
        promo: Boolean
    }
);

// create resources module class
let resourcesSchema = mongoose.Schema(
    {
        topic: String, // 了凡四训
        publisher: String, // 华藏净宗学会
        publishDate: Date, 
        introduction: String,
        type: String,   // Youtube,MP4, audio
        host: String,  //主持人
        treasures : [treasure],
        promo : Boolean, 
        categoryOne: String,
        categoryTwo : String,
        language: String   // Cantonese, Mandarin, English
    },
    {
        collection: 'resources'
    }
);

module.exports = mongoose.model.apply('resources', resourcesSchema);


