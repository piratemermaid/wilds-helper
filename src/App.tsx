import { Box, Grid2, Stack, Typography } from '@mui/material';

import { DataSection, LoadoutSection } from './components';
import { useStore } from '~/store';
import { monsters, monsterNameList } from '~/data';
import './App.css';

function App() {
  const selectedMonster = useStore((state) => state.selectedMonster);
  const setSelectedMonster = useStore((state) => state.setSelectedMonster);

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
            <Grid2
              key={name}
              size={2}
              onClick={() => setSelectedMonster(name)}
              sx={{
                backgroundColor:
                  selectedMonster === name ? 'primary.main' : 'none',
                borderRadius: 2,
                '&:hover': {
                  cursor: 'pointer',
                  backgroundColor: 'secondary.main',
                },
              }}
            >
              <Box
                sx={{
                  p: 1,
                  m: 1,
                  backgroundSize: 'cover',
                  backgroundPosition: 'center',
                  backgroundImage: `url(https://monsterhunterwilds.wiki.fextralife.com/file/Monster-Hunter-Wilds/${name
                    .toLowerCase()
                    .replaceAll(
                      ' ',
                      '_'
                    )}_monsters_mhwilds_wiki_guide200px.png)`,
                  minHeight: '80px',
                }}
              />
              <Typography
                sx={{
                  textShadow: '2px 2px 10px rgba(0, 0, 0, 0.9)',
                }}
              >
                {name}
              </Typography>
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

              <DataSection
                title="Weapon Elements"
                data={selectedMonsterData.weaponElements as string[]}
              />
              <DataSection
                title="Resist Elements"
                data={selectedMonsterData.resistElements as string[]}
              />
              <DataSection title="Items" data={selectedMonsterData.items} />
              <DataSection title="Skills" data={selectedMonsterData.skills} />
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
              <DataSection
                title="Abilities"
                data={selectedMonsterData.abilities}
              />
            </Stack>
          </Box>
        )}
      </Grid2>
    </Grid2>
  );
}

export default App;
