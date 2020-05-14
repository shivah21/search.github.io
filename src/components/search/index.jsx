import React, { Component, useState } from 'react'
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import SearchBar from 'material-ui-search-bar';
import Container from '@material-ui/core/Container';
import Modal from '@material-ui/core/Modal';

const ExtendedSearchBar = props => {
  const [query, setQuery] = useState('');
  const [items, setItems] = useState([]);
  const [isModalOpen, setModalOpen] = useState(false);
  const [modalContent, setModalContent] = useState(false);
  const [searchErrors, setSearchErrors] = useState('');
  const category = props.category;

  const handleModalState = item => {
    setModalOpen(true);
    setModalContent(item);
  }
  const handleChange = queryStr => {
    setQuery(queryStr);
    fetch(`https://swapi.dev/api/${category}/`)
      .then(res => res.json())
      .then(res => {
        if (res.results) {
          const planets = res.results
            .filter(planet => planet.name.toLowerCase().includes(queryStr.toLowerCase()))
          console.log(planets);
          if (queryStr.trim().length && planets.length) {
            setItems(planets.sort(function (a, b) { return a.population - b.population }));
            setSearchErrors('');
          } else {
            setItems([]);
            setSearchErrors('Enter valid search keyword');
          }
        }
      })
      .catch(error => {
        console.log("API error", error);
      });
  }

  return (
    <Container maxWidth="sm">
      <SearchBar
        value={query}
        onChange={handleChange}
        onRequestSearch={() => console.log(query)}
      />
      <ul className={'suggestionBox'}>
        {items.map((item, index) => (
          <List component="nav" aria-label="main mailbox folders" key={index}>
            <ListItem button onClick={() => handleModalState(item)}>
              <ListItemText primary={item.name} />
              <span className={'suggestionItem'}>Population: {item.population}</span>
            </ListItem>
          </List>
        ))}
        <Modal
          open={isModalOpen}
          onClose={() => setModalOpen(!isModalOpen)}>
          <div className={'modalBody'}>
            <h1>{category} {modalContent.name}</h1>
            <h3>Diameter: {modalContent.diameter}</h3>
            <h3>Gravity: {modalContent.gravity}</h3>
            <h3>Terrain: {modalContent.terrain}</h3>
            <h3>Climate: {modalContent.climate}</h3>
            <h3>Population: {modalContent.population}</h3>
            <h3>Rotation Speed: {modalContent.rotation_period}</h3>
          </div>
        </Modal>
      </ul>
      {searchErrors}
    </Container>
  )
}


export default ExtendedSearchBar;