(function(root, $, _, Backbone){
  root.App = root.App || {};
  
  App.Router = Backbone.Router.extend({
    routes: {
      '(/)': 'index',
      'users(/)': 'users'
    },
    index: function () {
      React.render(React.createElement(App.IndexView, {}), document.querySelector('.body-content'));
    },
    users: function () {
       $.getJSON('users').done(function (result) {
         React.render(React.createElement(App.UsersView, {users: result}), document.querySelector('.body-content'));
       });
    }
  });

  App.router = new App.Router;

  Backbone.history.start({ pushState: true, silent: true });

})(this, jQuery, _, Backbone);