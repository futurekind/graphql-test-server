const gql = require('graphql-tag');

module.exports = gql`
    type User {
        id: String! #
        firstname: String!
        lastname: String!
        email: String!
        password: String!
        imageUrl: String
        isArchived: Boolean
        division: String!
    }
`;
