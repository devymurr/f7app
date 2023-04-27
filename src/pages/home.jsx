import React, { useState } from 'react'
import {
  Page,
  Navbar,
  NavTitle,
  NavTitleLarge,
  Link,
  Toolbar,
  Block,
  List,
  ListItem,
  ListInput,
  Button,
} from 'framework7-react'

import store from '../js/store'

const HomePage = () => {
  store.dispatch('getUsers')

  const [name, setName] = useState('')
  const [phone, setPhoneNumber] = useState('')
  const [carNumber, setCarNumber] = useState('')

  const addUser = () => {
    store.dispatch('addUser', { name, phone, carNumber })
  }

  return (
    <Page name="home">
      {/* Top Navbar */}
      <Navbar large>
        <NavTitle>My App</NavTitle>
        <NavTitleLarge>My App</NavTitleLarge>
      </Navbar>
      {/* Page content */}
      <List
        strongIos
        dividersIos
        insetIos
      >
        <ListInput
          label="ФИО"
          type="text"
          value={name}
          onChange={({ target }) => setName(target.value)}
          placeholder="Иванов Иван Иванович"
          clearButton
        />

        <ListInput
          label="Номер телефона"
          value={phone}
          onChange={({ target }) => setPhoneNumber(target.value)}
          placeholder="+7 999 999 99 99"
          clearButton
        />
        <ListInput
          label="Номер автомобиля"
          value={carNumber}
          onChange={({ target }) => setCarNumber(target.value)}
          placeholder="AA 999 AAA"
          clearButton
        />
      </List>

      <Button
        onClick={addUser}
        raised
      >
        Add
      </Button>

      <List
        dividersIos
        mediaList
        outlineIos
        strongIos
      >
        {store.state.users.map((user) => (
          <ListItem
            title={user.name}
            key={user._id}
          ></ListItem>
        ))}
      </List>
    </Page>
  )
}
export default HomePage
