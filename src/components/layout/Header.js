import React from 'react';

function Header() {
  return (
    <header style={headerStyle}>
      <h1>TodoList</h1>
    </header>
  )
}

const headerStyle = {
  background: '#2C3646',
  color: '#FF305D',
  textAlign: 'center',
  padding: '10px'
}
export default Header;