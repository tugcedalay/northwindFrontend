import React, { useState } from 'react';
import { Menu, Container } from 'semantic-ui-react'
import CartSummary from './CartSummary';
import SignedOut from './SignedOut';
import SignedIn from './SignedIn';
import { unstable_HistoryRouter, useNavigate } from 'react-router-dom';

export default function Navi() {
  const [isAuthenticated, setIsAuthenticated] = useState(true)
  // history yerine useNavigate kullanıldı
  let navigate = useNavigate()

  function handleSignOut(){
    setIsAuthenticated(false)
    navigate("/")
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
