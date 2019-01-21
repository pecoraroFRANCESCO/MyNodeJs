#!/usr/bin/env node

// Recuperer l'email

const [,,  ...args] = process.argv

// afficher l'email dans le script

console.log('Voici ton adresse email ${args}')
