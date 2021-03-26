import styled from 'styled-components';

const TextStyles = styled.div`

  a {
    color: navy;
    font-size: 2rem;
    line-height: 120%;
  }

  li {
    list-style: none;
  }

  .coral-text {
    color: #f88379;
    text-shadow:
      -1px -1px 0 #000,
      1px -1px 0 #000,
      -1px 1px 0 #000,
      1px 1px 0 #000;
  }

  h3 {
    font-size: 2.6rem;
  }

  h4 {
    font-size: 3rem;
  }

  h5 {
    font-size: 2.6rem;
    line-height: 115%;
    padding: 0;
  }

  h6 {
    font-size: 2.8rem;
  }

  p, li {
    font-size: 1.4rem;
    line-height: 110%;
  }

  .font-v-sm {
    font-size: 1rem;
  }

  label.form-label {
    font-size: 2rem;
    line-height: 125%;
  }

  input[type='radio'] {
    position: absolute;
    top: 20%;
    transform: scale(1.4);
  }

  input[type='email'],
  input[type='password'],
  input[type='text'] {
    font-size: 1.4rem;
  }

  label.form-check-label {
    font-size: 1.6rem;
  }

  textarea {
    margin-top: 2rem;
    height: 10rem;
    font-size: 2.6rem;
  }

  small.form-text {
    font-size: 1.8rem;
    line-height: 125%;
  }

  time {
    font-size: 3rem;
  }

  .link-standard {
    font-size: 2rem
  }
`;

export default TextStyles;