const callToApiPosts = () => {
    console.log('Se están pidiendo los datos');
    return fetch(`http://localhost:3001/posts`, {
        method: "GET",
    })
    .then((response) => response.json())
    .then(data => {
        const cleanData = data.map((post) => {
            return {
                id: post.id,
                name: post.name,
                user: post.user
            }
        })
        return cleanData;
    });
}

export default callToApiPosts;