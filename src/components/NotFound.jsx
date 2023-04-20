import { Link } from "react-router-dom";
import React from "react";
function NotFound() {
return (
<div>
<h1>Oops! You seem to be lost.</h1>
<p>Go back to the home page:</p>
<Link to='/'>Home</Link>
</div>
)
}

export default NotFound;