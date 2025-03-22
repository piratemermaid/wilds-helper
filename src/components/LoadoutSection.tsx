import { DataSection } from '~/components';

type Props = {
  title: string;
  data: string;
};

export const LoadoutSection = ({ title, data }: Props) => {
  if (!data) {
    return <DataSection title={title} data={['--']} />;
  }

  return <DataSection title={title} data={[data]} />;
};
