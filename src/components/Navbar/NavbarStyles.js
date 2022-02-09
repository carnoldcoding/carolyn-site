import styled from 'styled-components'

export const NavContainer = styled.nav`
    display: flex;
    height: 5vh;
    background: var(--nav-background);
    position: sticky;

    padding: 1rem 5rem;
    box-shadow: 0 1px 3px 1px #333;
`

export const LogoWrapper = styled.div`
    flex: 1 1 20%;
    display: flex;
    justify-content: flex-start;
`

export const Logo = styled.img`
`

export const ItemsWrapper = styled.div`
    display: flex;
    flex: 1 1 90%;
    justify-content: flex-end;
    align-items: center;
    gap: 3rem;
    font-size: 1.2rem;
`

export const NavLink = styled.div`

`