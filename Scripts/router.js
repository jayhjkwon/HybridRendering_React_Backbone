(function(root, $, Backbone){
  root.App = root.App || {};

  var bodyContent = document.querySelector('.body-content');
  
  App.Router = Backbone.Router.extend({
    routes: {
      '(/)': 'index',
      'users': 'users',
      'users/:id' : 'detail'
    },
    index: function () {
      React.render(React.createElement(App.IndexView, {}), bodyContent);
    },
    users: function () {
       $.getJSON('users').done(function (result) {
         React.render(React.createElement(App.UsersView, {users: result}), bodyContent);
       });
    },
    detail: function (id) {
      $.getJSON('/users/'+id).done(function (result) {
        React.render(React.createElement(App.UserDetailsView, {user:result}), bodyContent);
      });
    }
  });

  App.router = new App.Router;

  Backbone.history.start({ pushState: true, silent: true });

})(this, jQuery, Backbone);