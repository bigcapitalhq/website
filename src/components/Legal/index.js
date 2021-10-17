import styled from "styled-components"
import { Container } from "react-bootstrap"
import { breakpoints } from "../../common/breakpoints"

export const LegalContainer = styled.div`
  display: flex;
`
export const LegalSidebar = styled.div`
  width: 30%;
  padding-left: 30px;
  font-size: 14px;

  @media ${breakpoints.down.lg} {
    display: none;
  }
`
export const LegalContent = styled.div`
  width: 70%;

  @media ${breakpoints.down.lg} {
    width: 100%;
  }
`
export const LegalContentTitle = styled.h1`
  font-size: 2.6rem;
  font-weight: 700;
  margin: 0 0 1.2rem 0;
  color: #545e89;

  @media ${breakpoints.down.xl} {
    font-size: 2.2rem;
  }
  @media ${breakpoints.down.sm} {
    font-size: 1.8rem;
  }
`

export const LegalContentBody = styled.div``

export const LegalSidebarItem = styled.a`
  margin-bottom: 0.6rem;
  display: block;
  color: inherit;
`

export const LegalH2 = styled.h2`
  color: #545e89;
  font-size: 1.3rem;
  font-weight: 700;
  margin: 2rem 0;
  letter-spacing: 2px;
  text-transform: uppercase;
`

export const LegalH3 = styled.h2`
  color: #545e89;
  font-size: 1.1rem;
  font-weight: 700;
  margin: 2rem 0;
  letter-spacing: 2px;
  text-transform: uppercase;
`

export const LegalTitle = styled.h1`
  font-size: 3rem;
  font-weight: 700;
  margin: 0 0 4rem 0;

  @media ${breakpoints.down.xl} {
    font-size: 2.8rem;
    margin-bottom: 3.4rem;
  }
  @media ${breakpoints.down.lg} {
    font-size: 2.4rem;
  }
  @media ${breakpoints.down.sm} {
    font-size: 1.8rem;
    margin-bottom: 2rem;
  }
`

export const LegalHeader = styled.div``

export const LegalPager = styled(Container)`
  margin: 4rem auto;
`
