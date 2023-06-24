import React from 'react';
import { useDispatch, useSelector } from "react-redux";
import { fetchPost, postActions } from '../store/postSlice';

const CreatePost = () => {
    const data = useSelector(state => state.post);
    const dispatch = useDispatch();
    console.log(data);
    return (
        <div className="border-2 border-[black] md:h-[600px] h-auto w-[600px] p-2 ml-4 md:ml-10 rounded-xl">
            <div className="bg-[#AEDFF2] bg-opacity-30 h-full w-full rounded-xl px-4 md:px-10 py-5">
                <div className="text-center text-2xl md:text-3xl font-medium mb-3">
                    Create your own blog!
                </div>
                <div className="my-3">
                <div>Name:</div>
                <input
                    type="text"
                    className="w-full border-2 border-gray-600 p-1 px-2"
                    onChange={(e) => { dispatch(postActions.nameAdded(e.target.value)) }}
                />
                </div>
                <div className="my-3">
                <div>Email:</div>
                <input
                    type="text"
                    className="w-full border-2 border-gray-600 p-1 px-2"
                    onChange={(e) => { dispatch(postActions.emailAdded(e.target.value)) }}
                />
                </div>
                <div className="my-3">
                <div>Heading:</div>
                <input
                    type="text"
                    className="w-full border-2 border-gray-600 p-1 px-2"
                    onChange={(e) => { dispatch(postActions.headingAdded(e.target.value)) }}
                />
                </div>
                <div className="mt-8">
                <textarea
                    name="content"
                    rows={4}
                    className="w-full border-2 border-gray-600 p-3"
                    placeholder="Write something..."
                    onChange={(e) => { dispatch(postActions.contentAdded(e.target.value)) }}
                ></textarea>
                </div>
                <div className="mt-6 text-center">
                <select
                    name=""
                    id=""
                    className="p-3 rounded-xl border-2 border-gray-600"
                    onChange={(e) => { dispatch(postActions.categoryAdded(e.target.value)) }}
                >
                    <option value="select">Select a category</option>
                    <option value="technology">Technology</option>
                    <option value="finance">Finance</option>
                    <option value="travel">Travel</option>
                    <option value="food">Food</option>
                    <option value="movies">Movies</option>
                    <option value="fitness">Fitness</option>
                    <option value="environment">Environment</option>
                    <option value="business">Business</option>
                    <option value="health">Health</option>
                </select>
                </div>
                <div className="flex justify-end mt-3">
                <button
                    className="bg-landing-secondary text-gray-200 font-medium py-2 px-5 rounded-xl hover:scale-110"
                    onClick={() => { dispatch(fetchPost()) }}
                >
                    Submit
                </button>
                </div>
            </div>
        </div>

    );
};

export default CreatePost;