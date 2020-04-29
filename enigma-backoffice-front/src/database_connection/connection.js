const { Client } = require('pg');
var connectionString = "postgres://postgres:Belline62@localhost:5432/enigma";
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
  
    console.log(`Running query to PostgreSQL server:`);

    const query = 'SELECT * FROM customer.customer;';

    client.query(query)
        .then(res => {
            const rows = res.rows;

            rows.map(row => {
                console.log(`Read: ${JSON.stringify(row)}`);
            });

            process.exit();
        })
        .catch(err => {
            console.log(err);
        });
}