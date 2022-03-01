const callToApiComments = () => {
  return fetch(`http://localhost:3001/comments`, {
      method: "GET",
  })
  .then((response) => response.json())
};

export default callToApiComments;

