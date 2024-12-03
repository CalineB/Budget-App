const { Client } = require('pg');


const budget = async () => {
    const client = new Client({
    user: process.env.PGUSER,
    host: process.env.PGHOST,
    database: process.env.PGDATABASE,
    password: process.env.PGPASSWORD,
    port: process.env.PGPORT,
});


await client.connect();

    try{
        const res = await client.query('SELECT * FROM users');
    return res.rows;
    } catch (error) {
        console.error('Error fetching users', error);
        return[];
    } finally {
        await client.end();
    }
};

module.exports =  budget ;