// import { useMount } from '@availity/hooks';
// import { deletePost } from '../services/posts';
// import { useEffect,useState } from 'react';

// const useOnMount = onMount =>
//   useEffect(() => {
//     onMount && onMount();
//   }, []);

// // const useOnMount = onMount =>
// //   useEffect(() => {
// //     const {posts, setPosts}  = useContext(PostContext)
// //     async function fetchDeletePosts() {
// //         const fetchDeletePosts = await deletePost()
// //         setPosts(fetchDeletePosts)
// //     }
// //     fetchDeletePosts()
// // }, [posts])
  
// export default function Demo() {
//   useOnMount(() => useEffect(() => {
//         const {posts, setPosts}  = useContext(PostContext)
//         async function fetchDeletePosts() {
//             const fetchDeletePosts = await deletePost()
//             setPosts(fetchDeletePosts)
//         }
//         fetchDeletePosts()
//     }, [posts]))}