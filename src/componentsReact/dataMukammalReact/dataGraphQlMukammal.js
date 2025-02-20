const dataGraphQlMukammal = [
    {
        id: 1,
        title: "Basic Query with Apollo Client",
        code: `
import { gql, useQuery } from '@apollo/client';

const GET_POSTS = gql\`
    query GetPosts {
        posts {
            id
            title
            content
            author {
                name
            }
        }
    }
\`;

const PostList = () => {
    const { loading, error, data } = useQuery(GET_POSTS);

    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error: {error.message}</p>;

    return (
        <div>
            {data.posts.map(post => (
                <div key={post.id}>
                    <h2>{post.title}</h2>
                    <p>{post.content}</p>
                    <small>By: {post.author.name}</small>
                </div>
            ))}
        </div>
    );
};`,
        description: "Apollo Client yordamida GraphQL so'rovlarini amalga oshirish",
        result: `{
    "feature": "Apollo Query",
    "concepts": [
        "useQuery Hook",
        "Loading States",
        "Error Handling",
        "Data Fetching"
    ]
}`
    },
    {
        id: 2,
        title: "Mutations with Apollo",
        code: `
const ADD_POST = gql\`
    mutation AddPost($title: String!, $content: String!) {
        addPost(title: $title, content: $content) {
            id
            title
            content
        }
    }
\`;

const CreatePost = () => {
    const [addPost, { loading }] = useMutation(ADD_POST, {
        update(cache, { data: { addPost } }) {
            cache.modify({
                fields: {
                    posts(existingPosts = []) {
                        const newPostRef = cache.writeFragment({
                            data: addPost,
                            fragment: gql\`
                                fragment NewPost on Post {
                                    id
                                    title
                                    content
                                }
                            \`
                        });
                        return [...existingPosts, newPostRef];
                    }
                }
            });
        }
    });

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await addPost({
                variables: {
                    title: "New Post",
                    content: "Post content"
                }
            });
        } catch (err) {
            console.error(err);
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            {/* Form fields */}
        </form>
    );
};`,
        description: "GraphQL mutatsiyalarini Apollo Client bilan boshqarish",
        result: `{
    "feature": "Apollo Mutation",
    "concepts": [
        "useMutation Hook",
        "Cache Updates",
        "Optimistic UI",
        "Error Handling"
    ]
}`
    },
    {
        id: 3,
        title: "Apollo Client Cache",
        code: `
import { ApolloClient, InMemoryCache } from '@apollo/client';

const client = new ApolloClient({
    uri: 'https://api.example.com/graphql',
    cache: new InMemoryCache({
        typePolicies: {
            Query: {
                fields: {
                    posts: {
                        merge(existing = [], incoming) {
                            return [...existing, ...incoming];
                        }
                    }
                }
            }
        }
    })
});

// Cache reading example
const { data } = useQuery(GET_POST, {
    variables: { id: "1" }
});

// Direct cache access
client.readQuery({
    query: GET_POSTS
});

// Cache writing
client.writeQuery({
    query: GET_POSTS,
    data: {
        posts: [/* ... */]
    }
});`,
        description: "Apollo Client kesh boshqaruvi va optimizatsiyasi",
        result: `{
    "feature": "Apollo Cache",
    "concepts": [
        "Cache Policies",
        "Cache Reading",
        "Cache Writing",
        "Cache Updates"
    ]
}`
    },
    {
        id: 4,
        title: "Subscriptions with Apollo",
        code: `
import { split, HttpLink } from '@apollo/client';
import { getMainDefinition } from '@apollo/client/utilities';
import { GraphQLWsLink } from '@apollo/client/link/subscriptions';
import { createClient } from 'graphql-ws';

const wsLink = new GraphQLWsLink(createClient({
    url: 'ws://api.example.com/graphql'
}));

const httpLink = new HttpLink({
    uri: 'http://api.example.com/graphql'
});

const splitLink = split(
    ({ query }) => {
        const definition = getMainDefinition(query);
        return (
            definition.kind === 'OperationDefinition' &&
            definition.operation === 'subscription'
        );
    },
    wsLink,
    httpLink
);

const COMMENTS_SUBSCRIPTION = gql\`
    subscription OnCommentAdded {
        commentAdded {
            id
            content
            author
        }
    }
\`;

const Comments = () => {
    const { data, loading } = useSubscription(COMMENTS_SUBSCRIPTION);
    
    if (loading) return null;
    
    return (
        <div>
            <h3>New Comment: {data.commentAdded.content}</h3>
        </div>
    );
};`,
        description: "Real-time ma'lumotlarni GraphQL subscriptionlar orqali olish",
        result: `{
    "feature": "Apollo Subscriptions",
    "concepts": [
        "WebSocket Setup",
        "Real-time Updates",
        "Subscription Hooks",
        "Connection Management"
    ]
}`
    },
    {
        id: 5,
        title: "Error Handling and Loading States",
        code: `
const ProfilePage = () => {
    const { loading, error, data } = useQuery(GET_PROFILE, {
        errorPolicy: 'all',
        notifyOnNetworkStatusChange: true,
        onError: (error) => {
            console.error('GraphQL Error:', error);
        }
    });

    if (loading) {
        return <LoadingSpinner />;
    }

    if (error) {
        return (
            <ErrorComponent 
                message={error.message}
                networkError={error.networkError}
                graphQLErrors={error.graphQLErrors}
            />
        );
    }

    return (
        <div>
            <h1>{data.profile.name}</h1>
            {/* Profile data */}
        </div>
    );
};`,
        description: "GraphQL so'rovlarida xatolarni boshqarish va loading holatlar",
        result: `{
    "feature": "Error Handling",
    "concepts": [
        "Error Policies",
        "Loading States",
        "Network Errors",
        "GraphQL Errors"
    ]
}`
    },
    {
        id: 6,
        title: "Advanced Query with Pagination and Filtering",
        code: `
import { gql, useQuery } from '@apollo/client';

const GET_POSTS_ADVANCED = gql\`
    query GetPosts($page: Int!, $limit: Int!, $filter: PostFilter) {
        posts(page: $page, limit: $limit, filter: $filter) {
            items {
                id
                title
                content
                createdAt
                author {
                    id
                    name
                    email
                    profile {
                        avatar
                        bio
                    }
                }
                categories {
                    id
                    name
                }
                comments {
                    id
                    text
                    user {
                        name
                    }
                }
            }
            pageInfo {
                totalPages
                currentPage
                hasNextPage
                hasPreviousPage
            }
        }
    }
\`;

const AdvancedPostList = () => {
    const [page, setPage] = useState(1);
    const [filter, setFilter] = useState({ category: null, searchTerm: '' });
    
    const { loading, error, data, fetchMore } = useQuery(GET_POSTS_ADVANCED, {
        variables: { 
            page, 
            limit: 10,
            filter 
        },
        fetchPolicy: 'cache-and-network',
    });

    const loadMore = () => {
        fetchMore({
            variables: { page: page + 1 },
            updateQuery: (prev, { fetchMoreResult }) => {
                if (!fetchMoreResult) return prev;
                return {
                    posts: {
                        ...fetchMoreResult.posts,
                        items: [...prev.posts.items, ...fetchMoreResult.posts.items]
                    }
                };
            }
        });
        setPage(page + 1);
    };

    return (
        <div>
            <FiltersComponent onFilterChange={setFilter} />
            <PostGrid posts={data?.posts.items} />
            <Pagination 
                pageInfo={data?.posts.pageInfo}
                onLoadMore={loadMore}
            />
        </div>
    );
};`,
        description: "Murakkab GraphQL so'rovlari va ma'lumotlarni sahifalash",
        result: `{
    "feature": "Advanced Apollo Query",
    "concepts": [
        "Pagination",
        "Filtering",
        "Complex Data Structures",
        "Cache Policies",
        "Optimized Data Fetching"
    ]
}`
    },
    {
        id: 7,
        title: "Complex Mutations with File Upload",
        code: `
import { gql, useMutation } from '@apollo/client';
import { createUploadLink } from 'apollo-upload-client';

const UPLOAD_POST = gql\`
    mutation CreatePost(
        $title: String!
        $content: String!
        $images: [Upload!]
        $categories: [ID!]
        $metadata: PostMetadataInput!
    ) {
        createPost(
            input: {
                title: $title
                content: $content
                images: $images
                categories: $categories
                metadata: $metadata
            }
        ) {
            id
            title
            content
            imageUrls
            categories {
                id
                name
            }
            metadata {
                tags
                publishDate
                isPublic
            }
        }
    }
\`;

const CreateComplexPost = () => {
    const [formState, setFormState] = useState({
        title: '',
        content: '',
        images: [],
        categories: [],
        metadata: {
            tags: [],
            publishDate: new Date(),
            isPublic: true
        }
    });

    const [createPost, { loading, error }] = useMutation(UPLOAD_POST, {
        context: {
            hasUpload: true
        },
        update(cache, { data: { createPost } }) {
            // Complex cache update logic
            cache.modify({
                fields: {
                    posts(existingPosts = []) {
                        const newPostRef = cache.writeFragment({
                            data: createPost,
                            fragment: gql\`
                                fragment NewPost on Post {
                                    id
                                    title
                                    content
                                    imageUrls
                                    categories {
                                        id
                                        name
                                    }
                                    metadata {
                                        tags
                                        publishDate
                                        isPublic
                                    }
                                }
                            \`
                        });
                        return [newPostRef, ...existingPosts];
                    }
                }
            });
        },
        onCompleted: (data) => {
            // Handle success
            console.log('Post created:', data);
        },
        onError: (error) => {
            // Handle error
            console.error('Error creating post:', error);
        }
    });

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await createPost({
                variables: formState,
                optimisticResponse: {
                    createPost: {
                        __typename: 'Post',
                        id: 'temp-id',
                        ...formState
                    }
                }
            });
        } catch (err) {
            console.error('Submit error:', err);
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            {/* Complex form implementation */}
        </form>
    );
};`,
        description: "Murakkab GraphQL mutatsiyalari va fayl yuklash",
        result: `{
    "feature": "Complex Mutations",
    "concepts": [
        "File Upload",
        "Optimistic Updates",
        "Cache Management",
        "Error Handling",
        "Form State Management"
    ]
}`
    }
];

export default dataGraphQlMukammal;