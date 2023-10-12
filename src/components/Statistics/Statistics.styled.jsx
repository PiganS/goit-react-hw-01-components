import styled from 'styled-components';

export const StatisticsSection = styled.section`
  margin: 20px auto;
  width: 300px;
  text-align: center;
  border-radius: 10px;
  padding: 20px;
  background: #000000;
  background: -webkit-linear-gradient(to bottom, #434343, #000000);
  background: linear-gradient(to bottom, #434343, #000000);
  box-shadow: 10px 10px 31px -3px rgba(0,0,0,0.75);
 -webkit-box-shadow: 10px 10px 31px -3px rgba(0,0,0,0.75);
 -moz-box-shadow: 10px 10px 31px -3px rgba(0,0,0,0.75);
`;

export const Title = styled.h2`
  margin-bottom: 15px;
  color: #fff
`;

export const StatList = styled.ul`
  display: flex;
  justify-content: space-around;
  list-style-type: none;
  padding: 0;
`;

export const StatItem = styled.li`
  background-color: #fff;
  padding: 10px;
  border-radius: 5px;
  width: 18%;
  margin: 0 5px;
`;

export const Label = styled.span`
  display: block;
  margin-bottom: 8px;
  color: #5f5f5f;
`;

export const Value = styled.span`
  display: block;
  font-weight: bold;
  color: #363636;
`;