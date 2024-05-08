import { Injectable } from '@angular/core';
import { ItemOrder } from '../../interfaces/item';
import { StateCreator, ZustandBaseService } from 'ngx-zustand';
import { createStore } from 'zustand';
import { createJSONStorage, persist } from 'zustand/middleware';

interface CartState {
  order: ItemOrder[];
  addToCart: (item: ItemOrder) => void;
  removeFromCart: (item: ItemOrder) => void;
  decreaseQuantity: (itemId: string) => void;
  increaseQuantity: (itemId: string) => void;
}

@Injectable({
  providedIn: 'root',
})
export class CartService extends ZustandBaseService<CartState> {
  initStore(): StateCreator<CartState> {
    return (set) => ({
      order: [],
      addToCart: (item: ItemOrder) => {
        set((state) => {
          const existingItemIndex = state.order.findIndex(
            (i) => i.id === item.id
          );
          if (existingItemIndex !== -1) {
            const updatedOrder = [...state.order];
            updatedOrder[existingItemIndex].quantity += item.quantity;
            updatedOrder[existingItemIndex].totalPrice =
              updatedOrder[existingItemIndex].price *
              updatedOrder[existingItemIndex].quantity;
            return { order: updatedOrder };
          } else {
            return { order: [...state.order, item] };
          }
        });
      },
      removeFromCart: (item: ItemOrder) => {
        set((state) => ({
          order: state.order.filter((product) => product.id !== item.id),
        }));
      },
      decreaseQuantity: (itemId: string) => {
        set((state) => {
          const updatedOrder = state.order
            .map((item) => {
              if (item.id === itemId) {
                if (item.quantity > 1) {
                  item.quantity -= 1;
                  item.totalPrice = item.price * item.quantity;
                  return item;
                } else {
                  return null;
                }
              }
              return item;
            })
            .filter((item): item is ItemOrder => item !== null);
          return { order: updatedOrder };
        });
      },
      increaseQuantity: (itemId: string) => {
        set((state) => {
          const updatedOrder = state.order.map((item) => {
            if (item.id === itemId) {
              item.quantity += 1;
              item.totalPrice = item.price * item.quantity;
            }
            return item;
          });
          return { order: updatedOrder };
        });
      },
    });
  }

  override createStore() {
    return createStore(
      persist<CartState>(this.initStore(), {
        name: 'cartStore',
        storage: createJSONStorage(() => sessionStorage),
      })
    );
  }
}
