import _ from 'lodash';
import React, { Component } from 'react';
import { connect } from "react-redux";
import { fetchPosts } from '../actions/posts';

class PostsList extends Component {
    
    componentDidMount(){
        this.props.fetchPosts();
    }

    renderPostsList() {
        return _.map(this.props.posts, post => {
            return (
                <li className="list-group-item" key={post.id}>
                    {post.title}
                </li>
            );
        });
    }

    render() {
        return (
            <div>
                <h3>Posts</h3>
                <ul className="list-group">
                    {this.renderPostsList()}
                </ul>
            </div>
        );
    }
}

function mapStateToProps(state){
    return {
        posts:state.posts
    };
}

export default connect(mapStateToProps, {fetchPosts})(PostsList);