import React, { Component } from 'react';
import moment from 'moment';

class Post extends Component {
    render() {
        return (
            <div className="CreatePost container">
                <form>
                    <div className="form-group">
                        <label for="title">Title</label>
                        <input type="text" className="form-control" id="title" placeholder="Title" />
                    </div>
                    <div className="form-group">
                        <label for="content">Content</label>
                        <textarea type="text" className="form-control" id="content"  placeholder="Content"></textarea>
                    </div>
                    <button type="submit" className="btn btn-primary">Submit</button>
                </form>
            </div>
        );
    }
}

export default Post;