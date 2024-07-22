import React from 'react';
import { TiTick } from "react-icons/ti";

const Header = () => {
  return (
    <div className="header">
     <h1>
     <TiTick style={{ fontSize: '100px', marginRight: '0px' }} className="header-icon" />ToDo List</h1>
    </div>
  );
};

export default Header;
