t #!/usr/bin/env node

const axios = require('axios');
const validator = require("email-validator");
const ora = require('ora');
const chalk = require('chalk');
const figlet = require('figlet');

var term = require( 'terminal-kit' ).terminal ;


let mail = process.argv[2];

const spinner = ora('Loading unicorns');


if(validator.validate(mail)){	
	console.log('email OK'+' => '+mail);
	spinner.start();
	setTimeout(() => {
	spinner.color = 'yellow';
	spinner.text = 'Loading rainbows';
	axios({
		method: 'get',
		url: `https://haveibeenpwned.com/api/v2/breachedaccount/${mail}`,
		headers:{
			'User-Agent': "mynodejs"
		}
	})
		.then(function(response){
				term.drawImage(
					'./as.jpg',
					{shrink:{ 
						width: 25, 
						height: 50, 
					}}
				) ;

			console.log(figlet.textSync(' Oh no — pwned!', {
			    // font: 'Ghost',
			    horizontalLayout: 'default',
			    verticalLayout: 'default'
			}));
			// var bo = response.data.map(({Name}) => Name);
			// console.log(chalk.red(chalk.bgYellow(bo)));

			console.log(response.data.map(({Name}) => Name));

		})
		.catch(function(error){
			if(error.response.status == 404){
				console.log(figlet.textSync('Good news — no pwnage found!', {
			    // font: 'Ghost',
			    horizontalLayout: 'default',
			    verticalLayout: 'default'
			}));
				console.log(chalk.yellow(chalk.bgRed('votre adresse est clean !')));
			}
			if(error.status == 403){
				console.log('API error');
			}

		})
		spinner.stop();
	}, 1000);
}else{
	console.log('email not OK');
}



