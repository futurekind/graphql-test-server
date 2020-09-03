const low = require('lowdb');
const FileSync = require('lowdb/adapters/FileSync');
const projects = require('./data/projects.json');
const users = require('./data/users.json');
const partners = require('./data/partners.json');

module.exports = () => {
    const adapter = new FileSync('db.json');
    const db = low(adapter);

    db.defaults({ projects, users, partners }).write();

    return db.read();
};
