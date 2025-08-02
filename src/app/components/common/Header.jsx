import React from 'react'

const Header = ({headerText}) => {
  return (
    <div>
      <h2 className="text-3xl text-center sm:text-left text-primary font-semibold font-textFont md:text-4xl ">
        {headerText}
      </h2>
    </div>
  );
}

export default Header