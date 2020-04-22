const pg = require('pg');
const config = {
    //host: '<your-db-server-name>.postgres.database.azure.com',
    host: '104.42.177.66',
    // Do not hard code your username and password.
    // Consider using Node environment variables.
    user: 'enigma',     
    password: 'enigma',
    database: 'enigma',
    port: 5432,
    ssl: false
};

const client = new pg.Client(config);


client.connect(err => {
    if (err) throw err;
    else {
        console.log("Test création client")
        queryDatabase();
    }
});


function queryDatabase() {
  
    console.log(`Running query to PostgreSQL server: ${config.host}`);

    const query = 'SELECT * FROM datacustomers;';

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