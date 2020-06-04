import path from 'path';

module.exports = {
    client: 'sqlite3',
    connection: {
        filename: path.resolve(__dirname, 'src', 'database' ,'database.sqlite'), // dirname return the directory the file is at        
    },
    migrations: {
        directory: path.resolve(__dirname, 'src', 'database', 'migrations')   
    },
    seeds: {
        directory: path.resolve(__dirname, 'src', 'database', 'seeds')   
    },
    useNullAsDefault: true
};