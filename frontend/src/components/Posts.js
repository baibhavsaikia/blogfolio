import React, { useEffect, useState } from 'react';
import axios from 'axios';
import SinglePost from './SinglePost';

const Posts = () => {
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        fetchPosts();
    }, []);

    const fetchPosts = async () => {
        try {
          const response = await axios.get('http://localhost:5000/posts'); 
          setPosts(response.data.reverse());
        } catch (error) {
          console.error('Error fetching posts:', error);
        }
    };
    return (
        <div className='px-[100px] pb-[100px] w-[1200px]'>
            <div className='text-[18px] mt-[50px]'>
                All blog posts
            </div>      
            {posts.map((post) => (
                <SinglePost key={post._id} name={post.name} email={post.email} heading={post.heading}
                content={post.content} category={post.category} createdAt={post.createdAt}/>
            ))}
        </div>
    );
};

export default Posts;