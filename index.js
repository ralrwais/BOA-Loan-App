const express = require('express');
const box = require('box-node-sdk');
const fs = require('fs');


var sdk = new BoxSDK({
  clientID: '4vik07rxtygughusywilpawnvwr48kob',
  clientSecret: '8CL9ztMjbGdLDz6uOvgy3ElSj1orPtPK'
});
 
var client = sdk.getBasicClient('67XJRNDS5sdtRqqy81WviPeo2GPdiDpd');
var userFile = document.getElementById('userFile');

fs.writeFile('example.jpg', file, (err) => {  
    if (err) throw err;
});

client.files.uploadFile('0', 'practice.png', fileData, function(err, file) {});