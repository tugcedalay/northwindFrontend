import React, { useState } from 'react';
import { Menu, Container } from 'semantic-ui-react'
import CartSummary from './CartSummary';
import SignedOut from './SignedOut';
import SignedIn from './SignedIn';

export default function Navi() {
  const [isAuthenticated, setIsAuthenticated] = useState(true)

  function handleSignOut(){
    setIsAuthenticated(false)
  }
  function handleSignIn(){
    setIsAuthenticated(true)
  }

  return (
    <Menu inverted fixed="top">
      <Container>
        <Menu.Item name="home" />
        <Menu.Item name="messages" />

        <Menu.Menu position="right">
          <CartSummary />
          {isAuthenticated ? <SignedIn SignedOut={handleSignOut}/> : <SignedOut SignedIn={handleSignIn}/> }
        </Menu.Menu>
      </Container>

    </Menu>
  );
}
