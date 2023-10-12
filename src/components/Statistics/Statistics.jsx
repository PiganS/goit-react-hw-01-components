import { StatisticsSection, Title, StatList, StatItem, Label, Value } from "./Statistics.styled";

export const Statistics = ({title ,stats}) => {
    return (
<StatisticsSection >
  {title && <Title>{title}</Title>}
  <StatList>
    {stats.map(({ id, label, percentage }) => (
        <StatItem key={id}>
         <Label>{label}</Label>
         <Value>{percentage}%</Value>
       </StatItem>
    ))}
  </StatList>
</StatisticsSection>
)};
