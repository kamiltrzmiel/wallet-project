import styled from '@emotion/styled';
import Select from 'react-dropdown-select';

export const StyledSelect = styled(Select)`
  border-radius: 30px;
  border: 1px solid var(--font-color-dark);
  transition: all 0.3s ease-out;
  margin-bottom: 20px;
  height: 50px;

  .react-dropdown-select-input {
    overflow: hidden;
    font-size: 16px;

    &::placeholder {
      color: var(--font-color-dark);
    }
  }

  .react-dropdown-select-content {
    padding: 14px 36px 14px 20px;
    color: var(--font-color-dark);
    font-family: 'Circe', sans-serif;
    font-size: 16px;
    font-weight: 400;
    line-height: normal;
  }

  .react-dropdown-select-item {
    color: var(--font-color-dark);
    font-family: 'Circe', sans-serif;
    font-size: 16px;
    font-weight: 400;
  }
};`;
