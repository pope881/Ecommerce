import { render, screen } from '@testing-library/react'
import { Item } from './Item'
import '@testing-library/jest-dom'
import { BrowserRouter } from 'react-router-dom'

describe('Item', () => {
  test('shows three descriptions sections', () => {
    render(
      <BrowserRouter>
        <Item key={23} id={1} name="item test" clothes_type="blouse" image="/abc.svg" new_price={12} old_price={13} />
      </BrowserRouter>
    );

    expect(screen.getByTestId('itemImage')).toHaveProperty('src', 'http://localhost:3000/abc.svg');
    expect(screen.getByTestId('itemName')).toHaveTextContent('item test');
    expect(screen.getByTestId('oldPrice')).toHaveTextContent('$13');
    expect(screen.getByTestId('newPrice')).toHaveTextContent('$12');
  })
})
