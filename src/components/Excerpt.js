import React, { Component } from 'react';
import {Link} from 'react-router-dom'
import moment from 'moment';

class Excerpt extends Component {
    render() {
        const post = this.props.post;
        return (
            <div className="Post container">
                <div className="row">
                    <div className="col-md-8">
                        <Link to={{ pathname: '/view', post: post  }}><h1 className="title">{post.title}</h1></Link>
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

            </div>
        );
    }
}
export default Excerpt;