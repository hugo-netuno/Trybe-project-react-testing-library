import React from 'react';
import renderWithRouter from '../renderWithRouter';
import About from '../components/About';

test('Information about pokemons', () => {
  const { getByText } = renderWithRouter(<About />, '/about');
  const info = getByText(/digital encliclopedia containing all Pokémons/i);

  expect(info).toBeInTheDocument();
});

test('A página deve conter um heading `h2` com o texto `About Pokédex`', () => {
  const { getByText, container } = renderWithRouter(<About />);

  const h2 = container.querySelector('h2');
  expect(h2).toBeInTheDocument();

  const heading = getByText(/About Pokédex/i);
  expect(h2).toBe(heading);
});

test('A página deve conter dois parágrafos com texto sobre a Pokédex', () => {
  const { container } = renderWithRouter(<About />);

  const paragraph = container.querySelectorAll('p');
  expect(paragraph.length).toBe(2);
});

test('A página deve conter a seguinte imagem de uma Pokédex', () => {
  const { container } = renderWithRouter(<About />);
  const image = container.querySelector('img');
  const imageUrl = 'https://cdn.bulbagarden.net/upload/thumb/8/86/Gen_I_Pok%C3%A9dex.png/800px-Gen_I_Pok%C3%A9dex.png';

  expect(image).toBeInTheDocument();
  expect(image).toHaveAttribute('src', imageUrl);
});
