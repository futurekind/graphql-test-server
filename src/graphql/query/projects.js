const getDB = require('../../db');

module.exports = () => {
    try {
        const db = getDB();
        const projects = db
            .read()
            .get('projects')
            .filter((x) => {
                return x.isArchived === false && x.status !== 'INVOICED';
            })
            .sortBy('shortcut')
            .value();
        const users = db.get('users');
        const partners = db.get('partners');

        return {
            data: projects.map((project) => {
                const user = project.userId
                    ? users.find({ id: project.userId }).value()
                    : null;

                const partner = project.partnerId
                    ? partners.find({ id: project.partnerId }).value()
                    : null;

                return {
                    ...project,
                    user,
                    partner,
                };
            }),
        };
    } catch (err) {
        return {
            errors: {
                message: err.message,
                code: 0,
            },
        };
    }
};
