import React from "react";
import "./Sidebar.css";

export const Sidebar = () => {
  return (
    <div className='sidebar'>
      <ul className='sidebar-options'>
        <li className='sidebar-option'>
          <a href='#'>
            <i className='fa fa-clipboard'></i>&nbsp;All Notes
          </a>
        </li>
        <li className='sidebar-option'>
        <a href='#'>
          <i className='fa fa-search'></i>&nbsp;Search
          </a>
        </li>
        <li className='sidebar-option'>
        <a href='#'>
          <i className='fa fa-book'></i>&nbsp;Notebooks &nbsp;
          <button>Add</button>
          </a>
        </li>
        <li className='sidebar-option'>
        <a href='#'>
          <i className='fa fa-tags'></i>&nbsp;Tags &nbsp;
          </a>
        </li>
      </ul>
    </div>
  );
};
