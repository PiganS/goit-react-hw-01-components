import styled from 'styled-components';

export const Container = styled.div`
  width: 300px;
  border-radius: 10px;
  padding: 20px;
  font-family: 'Arial', sans-serif;
  margin: 20px auto;
  background: #000000;
  background: -webkit-linear-gradient(to bottom, #434343, #000000);
  background: linear-gradient(to bottom, #434343, #000000);
  box-shadow: 10px 10px 31px -3px rgba(0,0,0,0.75);
 -webkit-box-shadow: 10px 10px 31px -3px rgba(0,0,0,0.75);
 -moz-box-shadow: 10px 10px 31px -3px rgba(0,0,0,0.75);


`;

export const Description = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 20px;
`;

export const Avatar = styled.img`
  width: 120px;
  height: 120px;
  border-radius: 50%;
  margin-bottom: 10px;
  background-color: #ffffff;
`;

export const Name = styled.p`
  font-size: 20px;
  font-weight: bold;
  margin-bottom: 5px;
  color: #fff
`;

export const Info = styled.p`
  font-size: 16px;
  color: #ffffffb9;
  margin-bottom: 5px;
`;

export const StatsList = styled.ul`
  display: flex;
  gap: 10px;
  list-style-type: none;
  padding: 0;
`;

export const StatsLi = styled.li`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  border: 1px solid #eee;
  padding: 10px;
  background-color: #ffffff;
  border-radius: 10px;
`;

export const Label = styled.span`
  font-size: 14px;
  color: #5f5f5f;
  margin-bottom: 5px;
`;

export const Quontity = styled.span`
  font-size: 18px;
  color: #363636;
`;
