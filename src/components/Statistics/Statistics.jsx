import { StatisticItem } from 'components';
import { StatisticsList, StatisticTitle } from './Statistics.styled';
import { FaRegThumbsUp } from 'react-icons/fa';
import { MdPeople, MdOutlineProductionQuantityLimits } from 'react-icons/md';
import { GiTreeDoor } from 'react-icons/gi';

const items = [
  <FaRegThumbsUp />,
  <MdPeople />,
  <MdOutlineProductionQuantityLimits />,
  <GiTreeDoor />,
];

export const Statistics = ({ stats }) => {
  return (
    <>
      <StatisticTitle>Main Statistics</StatisticTitle>
      <StatisticsList>
        {stats.map(({ id, title, total }, index) => {
          return (
            <StatisticItem
              id={id}
              title={title}
              total={total}
              icon={items[index]}
            />
          );
        })}
      </StatisticsList>
    </>
  );
};
