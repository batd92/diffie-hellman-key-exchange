const { randomInterger } = require('./helper');
const Client = require('./index');

// Common
const prime = randomInterger().toString();
const generator = randomInterger().toString();

const client_1 = new Client();
const client_2 = new Client();

// set prime
client_1.setPrime(prime);
client_2.setPrime(prime);

// set generator
client_1.setGenerator(generator);
client_2.setGenerator(generator);

// set private key of client
client_1.setPrivateKey(randomInterger());
client_2.setPrivateKey(randomInterger());

// generate key
client_1.generateKeys();
client_2.generateKeys();

// exchange
client_1.computeSecretKey(client_2.getPublicKey());
client_2.computeSecretKey(client_1.getPublicKey());

// both client_1 and client_2 should now have the same secret key
console.log('Private key of client_1: ' + client_1.getPrivateKey(), 'Private key of client_2: ' + client_2.getPrivateKey());
console.log('Secret key of client_1: ' + client_1.getSharedSecretKey(), 'Secret key of client_1: ' + client_2.getSharedSecretKey());