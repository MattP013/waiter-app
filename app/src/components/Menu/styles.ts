import styled from "styled-components/native";

export const ProductContainer = styled.TouchableOpacity`
  flex-direction: row;
`;

export const ProductImage = styled.Image`
  height: 96px;
  width: 120px;
  border-radius: 8px;

`;

export const ProductDetails = styled.View`
    margin-left: 16px;
    flex: 1;
`;

export const Separator = styled.View`
  width: 100%;
  height: 1px;
  background: rgba(204,204,204,0.3);
  margin-top: 24px;
  margin-bottom: 24px;
`
export const AddToCartButton = styled.TouchableOpacity`
  position: absolute;
  bottom: 0;
  right: 0
`
