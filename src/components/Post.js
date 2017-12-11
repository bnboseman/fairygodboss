import React, { Component } from 'react';
import moment from 'moment';

class Post extends Component {

    render() {
        const post = this.props.location.post;
        return (
            <div className="Post container">
                <div className="row">
                    <div className="col-md-8">
                        <h1 className="title">{post.title}</h1>
                    </div>
                    <div className="col-md-4">
                        {moment(post.date).format('LL')}
                    </div>
                </div>
                <div className="row">
                    <div className="content col-md-12">
                        {post.content.split("\n").map((i, index) => {
                            return <p key={index}>{i}</p>;
                        })}
                    </div>
                </div>

                <div className="row">
                    <div className="comments">
                        {post.comments.map((comment, index) => {
                            return <div key={index}>
                                <p>{comment.content} </p>
                            </div>;
                        })}
                    </div>
                </div>

            </div>
        );
    }
}

export default Post;