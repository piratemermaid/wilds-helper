import { Details } from '~/components/MonsterInfoPanel';

type Props = {
  title: string;
  data: string;
};

export const LoadoutSection = ({ title, data }: Props) => {
  return <Details title={title} data={[data ?? '--']} />;
};
