const getDB = require('../../db');

module.exports = (_, { project: { id, title } }) => {
    const p = getDB().get('projects').find({ id }).assign({ title }).write();

    return p;
};
