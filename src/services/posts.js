const callToApiPosts = () => {
    return fetch(`http://localhost:3001/posts`, {
        method: "GET",
    })
    .then((response) => response.json())
};

export default callToApiPosts;