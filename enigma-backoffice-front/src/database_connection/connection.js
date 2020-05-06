const { Client } = require('pg');
var connectionString = "postgres://postgres:/*Ajouter votre MDP de connexion*/@localhost:5432/enigma";
const client = new Client({
    connectionString: connectionString
});


client.connect(err => {
    if (err) throw err;
    else {
        getAllData();
    }
});


function getAllData() {
  
    let queryResult = [];

    const query = 'SELECT * FROM customer.customer;';

    client.query(query)
        .then(res => {
            
            queryResult = res;

            process.exit();
        })
        .catch(err => {
            console.log(err);
        });

    return queryResult;
}