import React from 'react';
import { Col, Button } from 'react-bootstrap';
import styled from 'styled-components';
import { device } from '../styles/device';
import ColumnStyles from '../styles/ColumnStyles';
import ButtonStyles from '../styles/ButtonStyles';
import TextStyles from '../styles/TextStyles';

const MediaQueries = styled.div`

  @media ${device.custMobileWidth1} {
    h5 {
      font-size: 3.4rem;
    }
    a.btn-main {
      font-size: 3.4rem;
    }
    div.col-lg-12.button-col {
      padding-top: 3rem;
      padding-bottom: 3rem;
    }
  }

  @media ${device.mobileS} {
    h5 {
      font-size: 3.4rem;
      margin-top: 3rem;
      margin-bottom: 2rem;
    }
    a.btn-main {
      font-size: 4.2rem;
    }
    div.col-lg-12.button-col {
      padding-top: 1rem;
      padding-bottom: 3rem;
    }
  }

  @media ${device.custMobileWidth2} {
    h5 {
      font-size: 4.4rem;
    }
    a.btn-main {
      font-size: 4.2rem;
    }
    div.col-lg-12.button-col {
      padding-top: 2rem;
      padding-bottom: 1rem;
    }
  }

  @media ${device.mobileM} {
    h5 {
      font-size: 4rem;
      margin-bottom: 1.6rem;
    }
    a.btn-main {
      font-size: 4.5rem;
    }
    div.col-lg-12.button-col {
      padding-top: 2rem;
      padding-bottom: 1rem;
    }
  }

  @media ${device.mobileL} {
    h5 {
      font-size: 4.6rem;
    }
    a.btn-main {
      font-size: 5.7rem;
    }
  }

  @media ${device.tabletS} {
    h5 {
      font-size: 4.5rem;
    }
    a.btn-main {
      font-size: 4rem;
    }
    div.col-lg-12.button-col {
      padding-top: 5rem;
      padding-bottom: 4rem;
    }
  }

  @media ${device.tabletL} {
    h5 {
      font-size: 5rem;
      line-height: 140%;
    }
    a.btn-main {
      font-size: 4.5rem;
    }
    div.col-lg-12.button-col {
      padding-top: 5.5rem;
      padding-bottom: 4.8rem;
    }
  }

  @media ${device.laptop} {
    h5 {
      font-size: 5.8rem;
    }
    a.btn-main {
      font-size: 4.6rem;
    }
    div.col-lg-12.button-col {
      padding-bottom: 6rem;
    }
  }

  @media ${device.laptopL} {
    div.col-lg-12.button-col {
      padding-top: 7rem;
      padding-bottom: 8rem;
  }

  @media ${device.desktop} {
    h5 {
      font-size: 5.5rem;
    }
    a.btn-main {
      font-size: 4rem;
    }
    div.col-lg-12.button-col {
      padding-top: 8.5rem;
      padding-bottom: 10rem;
    }
  }
`;

const Landing = () => {
  return (
    <MediaQueries>
      <ColumnStyles>
        <ButtonStyles>
          <TextStyles>
            <Col lg={12} className='col-lg-12 message-col'>
              <h5>
                Enjoy using this app!
              </h5>
            </Col>

            <Col lg={12} className='col-lg-12 button-col'>
              <Button variant="main" href='/my-app-1'>
                Main App Function 1
              </Button>
            </Col>

            <Col lg={12} className='col-lg-12 button-col' style={{paddingTop: '1rem'}}>
              <Button variant="main" href='/my-app-2'>
                Main App Function 2
              </Button>
            </Col>
          </TextStyles>
        </ButtonStyles>
      </ColumnStyles>
    </MediaQueries>
  );
};

export default Landing;