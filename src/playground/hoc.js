import React from 'react';
import ReactDOM from 'react-dom';

const Info = (props) => (
  <div>
    <h1>Info</h1>
    <p>This is info: {props.info}</p>
  </div>
);

const withAdminWarning = (WrappedComponent) => {
  return (props) => (
    <div>
      <p>This is private info! Do not share!</p>
      <WrappedComponent {...props}/>
    </div>
  );
};

const requireAuthentication = (WrappedComponent) => {
  return (props) => (
    <div>
      {props.isAuthenticated && <WrappedComponent {...props} />}
      {!props.isAuthenticated && <p>Please log in!</p>}
    </div>
  );
}

const AdminInfo = withAdminWarning(Info);
const AuthInfo = requireAuthentication(Info);

ReactDOM.render(<AuthInfo isAuthenticated={false} info="the details" />, document.getElementById('app'));