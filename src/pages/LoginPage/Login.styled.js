import styled from 'styled-components';

export const Form = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Div = styled.div`
  margin: 15px;
  text-align: center;
`;

export const Button = styled.button`
  align-items: center;
  background-color: #ffffff;
  border: 1px solid rgba(0, 0, 0, 0.1);
  border-radius: 0.25rem;
  box-shadow: rgba(0, 0, 0, 0.02) 0 1px 3px 0;
  box-sizing: border-box;
  color: rgba(0, 0, 0, 0.85);
  cursor: pointer;
  display: inline-flex;
  font-family: system-ui, -apple-system, system-ui, 'Helvetica Neue', Helvetica,
    Arial, sans-serif;
  font-size: 14px;
  font-weight: 600;
  justify-content: center;
  line-height: 1.25;
  margin: 10px;
  min-height: 3rem;
  padding: 0px 20px;
  position: relative;
  text-decoration: none;
  transition: all 250ms;
  user-select: none;
  -webkit-user-select: none;
  touch-action: manipulation;
  vertical-align: baseline;
  width: auto;
`;

export const TextField = styled.input`
  padding: 6px 12px;
  font-size: 16px;
  font-weight: 400;
  line-height: 1.5;
  color: #212529;
  background-color: #fff;
  background-clip: padding-box;
  border: 1px solid #ced4da;
  appearance: none;
  border-radius: 4px;
  transition: border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;
  :focus {
    color: #212529;
    background-color: #fff;
    border-color: #86b7fe;
    outline: 0;
    box-shadow: 0 0 0 0.25rem rgb(13 110 253 / 25%);
  }
`;

/* CSS */

// .button-6:hover,
// .button-6:focus {
//   border-color: rgba(0, 0, 0, 0.15);
//   box-shadow: rgba(0, 0, 0, 0.1) 0 4px 12px;
//   color: rgba(0, 0, 0, 0.65);
// }

// .button-6:hover {
//   transform: translateY(-1px);
// }

// .button-6:active {
//   background-color: #F0F0F1;
//   border-color: rgba(0, 0, 0, 0.15);
//   box-shadow: rgba(0, 0, 0, 0.06) 0 2px 4px;
//   color: rgba(0, 0, 0, 0.65);
//   transform: translateY(0);
// }
