import styled from 'styled-components';

const URLInputStyled = styled.input`
  background-color: #ffffff;
  font-size: 20px;
  width: 60%;
  margin: 0 auto;
  vertical-align: middle;
  border: 1px solid #cccccc;
  /* Inner box padding */
  padding-top: 10px;
  padding-bottom: 10px;
  padding-left: 16px;
  padding-right: 16px;
  /* Rounded corners */
  border-bottom-left-radius: 4px;
  border-bottom-right-radius: 4px;
  border-top-left-radius: 4px;
  border-top-right-radius: 4px;
  box-shadow: 0 1px 1px rgba(0, 0, 0, 0.075) inset;
  transition: border 0.2s linear 0s, box-shadow 0.2s linear 0s;

  &:focus {
    border-color: rgba(82, 168, 236, 0.8);
    box-shadow: 0 1px 1px rgba(0, 0, 0, 0.075) inset, 0 0 10px rgba(82, 168, 236, 0.6);
    outline: 0 none;
  }
`;

function URLInput() {
  return <URLInputStyled />;
}

export default URLInput;
