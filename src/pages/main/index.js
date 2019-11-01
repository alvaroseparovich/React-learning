import React, {Component} from 'react';

import api from '../../services/api';
import './style.css';

export default class Main extends Component {

    state = {
        posts:[]
    }

    componentDidMount(){
        this.loadPosts()
    }

    loadPosts = async () =>{
        const response = await api.get(`/posts`);
        
        this.setState({posts:response.data});
        console.log(response.data);
    }


    render(){
        return (
            <ul>
                {this.state.posts.map(post=>(
                    <li key={post.id}>{post.title}</li>  

                ))}
            </ul>
        );
    }
}
