import styled from 'styled-components'

export const StyledMobileNavBar = styled.nav`
    position: absolute;     
    width: 100%;
    height: 100vh;
    top: 0;
    left: 0;
    padding-top: 20px;
    z-index: 9;
    background: white;
    transform: ${({ open }) => open ? 'translateY(0)' : 'translateY(-120%)'};
    transition: transform 0.3s ease-in-out;

img.weblogo {
    display: block;
    margin-left: auto;
    margin-right: auto;
    width: 250px;
}

ul {
    list-style-type: none;
    margin: 0;
    padding: 0;
    width: 250px;
    justify-content: center;
    margin-left: auto;
    margin-right: auto;
}

.navItemsMain li{
    font-variant: small-caps;
    font-family: 'Source Sans Pro', sans-serif;
    color: white;
    font-weight: 500;
    font-size: 20px;
    letter-spacing: 2px;
    display: inline-block;
    text-decoration: none;
    padding-left: 0px;
    padding-bottom: 6px;
}

#youngAdult{
    margin-top: -1px;
}

#navIcons {
    margin-left: 35%
}

#navIcons a {
    padding-left: 5px;
    color: black;
}


#navIcons a:hover {
    color: #5ea1a9;
}

    
`
