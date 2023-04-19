import styled from "styled-components";
import Navbar from "../components/Navbar";
const OwnerPage = () => {
    return (
        <Content>
            <Navbar/>
            <div className="owner-container">
            
                <h1>Pang - Group D - 42</h1>
                <div className="img-container">
                    <img src="https://64.media.tumblr.com/12d458cee1b17d6feb2d0dfce7f4e8d8/ccf53d2652102698-f9/s1280x1920/acc8ea083eae769e03dd7499a3cc7d85ae287cbc.pnj"/>
                    <div className="text-container">
                        <p>I am Sireethon and I love Rozemyne</p>
                    </div>
            
                </div>
                
            </div>
        </Content>
        
    );
}

const Content = styled.div`
  @import url('https://fonts.googleapis.com/css2?family=Spline+Sans+Mono:wght@300;400;600&display=swap');
  font-family: 'Spline Sans Mono', monospace;
  color: black;
  

`;

export default OwnerPage;