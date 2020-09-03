const gql = require('graphql-tag');

module.exports = gql`
    type Partner {
        id: String!
        company: String
        address: String
        zipCode: String
        city: String
        phone: String
        email: String
        webUrl: String
        info: String
        isArchived: Boolean
        color: String
        shortcut: String
        boxPath: String
        projectCount: Int
        users: [User]
    }
`;
