"use strict";
var Post = (function () {
    function Post(userId, id, title, body) {
        this.userId = userId;
        this.id = id;
        this.title = title;
        this.body = body;
    }
    Post.prototype.toForm = function () {
        return "userId=" + this.userId + "&id=" + this.id + "&title=" + this.title + "&body=" + this.body;
    };
    return Post;
}());
exports.Post = Post;