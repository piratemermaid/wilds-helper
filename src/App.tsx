import { useState } from 'react';
import { Box } from '@mui/material';

import { monsters } from '~/data';
import './App.css';

function App() {
  const [count, setCount] = useState(0);

  console.log(monsters);

  return <Box>app</Box>;
}

export default App;
