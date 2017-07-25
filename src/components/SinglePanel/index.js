import React from 'react';

const SinglePanel = (props) => {
  const {title} = props
  return (
    <div className="col-xs-6 col-sm-12">
      <div className="panel panel-default">
        <div className="panel-heading">
          <h3>{title}</h3>
        </div>
        <div className="panel-body">
          {props.children}
        </div>
      </div>
    </div>
  );
};

export default SinglePanel;
