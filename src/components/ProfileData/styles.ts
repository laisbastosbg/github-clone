import styled, { css } from 'styled-components';

import {
  RiGroupLine,
  RiBuildingLine,
  RiMapPin2Line,
  RiMailLine,
  RiLinksLine
} from 'react-icons/ri';

export const Container = styled.div``;

export const Flex = styled.div`
  display: flex;
  align-items: center;

  > div {
    margin-left: 24px;

    > h1 {
      font-size: 26px;
      line-height: 1.25;
      color: var(--gray-dark);
      font-weight: 300;
    }

    > h2 {
      font-size: 20px;
      color: var(--username);
      font-weight: 300;
    }
  }
`;

export const Avatar = styled.img`
  width: 16%auto;
  border-radius: 50%50%;
`;

export const Row = styled.ul`
  display: flex;
  align-items: center;

  > li {
    display: flex;
    align-items: center;

    > span {
      font-size: 14px;
      color: var(--gray);
    }

    > * {
      margin-right: 5px;
    }
  }

  b {
    margin-bottom: -2.5px;
  }
`;

const iconCSS = css`
  width: 16px;
  height: 16px;
  fill: var(--icon);
  flex-shrink: 0;
`;

export const PeopleIcon = styled(RiGroupLine)`${iconCSS}`;

export const Column = styled.ul`${iconCSS}`;

export const CompanyIcon = styled(RiBuildingLine)`${iconCSS}`;

export const LocationIcon = styled(RiMapPin2Line)`${iconCSS}`;

export const EmailIcon = styled(RiMailLine)`${iconCSS}`;

export const BlogIcon = styled(RiLinksLine)`${iconCSS}`;
