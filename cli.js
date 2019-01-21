#!/usr/bin/env node



// const [,, ...args] = process.argv

// console.log(`voici ton prénom ${args}`)
const axios = require('axios');
var validator = require("email-validator");

var mail = process.argv[2];

if(validator.validate(mail)){
	console.log('email OK');
	//var url = "ttps://haveibeenpwned.com/api/${"+mail+"}";
	axios({
		method: 'get',
		url: "https://haveibeenpwned.com/api/${mail}",
		header:{
			'api-version': '2',
			'user-agent': "nondidju"
		}
	})
		.then(function(reponse){
			console.log(reponse.data.Name)

		})
		.catch(function(error){
			console.log(error)

		})

}else{
	console.log('email not OK');

}



