import { AddAction, ClearAction, RemoveAction, cartReducer } from './CartProvider'; // Make sure to import the cartReducer function from the correct path

describe('cartReducer', () => {
  test('adds an item to the cart', () => {
    const initialState = {
      items: [],
      totalAmount: 0,
    };

    const action = {
      type: 'ADD',
      item: {
        id: 23,
        size: 'M',
        color: 'blue',
        price: 10,
        amount: 2,
        name: 'abc',
        image: '/def.png'
      },
    };

    const newState = cartReducer(initialState, action as AddAction);

    expect(newState.totalAmount).toBe(20);
    expect(newState.items.length).toBe(1);
    expect(newState.items[0]).toEqual(action.item);
  });

  test('removes an item from the cart', () => {
    const item = {
      id: 23,
      size: 'M',
      color: 'blue',
      price: 10,
      amount: 1,
      name: 'abc',
      image: '/def.png'
    }
    const initialState = {
      items: [item],
      totalAmount: 10,
    };

    const action = { item, type: "REMOVE" } as RemoveAction

    const newState = cartReducer(initialState, action);

    expect(newState.totalAmount).toBe(0);
    expect(newState.items.length).toBe(0);
  });

  test('clears the cart', () => {
    const item = {
      id: 23,
      size: 'M',
      color: 'blue',
      price: 10,
      amount: 8,
      name: 'abc',
      image: '/def.png'
    }
    const initialState = {
      items: [item],
      totalAmount: 80,
    };

    expect(item.amount * item.price).toBe(initialState.totalAmount);
    const newState = cartReducer(initialState, { type: "CLEAR" } as ClearAction);

    expect(newState.totalAmount).toBe(0);
    expect(newState.items.length).toBe(0);
  });
});