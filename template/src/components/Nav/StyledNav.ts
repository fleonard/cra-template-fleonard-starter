import styled from "styled-components/macro";
import { Box, List } from "@material-ui/core";

const StyledNav = styled(List)`
  ${({ theme }) => `
    background-color: ${theme.palette.primary.main};
    display: flex;
    padding: 0 20px;
  `}
`;

const NavItem = styled(Box)`
  ${({ theme }) => `
    align-items: stretch
    box-sizing: content-box;
    padding: 20px;

    a {
      align-items: center;
      color: ${theme.palette.primary.contrastText};
      display: flex;
      justify-content: center;
      text-decoration: none;
      text-transform: uppercase;

      &:hover {
        color: ${theme.palette.primary.dark};
      }
    }
  `}
`;

export { StyledNav, NavItem };
