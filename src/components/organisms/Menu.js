/* @flow */
import React from 'react'
import List, { ListItem } from 'material-ui/List'
import styled from 'styled-components'
import { Link } from 'react-router-dom'

const MenuContainer = styled.div`
  width: 100%;
  height: 100%;
`

export default function Menu() {
  return (
    <MenuContainer>
      <List>
        <ListItem>
          <Link to="/">Home</Link>
        </ListItem>
        <ListItem>
          <Link to="/counter">Counter</Link>
        </ListItem>
        <ListItem>
          <Link to="/about">About</Link>
        </ListItem>
      </List>
    </MenuContainer>
  )
}
