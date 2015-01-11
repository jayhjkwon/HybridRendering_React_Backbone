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
              <a className="navbar-brand" href="#">[Hybrind Rendering Demo with React and Backbone]</a>
            </div>
            <div className="navbar-collapse collapse">
              <ul className="nav navbar-nav">
                <li><a href="/" onClick={this.navigate}>Home</a></li>
                <li><a href="/users" onClick={this.navigate}>Users</a></li>
              </ul>
            </div>
          </div>
      </div>
      );
    },

    navigate(e) {
      e.preventDefault();
      var url = e.currentTarget.pathname;      
      App.router.navigate(url, {trigger: true});
    }
  });

	App.IndexView = React.createClass({
	  render() {
      return (
        <h1>Hybrid Rendering with ASP.NET, React and Backbone</h1>
      );
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

  App.UserView = React.createClass({
    render() {
      var detailsUrl = "/users/" + this.props.user.Id;
      var popoverMessage = this.props.user.Name + "님의 상세 정보를 보실수 있습니다";
      return (
        <tr>
          <td>{this.props.user.Id}</td>
          <td>{this.props.user.Name}</td>
          <td>{this.props.user.Suburb}</td>
          <td>
            <button className="btn btn-primary" onClick={this.deleteUser} 
                    data-loading-text="Loading...">Delete</button>&nbsp;
            <a href={detailsUrl} 
                className="btn btn-primary" 
                onClick={this.moveToDetailsPage} 
                data-toggle="popover" 
                title="React" 
                data-content={popoverMessage}>Details</a>
          </td>
        </tr>
      );
    },

    componentDidMount() {
      $('[data-toggle="popover"]').popover({trigger:'hover'});
    },

    deleteUser(event){
      var confirmed = confirm("Delete " + this.props.user.Name + " living in " + this.props.user.Suburb + "?");
      if (confirmed)
        this.props.deleteUser(this.props.user.Id);
    },

    moveToDetailsPage(e) {
      App.router.navigate(e.currentTarget.pathname, {trigger: true});
    }
  });

  App.UserDetailsView = React.createClass({
    render() {
      return (
        <div>
          <h2>User Details</h2>
          <dl className="dl-horizontal">
            <dt>Id</dt>
            <dd>{this.props.user.Id}</dd>
            <dt>Name</dt>
            <dd>{this.props.user.Name}</dd>
            <dt>Suburb</dt>
            <dd>{this.props.user.Suburb}</dd>
            <dt>Birthday</dt>
            <dd>{this.props.user.Birthday}</dd>
          </dl>
        </div>
      );
    }
  });

})(this, _);