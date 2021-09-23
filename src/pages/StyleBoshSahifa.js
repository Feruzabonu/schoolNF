import styled from 'styled-components';


export const ContainerDashboard = styled.div`
    width: 100%;
    .yuqori{
        width: 100%;
        height: 70px;
        background-color: #02024e;
        position: relative;
        .first{
            position: absolute;
            display: flex;
            padding-top: 15px;
            padding-bottom: 15px;
            .iconEmail{
                font-size: 1.4rem;
                color: white;
                margin-right: 10px;
                margin-top: 5px;
            }
            p{
                color: white;
                font-weight: 600;
                font-size: 1.2rem;
            }
        }
        .second{
            position: absolute;
            display: flex;
            padding-top: 15px;
            margin-left: 69%;
            .iconEmail{
                font-size: 1.3rem;
                color: red;
                margin-right: 10px;
                margin-top: 5px;
            }
            p{
                color: white;
                font-weight: 600;
                font-size: 1.2rem;
            }
        }
        .userIcon{
            color: white;
            font-size: 2rem;
            cursor: pointer;
            margin-left: 1150px;
            margin-top: 20px;
            transition: 0.5s ease;
        }
        .userIcon:hover{
            color: blue;
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
        @media (max-width: 1000px) {
            .first{
                margin-left: -5%;
            }
            .second{
                // margin-left: 60%;
                display: none;
            }
        }
        @media (max-width: 820px) {
            .first{
                display: none;
            }
            .second{
                display: none;
            }
            .yuqori{
                height: 40px;
            }
        }
    }
    @media (max-width: 820px){
        .yuqori{
            height: 40px;
            background-color: green;
        }
    }
`;

export const NavbarContainer = styled.div`
    background-color: transparent;
    padding-top: 20px;
    padding-bottom: 20px;
    .maktabLogo{
        color: white;
        font-size: 1.6rem;
        font-weight: 600;
    }
    .me-auto{
         .navLink{
            display: inline-block;
            color: white;
            font-size: 1.1rem;
            font-weight: 500;
            letter-spacing: 1px;
            margin-left: 5px;
            
        }
        .navLink::after {
            display:block;
            content: '';
            border-bottom: solid 3px red;  
            transform: scaleX(0);  
            transition: transform 500ms ease-in-out;
        }
        .navLink:hover::after {
            transform: scaleX(1);
            //transition: width .1s;
        }
    }
    @media (max-width: 992px){
        .userIcon{
            margin-left: 20px;
            font-size: 2rem;
        }
       .me-auto{
           position:absolute;
           width:100%;
           background:#02024ec0;
           left:0px;
        } 

        .searchIcon{
            margin-left: 20px;
            margin-right: 20px;
            font-size: 2rem;
        }
    }
`;

export const XushKelibsiz = styled.div`
    margin-top: 5%;
    height:10vh;
    h1{
        margin-top: 5%;
        font-size: 4rem;
        font-family: "Playfair", sans-serif;
        font-weight: bold;
        color: white;
        z-index: 1000;
        letter-spacing: 8px;
    }
    .buttonn{
        margin-top: 2%;
        margin-bottom: 2%;
        font-size: 1.5rem;
        background-color: darkred;
        border: none;
        padding: 10px 20px;
        font-weight: bold;
        letter-spacing: 2px;
    }
    
    img{
        height:100%;
    }
    @media (max-width: 800px){
       height:500px
        h1{
            font-size: 3.54rem;
            letter-spacing: 2px;
        }
        .buttonn{
            font-size: 1.3rem;
            letter-spacing: 1.5px;
        }
    }
    @media (max-width: 600px){
        h1{
            margin-top: 7%;
            font-size: 2.8rem;
            letter-spacing: 0px;
        }
        .buttonn{
            font-size: 1.1rem;
            letter-spacing: 1.1px;
            padding: 5px 10px;
        }
    }
    @media (max-width: 500px){
        h1{
            margin-top: 0%;
            font-size: 2.3rem;
            letter-spacing: 0px;
        }
    }
`

export const ButtonWrapper = styled.div`
.drawBorder {
    
    color: white;
    transition: color 0.25s 0.0833333333s;
    position: relative;
  }
  .drawBorder::before, .drawBorder::after {
    border: 0 solid transparent;
    box-sizing: border-box;
    content: "";
    pointer-events: none;
    position: absolute;
    width: 0;
    height: 0;
    bottom: 0;
    right: 0;
  }
  .drawBorder::before {
    border-bottom-width: 4px;
    border-left-width: 4px;
  }
  .drawBorder::after {
    border-top-width: 4px;
    border-right-width: 4px;
  }
  .drawBorder:hover {
   background_color:white;
   color:#1EB2A6;
  }
  .drawBorder:hover::before, .drawBorder:hover::after {

    transition: border-color 0s, width 0.25s, height 0.25s;
    width: 100%;
    height: 100%;
  }
  .drawBorder:hover::before {
    transition-delay: 0s, 0s, 0.25s;
  }
  .drawBorder:hover::after {
    transition-delay: 0s, 0.25s, 0s;
  }
  
  .btn {
    background: none;
    border: none;
    cursor: pointer;
    line-height: 1.5;
    font: 700 1.2rem "Roboto Slab", sans-serif;
    padding: 1em 2em;
    letter-spacing: 0.05rem;
    background-color:#1EB2A6;
    color:white;
  }
  @media (max-width: 768px){
      .btn{
            padding: 0.5em 0.7em;
            font-size: 1rem;
      }
  }
  .btn:focus {
    outline: 2px dotted #55d7dc;
  }
`