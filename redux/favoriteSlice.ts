import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import { RootState } from './store'

export interface FavoriteState {
  items: Product[]
}

const initialState: FavoriteState = {
  items: []
}


export const favoriteSlice = createSlice({
  name: 'favorite',
  initialState,
  reducers: {
    // addToFavorite Function
    addToFavorite: (state: FavoriteState, action: PayloadAction<Product>) => {
        state.items = [...state.items, action.payload]
    },
    // removeFromFavorite Function
    removeFromFavorite: (state: FavoriteState, action: PayloadAction<{ id: string }>) => {
        const index = state.items.findIndex(
            (item: Product) => item._id === action.payload.id
        );

        let newFavorite = [...state.items];
        newFavorite.splice(index, 1)

        if(index >= 0){
            newFavorite.splice(index, 1)
        }else {
            console.log(`cant remove ${action.payload.id} from favorite`);
            
        }

        state.items = newFavorite
    },
  },
})

// Action creators are generated for each case reducer function
export const { addToFavorite, removeFromFavorite } = favoriteSlice.actions

// Selectors => retrieving items in state for my components
export const selectFavoriteItems = (state: RootState) => state.favorite.items

export const selectFavoriteItemsWithId = (state: RootState, id: string) => {
    state.favorite.items.filter((item: Product) => item._id === id);
}

export default favoriteSlice.reducer