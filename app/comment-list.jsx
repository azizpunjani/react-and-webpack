import Comment from './comment.jsx';
import React from 'react';

export default React.createClass({
    render() {
        var commentNodes = this.props.data.map( ( comment ) => {
            return (
                <Comment author={ comment.author } key={ comment.id }>
                    { comment.text }
                </Comment>
            );
        });

        return (
            <div className="commentList">
               { commentNodes }
            </div>
        );
    }
});
