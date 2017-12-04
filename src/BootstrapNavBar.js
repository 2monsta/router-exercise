import React, {Component} from 'react'
import { Link} from 'react-router-dom';

class BootstrapNavBar extends Component{
  render(){
    return(
		<nav className="navbar navbar-default navbar-fixed-top">
		  <div className="container-fluid">
		    <div className="navbar-header">
		      <Link className="navbar-brand" to="#">WebSiteName</Link>
		    </div>
		    <ul className="nav navbar-nav">
		    	<li><Link to="/home">Home</Link></li>
          <li><Link to="/about">About Atlanta</Link></li>
          <li><Link to="/images">Images</Link></li>
          <li><Link to="/weather">Weather</Link></li>
          <li><Link to="/mayormessage">Mayor Message</Link></li>
		    </ul>
		  </div>
		</nav>    
	)
  }
}

export default BootstrapNavBar