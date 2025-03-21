import React from 'react';
import { Box, Grid2, Stack, Typography } from '@mui/material';

import { monsters, monsterNameList } from '~/data';
import './App.css';

function App() {
  const [selectedMonsterName, setSelectedMonsterName] = React.useState('');

  const selectedMonsterData = monsters.find(
    (monster) => monster.name === selectedMonsterName
  );

  return (
    <Grid2
      container
      spacing={2}
      sx={{
        p: 2,
        width: '90vw',
        height: '90vh',
        overflowY: 'auto',
      }}
    >
      <Grid2
        size={{ sm: 8, md: 9 }}
        sx={{ pr: 2, borderRight: '1px solid', borderColor: 'primary.main' }}
      >
        <Grid2 container spacing={1.5}>
          {monsterNameList.map((name) => (
            <Grid2
              key={name}
              size={2}
              onClick={() => setSelectedMonsterName(name)}
            >
              <Box
                sx={{
                  p: 1,
                  m: 1,
                  backgroundColor: 'primary.main',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  '&:hover': {
                    cursor: 'pointer',
                    backgroundColor: 'primary.400',
                  },
                  height: '100%',
                  width: '100%',
                  minHeight: '80px',
                }}
              >
                {name}
              </Box>
            </Grid2>
          ))}
        </Grid2>
      </Grid2>
      <Grid2 size={{ sm: 4, md: 3 }}>
        {selectedMonsterData && (
          <Box
            sx={{
              p: 2,
              borderRadius: 1,
              alignItems: 'center',
            }}
          >
            <Stack spacing={1}>
              <Typography variant="h5" color="primary.100">
                {selectedMonsterData.name}
              </Typography>
              <DataSection
                title="Weapon"
                dataString={selectedMonsterData.weapon}
              />
              <DataSection
                title="Armor"
                dataString={selectedMonsterData.armor}
              />
              <DataSection
                title="Items"
                dataString={selectedMonsterData.items}
              />
              <DataSection
                title="Skills"
                dataString={selectedMonsterData.skills}
              />
            </Stack>
          </Box>
        )}
      </Grid2>
    </Grid2>
  );
}

type DataSectionProps = {
  title: string;
  dataString?: string;
};

const DataSection = ({ title, dataString }: DataSectionProps) => {
  return (
    <Grid2>
      <Typography variant="body2" color="secondary">
        {title}
      </Typography>
      <Typography variant="body1">
        {!!dataString ? dataString : '--'}
      </Typography>
    </Grid2>
  );
};

export default App;
