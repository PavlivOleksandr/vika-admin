import React, { useState } from 'react';

// components
import Box from '../../components/Additional/Box';
import Button from '../../components/Antd/Button';
import Search from '../../components/Antd/Search';

const SofasPage = () => {
  const [searchValue, setSearchValue] = useState('');

  return (
    <Box direction='column'>
      <Box>
        <Button>Додати новий диван</Button>
        <Button>Завантажити прайс лист</Button>
      </Box>
      <Search placeholder='Знайти за назвою/артикулом' onChange={e => setSearchValue(e)} />
    </Box>
  );
};

export default SofasPage;
