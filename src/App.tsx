import { Box, Grid2, Stack, Typography } from '@mui/material';

import { Details, LoadoutSection } from './components/MonsterInfoPanel';
import { useStore } from '~/store';
import { monsters, monsterNameList } from '~/data';
import './App.css';
import { MonsterSelect } from './components/MonsterSelect';

function App() {
  const selectedMonster = useStore((state) => state.selectedMonster);

  const selectedMonsterData = monsters.find(
    (monster) => monster.name === selectedMonster
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
            <Grid2 key={name} size={2}>
              <MonsterSelect name={name} />
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
              <Typography variant="h5" color="primary.main">
                {selectedMonsterData.name}
              </Typography>
              <Typography
                variant="h6"
                sx={{
                  fontWeight: 600,
                  textTransform: 'uppercase',
                  fontSize: '1rem',
                }}
              >
                Loadouts
              </Typography>
              <LoadoutSection
                title="Items"
                data={selectedMonsterData.loadouts?.items ?? []}
              />
              <LoadoutSection
                title="Armor"
                data={selectedMonsterData.loadouts?.armor ?? []}
              />
              <LoadoutSection
                title="Palico Armor"
                data={selectedMonsterData.loadouts?.palicoArmor ?? []}
              />

              <Typography
                variant="h6"
                sx={{
                  fontWeight: 600,
                  textTransform: 'uppercase',
                  fontSize: '1rem',
                }}
              >
                Defense
              </Typography>

              <Details
                title="Weapon Elements"
                data={selectedMonsterData.weaponElements as string[]}
              />
              <Details
                title="Resist Elements"
                data={selectedMonsterData.resistElements as string[]}
              />
              <Details title="Items" data={selectedMonsterData.items} />
              <Details title="Skills" data={selectedMonsterData.skills} />
              <Typography
                variant="h6"
                sx={{
                  fontWeight: 600,
                  textTransform: 'uppercase',
                  fontSize: '1rem',
                }}
              >
                Monster Info
              </Typography>
              <Details title="Abilities" data={selectedMonsterData.abilities} />
            </Stack>
          </Box>
        )}
      </Grid2>
    </Grid2>
  );
}

export default App;
