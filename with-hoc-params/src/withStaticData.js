import React from 'react';

export default (WrappedComponent, { title }) => {
  const hocComponent = ({ ...props }) => {
    
    return (
      <>
        <h2>{title}</h2>
        <WrappedComponent {...props} />
      </>
    );
  };

  return hocComponent;
}
