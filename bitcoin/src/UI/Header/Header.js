import React from 'react';
import './Header.css';

export const Header = (props) => {
  return (
    <header className={props.className}>{props.children}</header>
  )
}
