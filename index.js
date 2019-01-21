#!/usr/bin/env node

const axios = require('axios');
var validator = require("email-validator");

var mail = process.argv[2];

if(validator.validate(mail)){
	console.log('email OK');
	axios({
		method: 'get',
		url: `https://haveibeenpwned.com/api/${mail}`,
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



