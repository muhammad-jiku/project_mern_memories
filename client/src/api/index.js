import axios from 'axios';

const API = axios.create({
  baseURL: process.env.REACT_APP_API_URL,
});

// Request interceptor - Add auth token to requests
API.interceptors.request.use(
  (req) => {
    if (localStorage.getItem('profile')) {
      req.headers.Authorization = `Bearer ${
        JSON.parse(localStorage.getItem('profile')).token
      }`;
    }
    return req;
  },
  (error) => {
    return Promise.reject(error);
  }
);

// Response interceptor - Handle errors globally
API.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.response?.status === 401) {
      // Token expired or unauthorized
      localStorage.clear();
      window.location.href = '/auth';
    }
    return Promise.reject(error);
  }
);

// Post endpoints
export const fetchPost = (id) => API.get(`/posts/${id}`);
export const fetchPosts = (page) => API.get(`/posts?page=${page}`);
export const fetchPostsByCreator = (name) =>
  API.get(`/posts/creator?name=${name}`);
export const fetchPostsBySearch = (searchQuery) =>
  API.get(
    `/posts/search?searchQuery=${searchQuery.search || 'none'}&tags=${
      searchQuery.tags
    }`
  );
export const createPost = (newPost) => API.post('/posts', newPost);
export const updatePost = (id, updatedPost) =>
  API.patch(`/posts/${id}`, updatedPost);
export const deletePost = (id) => API.delete(`/posts/${id}`);
export const likePost = (id) => API.patch(`/posts/${id}/likePost`);
export const comment = (value, id) =>
  API.post(`/posts/${id}/commentPost`, { value });

// Auth endpoints
export const signIn = (formData) => API.post('/user/signin', formData);
export const signUp = (formData) => API.post('/user/signup', formData);
export const googleSignIn = (userData) =>
  API.post('/user/google-signin', userData);
