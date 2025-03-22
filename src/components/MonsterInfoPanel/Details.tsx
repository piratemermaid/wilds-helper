import { Grid2, List, Typography } from '@mui/material';

type Props = {
  title: string;
  data: string[];
};

export const Details = ({ title, data }: Props) => {
  return (
    <Grid2 sx={{ textAlign: 'left' }}>
      <Typography variant="body2" color="secondary">
        {title}
      </Typography>
      <List>
        {data.map((item, index) => (
          <Typography key={index} variant="body2" sx={{ pl: 1 }}>
            {item}
          </Typography>
        ))}
      </List>
    </Grid2>
  );
};
