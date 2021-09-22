import styled from 'styled-components';

export const NavbarContainer = styled.div`
    background-color:#02024e;
    padding-top: 0px;
    height:80px;
    padding-bottom: 15px;
    position:fixed;
    top:0px;
    left:0px;
    width:100%;
    z-index:4555444;
    .maktabLogo{
        color: white;
        font-size: 1.6rem;
        font-weight: 600;
    }   

    .me-auto{
        width:100%;
        background-color:rgba(0,0,0,0.7);
        text-align:center;
        .navLink{
            display: inline-block;
            color: white;
            font-size: 1rem;
            font-weight: 400;
            letter-spacing: 0px;
            margin-left: 2px;
            margin-top: 5px;
        }
        .navLink::after {
            display:block;
            content: '';
            border-bottom: solid 3px white;  
            transform: scaleX(0);  
            transition: transform 400ms ease-in-out;
        }
        .navLink:hover::after {
            transform: scaleX(1);
            //transition: width .1s;
        }
    }
    .searchIcon{
        color: white;
        font-size: 1.6rem;
        cursor: pointer;
        transition: 0.5s ease;
    }
    .searchIcon:hover{
        color: red;
    }
    .userIcon{
        color: white;
        font-size: 1.3rem;
        cursor: pointer;
        margin-left: 3px;0
        transform:translate(0px, 2px);
        transition: 0.5s ease;
    }
    .kirish{
        color: white;
        font-size: 1.2rem;
        margin-left: 10px;
        transform:translate(30px, -5px);
        display:inline-block;
    }
    .kirish:hover{
        border-top: 0;
    }
    
    @media (max-width: 786px){
        .kirish{
            margin-left: -60px;
position:relative;
top:-10px;


        }
        .userIcon{
            margin-left: 20px;
            font-size: 2rem;
        }
        .searchIcon{
            margin-left: 20px;
            margin-right: 20px;
            font-size: 2rem;
        }
        .me-auto{
            margin-left:0;
        }
    }
    @media (max-width: 992px){
        .kirish{
            margin-top:-15px;
            margin-left:-60px;
        }
        .userIcon{
            margin-left: 20px;
            font-size: 2rem;
        }
        .searchIcon{
            margin-left: 20px;
            margin-right: 20px;
            font-size: 2rem;
        }
        .me-auto{
            margin-top:30px;
            margin-left:0;
        }
    }
    @media (min-width:993px){
        .me-auto{
            background-color:transparent;
            
        }
        .kirish{
            margin-top:-20px;

        }
    }
    @media (min-width:1200px){
        .me-auto{
            margin-left:50px;
            margin-top:15px;
        }
        .kirish{
            margin-top:-15px;
            margin-right:-40px;
            
        }
    
    
    }
`;
