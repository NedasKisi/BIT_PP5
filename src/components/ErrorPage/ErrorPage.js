import React from "react";
import "./ErrorPage.css";



const ErrorPage = () => {
  return (
<div className="errorPage">
<img className="errorImg" src={require('./giphy.gif')} alt="Error 404: Page not found!" />
</div>
  );
};
export default ErrorPage;