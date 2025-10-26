import type { ReactElement } from 'react';
import { Search } from '@mui/icons-material';
import { IconButton } from '@mui/material';

const ProductSearch = (): ReactElement => {
  return (
    <form>
      <input
        type='text'
        id='product-search'
        name='product-search'
        placeholder='Rechercher un produit...'
        aria-label='Rechercher un produit'
      />
      <IconButton type='submit' aria-label='Rechercher'>
        <Search />
      </IconButton>
    </form>
  );
};

export default ProductSearch;
