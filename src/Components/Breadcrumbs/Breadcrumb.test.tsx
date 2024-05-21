import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import { Breadcrumb } from './Breadcrumb';
import { allProduct } from '../../../public/allProduct';

describe('cartReducer', () => {
  test('check breadcrumb category and item', () => {
    render(
      <BrowserRouter>
        <Breadcrumb product={allProduct[0]} />
      </BrowserRouter>
    );

    const categoryBreadcrumb = screen.getByTestId('breadcrumbCategory');
    const itemNameBreadcrumb = screen.getByTestId('breadcrumbItemName');
    expect(categoryBreadcrumb).toHaveTextContent(allProduct[0].category);
    expect(itemNameBreadcrumb).toHaveTextContent(allProduct[0].name);
  });
});