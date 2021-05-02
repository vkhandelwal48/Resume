import styled from 'styled-components';
import React, { Component } from 'react';
import Aux from '../hoc/Beep';

const Section = styled.section`
    clear: both;
	padding: 0px;
	margin: 0px;
`;

const Row = styled.div`
    zoom:1;
    
    &:before{
        content:"";
        display:table;
    }

    &:after{
        content:"";
        display:table;
        clear:both;
    }
`;

const Column = styled.div`
    display: block;
	float:left;
	margin: 1% 0 1% 1.6%;
    width: 48.2%;
   
    &:first-child{
        margin-left: 20px; 
    }
`;

const H2 = styled.h2`
    color:#1E90FF;
`;

class Resume extends Component {
    render(){
        return (
            <Aux>
                <Section>
                    <Row>
                        <Column>
                            <H2>EDUCATION</H2>
                            <h3>SRMS College of Engineering,Technology & Research ,Bareilly - Bachelor of Technology(B.Tech),Computer Science & Engineering</h3>
                            <p>2018-2022</p>
                            <p>CGPA:7.63</p>
                            <h3>Maa Bharti Senior Secondary School, Kota - Secondary Senior(XII),Science</h3>
                            <p>Year of Completion : 2018</p>
                            <p>Percentage: 71.2</p>
                            <h3>GRM School, Bareilly - Secondary(X)</h3>
                            <p>Year of Completion : 2016</p>
                            <p>CGPA : 8.6</p>
                            <H2>PROJECTS</H2>
                            <h3>Gaming Console Website</h3>
                            <p>This is a front-end website that I created using HTML , CSS, Javascript,jQuery . It basically has a description about two gaming consoles , i.e Xbox One and PS4.</p>
                            <h3>MyPizza  Webapp </h3>
                            <p>This is a web app that I created using React.js and Firebase.It allows us to edit and order our pizzas.</p>
                        </Column>
                        <Column>
                            <H2>Hello</H2>
                            <h2>I`m Vidit Khandelwal</h2>
                            <p>B-42/8,Rajendra Nagar</p>
                            <p>Bareilly,243122</p>
                            <p>9027155483</p>
                            <H2>Skills</H2>
                            <ul>
                                <li>Python(Excellent)</li>
                                <li>HTML,CSS,Javascript,jQuery (Intermediate)</li>
                                <li>React.js(Intermediate)</li>
                                <li>Django,Node.js,Firebase,REST API(Intermediate)</li>
                            </ul>
                            <H2>CERTIFICATES</H2>
                            <ul>
                                <li><strong>Build Responsive Real World Websites with HTML5 and CSS3  </strong>Udemy,Online</li>
                                <li><strong>Python (Basic) </strong>HackerRank</li>
                                <li><strong>Python Programming A  Practical Approach</strong> Electronics & ICT Academy</li>
                            </ul>
                            <H2>ACCOMPLISHMENTS</H2>
                            <p>5 Star Coder on HackerRank in Python(Basic)</p>
                            <H2>LANGUAGES</H2>
                            <p>Hindi,English</p>
                        </Column>
                    </Row>
                </Section>
            </Aux>
        );
    }
}

export default Resume;