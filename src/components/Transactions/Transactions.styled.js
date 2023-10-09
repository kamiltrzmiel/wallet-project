import styled from 'styled-components';

export const TransactionsTable = styled.table`
  border-collapse: collapse;
  border-spacing: 0;
  border: none;
  min-width: 704px;
  overflow-y: auto;

  @media (min-width: ${props => props.theme.breakpoints.desktop}) {
    width: 100%;
  }
`;

export const TransactionsTableHead = styled.thead`
  @media screen and (orientation: landscape) {
    position: sticky;
  }
  font-size: 18px;
  font-weight: 700;
  position: sticky;
  top: 0;
  z-index: 1000;

    @media (min-width: ${props => props.theme.breakpoints.tablet}) {
      background: linear-gradient(
        180deg,
        rgba(255, 232, 227, 1) 0%,
        rgba(251, 235, 233, 1) 100%
      );
    }

    @media (min-width: ${props => props.theme.breakpoints.desktop}) {
      background: #fee8e3;
    }

    @media (min-width: ${props => props.theme.breakpoints.extraLarge}) {
      background-color: #f1f2f7;
    }
  }

  & th {
    position: relative;
    z-index: 2;
  }
`;

export const TransactionsTableHeadRow = styled.tr`
  vertical-align: middle;
  overflow: hidden;
`;

export const TransactionsTableHeader = styled.th`
  padding: 20px 0px 20px 20px;
  text-align: left;
  background-color: var(--background-light);

  &:first-child {
    border-top-left-radius: 40px;
    border-bottom-left-radius: 40px;
  }

  &:nth-child(2) {
    text-align: center;
    padding: 12.5px 20px 12.5px 0;
  }

  &:last-child {
    border-top-right-radius: 40px;
    border-bottom-right-radius: 40px;
  }

  &:nth-child(5) {
    text-align: right;
    padding: 12.5px 15px 12.5px 0;
  }
`;

export const TransactionTableData = styled.td`
  padding: 12.5px 0px 12.5px 20px;
  border: none;
  border-bottom: solid 1px var(--background-gray);
  box-shadow: 0px 1px 0px var(--background-light);
  vertical-align: middle;

  &:nth-child(2) {
    text-align: center;
    padding: 12.5px 20px 12.5px 0;
  }

  &:nth-child(4) {
    max-width: 300px;
    min-width: 100px;
    -ms-word-break: break-all;
    word-break: break-all;
    word-break: break-word;
    -webkit-hyphens: auto;
    -moz-hyphens: auto;
    hyphens: auto;
  }

  &:nth-child(5) {
    text-align: right;
    font-weight: 700;
    white-space: nowrap;
    padding: 12.5px 15px 12.5px 0;
  }

  &:last-child {
    text-align: center;
    min-width: 140px;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  &::first-letter {
    text-transform: uppercase;
  }
`;

export const TransactionsBodyHeadRow = styled.tr`
  &:hover {
    background-color: var(--background-transactions-el);
    border-radius: 40px;
  }
`;

// export const EditBtn = styled.button`
// `
