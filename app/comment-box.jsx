import React from 'react';
import CommentList from './comment-list.jsx';
import CommentForm from './comment-form.jsx';

var $ = require( 'jQuery' );

export default React.createClass({
    getInitialState() {
        return {
            data: []
        };
    },

    componentDidMount() {
        this.getComments();
    },

    getComments() {
        var request = $.getJSON(
            this.props.url.toString()
        );

        request.done( ( data ) => {
            this.setState({
                data: data
            });
        })

        request.fail( ( xhr, status, error ) => {
            console.log( 'Failed to get comments:', this.props.url, status, error.toString() );
        });
    },

    // Callback that will be passed as a prop to CommentForm
    handleCommentSubmit( data ) {
        var request = $.post( this.props.url, data );

        request.success(( data ) => {
        console.log( data );
            this.setState({
                data
            });
        });

        request.error(( xhr, status, error ) => {
            console.error( this.props.url, status, error.toString() );
        });
    },

    render() {
        return (
            <div className="commentBox">
                <h1>Comments</h1>
                <CommentList data={ this.state.data } />
                <CommentForm onCommentSubmit={ this.handleCommentSubmit }/>
            </div>
        );
    }
});
