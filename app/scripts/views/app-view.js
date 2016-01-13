'use strict';

var Backbone = require('backbone');

var AppView = Backbone.View.extend({
    el: 'body',

    template: require('templates/app.html'),

    events: {

    },

    views: null,

    initialize: function() {
        this.views = {};
    },

    render: function () {
        this.$el.html(this.template());
        return this;
    }
});

module.exports = AppView;
