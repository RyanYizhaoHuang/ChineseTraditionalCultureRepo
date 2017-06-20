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
        type: String,  // Youtube,MP4, audio
        sortNumber : Number,
        createDate: { type: Date, defaulr : Date.now() }         
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
        categoryOne: String,  //ru 儒, shi 释, dao 道,jingkong 净空, nanshi 南师
        categoryTwo : String,
        language: String,   // can(Cantonese),(man)Mandarin, (eng)English
        imageUrl: String,
        keyword: String,
        optionalUrl: String  // 链接到有关的网站     
    },
    {
        collection: 'resources'
    }
);

module.exports = mongoose.model('resources', resourcesSchema);


