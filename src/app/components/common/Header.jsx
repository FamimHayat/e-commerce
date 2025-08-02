import React from 'react'

const Header = ({headerText}) => {
  return (
    <div>
      <h2 className="text-3xl md:text-4xl text-primary font-semibold font-textFont ">
        {headerText}
        
      </h2>
    </div>
  );
}

export default Header