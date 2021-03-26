import styled from 'styled-components';

const RowStyles = styled.div`

  div.row.centered-row-form {
    justify-content: center;
    padding-top: 6.5rem;
    margin-left: 2.5rem;
    width: 80%;
  }

  div.row.left-justified-row-form {
    justify-content: left;
    padding-top: 6.5rem;
    margin-left: .5rem;
    width: 95%;
  }

  div.row.centered-row-advice {
    justify-content: center;
    padding-top: 6.5rem;
    margin-left: .5rem;
    width: 100%;
  }

  div.advice-container {
    margins: 0;
    padding-bottom: 2em;
  }

  div.row.left-justified-row-results {
    justify-content: left;
    padding-left: 1rem;
    padding-top: 1rem;
    padding-bottom: 1rem;
    overflow:hidden; 
    overflow-y:scroll;
  }
`;

export default RowStyles;