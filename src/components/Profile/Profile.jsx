import { Container, Avatar, DescriptionDiv, Name, Info, StatusList, StatusLi, Label, Quontity } from "./Profile.styled";


export const Profile = ({username ,tag ,location ,avatar ,stats })=>{
 return (
  <Container>
    <DescriptionDiv>
      <Avatar
        src={avatar}
        alt="User avatar"
      />
      <Name>{username}</Name>
      <Info>{tag}</Info>
      <Info>{location}</Info>
    </DescriptionDiv>
  
    <StatusList>
      <StatusLi>
        <Label>Followers</Label>
        <Quontity>{stats.followers}</Quontity>
      </StatusLi>
      <StatusLi>
        <Label>Views</Label>
        <Quontity>{stats.views}</Quontity>
      </StatusLi>
      <StatusLi>
        <Label>Likes</Label>
        <Quontity>{stats.likes}</Quontity>
      </StatusLi>
    </StatusList>
  </Container>
)};