import styled from "styled-components/native";
import { Platform, StatusBar } from "react-native";
const isAndroid = Platform.OS === 'android';

export const Container = styled.SafeAreaView`
  margin-top: ${isAndroid ? `${StatusBar.currentHeight}}px` : '0'};
  background: #fafafa;
  flex: 1
`
export const CategoriesContainer = styled.View`
  height: 73px;
  margin-top: 34px;
  /* align-items: center;
  justify-content: center; */
`
export const MenuContainer = styled.View`
  flex: 1 0 auto;
`;

export const Footer = styled.View`
  min-height: 110px;
  background: #ffff;
  padding: 16px 24px;

`;

export const FooterContainer = styled.SafeAreaView`
`;

export const CenteredContainer = styled.View`
  justify-content: center;
  align-items: center;
  flex: 1;
`
