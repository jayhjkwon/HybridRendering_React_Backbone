(function(root, $, Backbone){
  root.App = root.App || {};
  
  App.Router = Backbone.Router.extend({
    routes: {
      '(/)': 'index',
      'users': 'users',
      'users/:id' : 'detail'
    },
    index: function () {
      React.render(React.createElement(App.IndexView, {}), document.querySelector('.body-content'));
    },
    users: function () {
       $.getJSON('users').done(function (result) {
         React.render(React.createElement(App.UsersView, {users: result}), document.querySelector('.body-content'));
       });
    },
    detail: function (id) {
      $.getJSON('/users/'+id).done(function (result) {
        React.render(React.createElement(App.UserDetailsView, {user:result}), document.querySelector('.body-content'));
      });
    }
  });

  App.router = new App.Router;

  Backbone.history.start({ pushState: true, silent: true });

})(this, jQuery, Backbone);