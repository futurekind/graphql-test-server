const { ApolloServer } = require('@saeris/apollo-server-vercel');
const gql = require('graphql-tag');
const projectType = require('../src/graphql/schema/projectType');
const userType = require('../src/graphql/schema/userType');
const partnerType = require('../src/graphql/schema/partnerType');
const projects = require('../src/graphql/query/projects');
const updateProject = require('../src/graphql/mutations/updateProject');

const typeDefs = gql`
    ${projectType}
    ${userType}
    ${partnerType}

    type Error {
        message: String!
        code: Int!
    }

    type ProjectsResult {
        data: [Project]
        error: Error
    }

    input ProjectUpdateInput {
        id: String!
        title: String!
    }

    type Query {
        projects: ProjectsResult
    }

    type Mutation {
        updateProject(project: ProjectUpdateInput): Project
    }
`;

const resolvers = {
    Query: {
        projects,
    },
    Mutation: {
        updateProject,
    },
};

const server = new ApolloServer({
    typeDefs,
    resolvers,
    playground: true,
    introspection: true,
});

module.exports = server.createHandler();
