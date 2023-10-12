import { Container, Avatar, Description, Name, Info, StatsList, StatsLi, Label, Quontity } from "./Profile.styled";


export const Profile = ({username ,tag ,location ,avatar ,stats })=>{
 return (
  <Container>
    <Description>
      <Avatar
        src={avatar}
        alt="User avatar"
      />
      <Name>{username}</Name>
      <Info>{tag}</Info>
      <Info>{location}</Info>
    </Description>
  
    <StatsList>
      <StatsLi>
        <Label>Followers</Label>
        <Quontity>{stats.followers}</Quontity>
      </StatsLi>
      <StatsLi>
        <Label>Views</Label>
        <Quontity>{stats.views}</Quontity>
      </StatsLi>
      <StatsLi>
        <Label>Likes</Label>
        <Quontity>{stats.likes}</Quontity>
      </StatsLi>
    </StatsList>
  </Container>
)};