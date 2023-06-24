import { StatisticItem } from 'components';
import { StatisticsList, StatisticTitle } from './Statistics.styled';
import { FaRegThumbsUp } from 'react-icons/fa';
import { MdPeople, MdOutlineProductionQuantityLimits } from 'react-icons/md';
import { GiTreeDoor } from 'react-icons/gi';

export const Statistics = ({data}) => {
  return (
    <>
      <StatisticTitle>Main Statistics</StatisticTitle>
<StatisticsList>{data.map(({id, title, total}) => 
  <StatisticItem id={id} title={title} total={total}/>)}
  </StatisticsList>

    </>
  );
};
