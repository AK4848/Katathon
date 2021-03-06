var React = require("react");
var ReactDOM = require("react-dom");

var Footer = require("./components/Footer");
var Header = require("./components/Header");
var Home = require("./components/Home");

var Page = React.createClass({
  getInitialState: function(){
    return {page: "home"}
  },
  render: function () {
    return (
      <div className="page">
        <Home/>
        <Footer page={this.state.page}/>
      </div>
    );
  }
});

ReactDOM.render(<Page/>, document.getElementById('app'));
