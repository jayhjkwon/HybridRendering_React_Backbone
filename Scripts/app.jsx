(function(root, _){
  root.App = root.App || {};

  App.HeaderView = React.createClass({
    render() {
      return (
        <div className="navbar navbar-inverse navbar-fixed-top">
          <div className="container">
            <div className="navbar-header">
              <button type="button" className="navbar-toggle" data-toggle="collapse" data-target=".navbar-collapse">
                <span className="icon-bar"></span>
                <span className="icon-bar"></span>
                <span className="icon-bar"></span>
              </button>
              <a className="navbar-brand" href="#">Hybrind Rendering Demo with React and Backbone</a>
            </div>
            <div className="navbar-collapse collapse">
              <ul className="nav navbar-nav">
                <li><a href="/" onClick={this.moveToHomePage}>Home</a></li>
                <li><a href="/users" onClick={this.moveToUsersPage}>Users</a></li>
              </ul>
            </div>
          </div>
      </div>
      );
    },

    moveToHomePage(e) {
      e.preventDefault();
      App.router.navigate('/', {trigger: true});
    },

    moveToUsersPage(e) {
      e.preventDefault();
      App.router.navigate('/users', {trigger: true});
    }
  });

	App.IndexView = React.createClass({
	  render() {
      return (
        <h1>Hybrid Rendering with ASP.NET, React and Backbone</h1>
      );
	  }
	});

  App.UserView = React.createClass({
    render() {
      return (
        <tr>
          <td>{this.props.user.Id}</td>
          <td>{this.props.user.Name}</td>
          <td>{this.props.user.Suburb}</td>
          <td><button className="btn btn-primary" onClick={this.deleteUser}>Delete</button></td>
        </tr>
      );
    },

    deleteUser(event){
      var confirmed = confirm("Delete " + this.props.user.Name + " living in " + this.props.user.Suburb + "?");
      this.props.deleteUser(this.props.user.Id);
    }
  });

  App.UsersView = React.createClass({
    getInitialState() {
      return {users: this.props.users};
    },

    render() {
      var users = this.state.users.map((user) => { 
        return (<App.UserView user={user} deleteUser={this.deleteUser}/>); 
      });

      return (
        <div>
          <h2>Users</h2>
          <table className="table">
            <tbody>
              {users}
            </tbody>
          </table>
        </div>
      );
    },

    deleteUser(userId) {
      var users = _.filter(this.state.users, (user) => {
        return user.Id !== userId;
      });
      this.setState({users: users});
    }
  });

})(this, _);