import styled from "styled-components";

export const Box = styled.div`
  padding: 50px 0px 40px;
  background: black;
  position: relative;
//   width: 100%;

  @media (max-width: 1000px) {
    padding: 70px 30px;
  }
`;

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center  ;
  max-width: 1000px;
  margin: 0 auto;
`;

export const Column = styled.div`
  display: flex;
  flex-direction: column;
  text-align: center;
  margin-bottom: 0;
`;

export const Row = styled.div`
  margin: 30px 5px 50px;
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(185px, 1fr));
  grid-gap: 30px;

  @media (max-width: 1000px) {
    grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  }
`;

export const FooterLink = styled.a`
  color: #fff;
  margin-bottom: 20px;
  font-size: 18px;
  text-decoration: none;

  &:hover {
    color: green;
    transition: 200ms ease-in;
  }
`;

export const Heading = styled.p`
  font-size: 24px;
  color: #fff;
  margin-bottom: 40px;
  font-weight: bold;
`;




























/* .last{
    background-color: #646464;
    height: 140px;
    margin-top: 20px;
}

footer > p{
    padding-top: 10px;
    color: #d8d5d5;
    margin-top: 20px;
}
.footer__links{
    display: flex;
    justify-content: center;
    align-items:center;
  
}
.footer__links > p{
    margin-top: 20px;
    width: 100px;
    color: #fff;
}
.footer__links > p > i{
    background-color: #817e7e;
    padding: 15px;
    font-size: 20px;
}
@media screen and (max-width: 360px){
    .last{
        background-color: #646464;
        height: 270px;
    }
} */
