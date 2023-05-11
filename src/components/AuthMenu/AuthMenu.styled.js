import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const Paragraph = styled.div`
  margin: 0 15px;
`;

export const Button = styled.button`
    background-color: rgba(51, 51, 51, 0.05);
    border-radius: 8px;
    border-width: 0;
    color: #333333;
    cursor: pointer;
    display: inline-block;
    font-family: 'Haas Grot Text R Web', 'Helvetica Neue', Helvetica, Arial,
      sans-serif;
    font-size: 14px;
    font-weight: 500;
    line-height: 20px;
    list-style: none;
    margin: 0;
    padding: 10px 12px;
    text-align: center;
    transition: all 200ms;
    vertical-align: baseline;
    white-space: nowrap;
    user-select: none;
    -webkit-user-select: none;
    touch-action: manipulation;
  }
`;
