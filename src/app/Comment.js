"use strict";
var Comment = (function () {
    function Comment(postId, id, name, email, body) {
        this.postId = postId;
        this.id = id;
        this.name = name;
        this.email = email;
        this.body = body;
    }
    Comment.prototype.toForm = function () {
        return "postId=" + this.postId + "&id=" + this.id + "&name=" + this.name + "&email=" + this.email + "&body=" + this.body;
    };
    return Comment;
}());
exports.Comment = Comment;
