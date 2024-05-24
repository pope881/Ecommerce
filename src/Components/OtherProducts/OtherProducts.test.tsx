import { render, screen } from '@testing-library/react';
import { OtherProducts } from './OtherProducts';
import { dataProductWomen } from '../../../public/dataWomen';
import { BrowserRouter } from 'react-router-dom';

describe('other products', () => {
  test('checks other products length', () => {
    render(
      <BrowserRouter>
        <OtherProducts />
      </BrowserRouter>
    );


    const items = screen.getAllByTestId('item');
    expect(items.length).toEqual(dataProductWomen.length);
  })
})