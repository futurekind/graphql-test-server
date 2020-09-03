const gql = require('graphql-tag');

module.exports = gql`
    type Project {
        id: String!
        shortcut: String!
        title: String!
        status: String!
        description: String!
        division: String!
        isArchived: Boolean
        startAt: String
        deadline: String
        user: User
        partner: Partner
        effort: Float
        progress: Float
    }
`;
