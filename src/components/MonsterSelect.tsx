import { Box, Typography } from '@mui/material';

import { useStore } from '~/store';

type Props = {
  name: string;
};

export const MonsterSelect = ({ name }: Props) => {
  const selectedMonster = useStore((state) => state.selectedMonster);
  const setSelectedMonster = useStore((state) => state.setSelectedMonster);

  return (
    <Box
      onClick={() => setSelectedMonster(name)}
      sx={{
        backgroundColor: selectedMonster === name ? 'primary.main' : 'none',
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
            .replaceAll(' ', '_')}_monsters_mhwilds_wiki_guide200px.png)`,
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
    </Box>
  );
};
