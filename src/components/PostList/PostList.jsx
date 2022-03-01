import useFetch from '../../hooks/useFetch';
import { API_URL } from '../../constants/constants';
import './PostList.css';
import PostCard from '../PostCard/PostCard';

const PostList = () => {
  const { data: posts, loading, error } = useFetch(API_URL + 'posts');

  return (
    <div>
      {error && <p>Something went wrong, try again</p>}
      {loading ? (
        <div>Loading...</div>
      ) : (
        <div className="Post-Container">
          {posts.map((post) => <PostCard key={post.id} {...post} />).reverse()}
        </div>
      )}
    </div>
  );
};

export default PostList;
