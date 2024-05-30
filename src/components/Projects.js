import { Row, Col, Image, Container, Badge, ListGroup } from 'react-bootstrap';
import { 
    SiTypescript, SiNextdotjs, SiReact, SiNodedotjs, SiCss3, SiMysql, SiJavascript, SiFlask, SiPython, SiBootstrap, SiDjango, SiDocker, SiVagrant,
    SiJava, SiSpringboot
} from 'react-icons/si';
import { FaChrome } from 'react-icons/fa';
import React from 'react';


const TypeBadge = () => {
    return (
        <Badge bg="danger"><SiTypescript />TypeScript</Badge>
    )
}

const NextBadge = () => {
    return (
        <Badge bg="secondary"><SiNextdotjs /> NextJS</Badge>
    )
};

const ReactBadge = () => {
    return (
        <Badge bg="primary"><SiReact/> React</Badge>
    )
}

const NodeBadge = () => {
    return (
        <Badge bg="secondary"><SiNodedotjs /> Node.js</Badge>
    )
};
const CSSBadge = () => {
    return (
        <Badge bg="success"><SiCss3/> CSS</Badge>
    )
};

const MySQLBadge = () => {
    return (
        <Badge bg="success"><SiMysql/> MySQL</Badge>
    )
};
const JavaScriptBadge = () => {
    return (
        <Badge bg="warning" text="dark"><SiJavascript/> JavaScript</Badge>
    )
}

const FlaskBadge = () => {
    return (
        <Badge bg="success"><SiFlask/> Flask</Badge>
    )
};

const ChromeBadge = () => {
    return (
        <Badge bg="secondary"><FaChrome/> Chrome Extension</Badge>
    )
};



const BootstrapBadge = () => {
    return (
        <Badge bg="danger"><SiBootstrap/> Bootstrap</Badge>
    )
}





const Projects = () => {
    return (
        <>
        <Container>
            <div>
                <Image
                    className="mx-auto d-block"
                    src="/img/baratheon.png" fluid 
                    width="300vh"
                    
                />
            </div>
            <h1 className='glow'>Software</h1>
            <p>
                Of course, I can't call myself a Web Dev without some projects.
            </p>
            <p>
                I enjoy building scalable, responsive, and performant websites.
            </p>
            <Container className="my-5">
                <h2 align="center" className='glow'>Stuff I Made</h2>
                <hr/>
                <Row>
                    <Col xs={12} sm={6} md={6} className="justify-content-center d-flex flex-column my-5">
                    <h2><a href="/" rel="noreferrer" target="_blank">Personal Website</a></h2>
                        <p>
                            Wait... that's this site!
                        </p>
                        <div>
                            <ReactBadge/> <BootstrapBadge/>
                        </div>
                    </Col>
                    <Col xs={12} sm={6} md={6} className="justify-content-center align-items-center d-flex flex-column my-5">
                        <Image src="./img/software/PersonalSite.png" fluid width="90%" rounded/>
                    </Col>
                </Row>
                <hr/>
                <Row>
                    <Col xs={12} sm={6} md={6} className="justify-content-center d-flex flex-column my-5">
                    <h2><a href="https://www.drag-n-drop-2nyd.vercel.app" rel="noreferrer" target="_blank">Jello</a></h2>
                        <p>
                            A Jira-Trello (Jello) clone with drag and drop, and subtask functionality.
                        </p>
                        <p>
                            May/2024
                        </p>
                        <div>
                            <JavaScriptBadge/> <SiCss3/> <ReactBadge/>
                        </div>
                    </Col>
                    <Col xs={12} sm={6} md={6} className="justify-content-center align-items-center d-flex flex-column my-5">
                        <Image src="./img/projects/Jello.png" fluid width="90%" rounded/>
                    </Col>
                </Row>
                <hr/>
                
                <Row>
                    <Col xs={12} sm={6} md={6} className="justify-content-center d-flex flex-column my-5">
                    <h2><a href="#" rel="noreferrer" target="_blank">rDis</a></h2>
                        <p>
                            An application to streamline childcare and disease control, while increasing efficiency.
                        </p>
                        <p>
                            Under construction.
                        </p>
                        <div>
                            <JavaScriptBadge/> <MySQLBadge/> <SiCss3/> <SiNodedotjs />
                        </div>
                    </Col>
                    <Col xs={12} sm={6} md={6} className="justify-content-center align-items-center d-flex flex-column my-5">
                        <Image src="./img/projects/rDis.png" fluid width="90%" rounded/>
                    </Col>
                </Row>
                <hr/>
                
                <Row>
                    <Col xs={12} sm={6} md={6} className="justify-content-center d-flex flex-column my-5">
                    <h2><a href="https://www.button-generator-one.vercel.app" rel="noreferrer" target="_blank">Website Builder</a></h2>
                        <p>
                            An HTML and CSS code generator based on user defined customizations.
                        </p>
                        <p>
                            May/2024
                        </p>
                        <div>
                            <JavaScriptBadge/> <SiCss3/>
                        </div>
                    </Col>
                    <Col xs={12} sm={6} md={6} className="justify-content-center align-items-center d-flex flex-column my-5">
                        <Image src="./img/projects/button.png" fluid width="90%" rounded/>
                    </Col>
                </Row>
                <hr/>
                <Row>
                    <Col xs={12} sm={6} md={6} className="justify-content-center d-flex flex-column my-5">
                    <h2><a href="https://www.pokexp.vercel.app" rel="noreferrer" target="_blank">PokeXP</a></h2>
                        <p>
                            A Pokedex with a Windows XP theme.
                        </p>
                        <p>
                            May/2024
                        </p>
                        <div>
                            <JavaScriptBadge/> <SiCss3/> <ReactBadge/>
                        </div>
                    </Col>
                    <Col xs={12} sm={6} md={6} className="justify-content-center align-items-center d-flex flex-column my-5">
                        <Image src="./img/projects/pokeXP.png" fluid width="90%" rounded/>
                    </Col>
                </Row>
                <hr/>
                <Row>
                    <Col xs={12} sm={6} md={6} className="justify-content-center d-flex flex-column my-5">
                    <h2><a href="https://icw2a-org.vercel.app/icw2a/pages/homepage.html" rel="noreferrer" target="_blank">Community App</a></h2>
                        <p>
                            An integrated community welfare web application.
                        </p>
                        <p>
                            Under construction.
                        </p>
                        <div>
                            <JavaScriptBadge/> <SiCss3/>
                        </div>
                    </Col>
                    <Col xs={12} sm={6} md={6} className="justify-content-center align-items-center d-flex flex-column my-5">
                        <Image src="./img/projects/icw2a.png" fluid width="90%" rounded/>
                    </Col>
                </Row>
                <hr/>
                <Row>
                    <Col xs={12} sm={6} md={6} className="justify-content-center d-flex flex-column my-5">
                    <h2><a href="https://www.studio-one-azure.vercel.app" rel="noreferrer" target="_blank">Studio</a></h2>
                        <p>
                            A fashion e-commerce website.
                        </p>
                        <p>
                            April/2024
                        </p>
                        <div>
                            <JavaScriptBadge/> <SiCss3/> <ReactBadge />
                        </div>
                    </Col>
                    <Col xs={12} sm={6} md={6} className="justify-content-center align-items-center d-flex flex-column my-5">
                        <Image src="./img/projects/Studio.png" fluid width="90%" rounded/>
                    </Col>
                </Row>
                <hr/>
                <Row>
                    <Col xs={12} sm={6} md={6} className="justify-content-center d-flex flex-column my-5">
                    <h2><a href="https://www.weirder-people.vercel.app" rel="noreferrer" target="_blank">Weirder People</a></h2>
                        <p>
                            An NFT website with innovative tokens.
                        </p>
                        <p>
                            April/2024
                        </p>
                        <div>
                            <JavaScriptBadge/> <SiCss3/> <ReactBadge/>
                        </div>
                    </Col>
                    <Col xs={12} sm={6} md={6} className="justify-content-center align-items-center d-flex flex-column my-5">
                        <Image src="./img/projects/Weirder-People.png" fluid width="90%" rounded/>
                    </Col>
                </Row>
                <hr/>
                <Row>
                    <Col xs={12} sm={6} md={6} className="justify-content-center d-flex flex-column my-5">
                    <h2><a href="https://www.palate-six.vercel.app" rel="noreferrer" target="_blank">Palate</a></h2>
                        <p>
                            A Restaurant's website, showcasing its menu, and on-call-reservations. Future updates coming up.
                        </p>
                        <p>
                            May/2024
                        </p>
                        <div>
                            <JavaScriptBadge/> <SiCss3/>
                        </div>
                    </Col>
                    <Col xs={12} sm={6} md={6} className="justify-content-center align-items-center d-flex flex-column my-5">
                        <Image src="./img/projects/Palate.png" fluid width="90%" rounded/>
                    </Col>
                </Row>
                <hr/>
                <Row>
                    <Col xs={12} sm={6} md={6} className="justify-content-center d-flex flex-column my-5">
                    <h2><a href="https://www.button-generator-one.vercel.app" rel="noreferrer" target="_blank">Linkfolio</a></h2>
                        <p>
                            A website to share portfolios, among peers, and among recruiters.
                        </p>
                        <p>
                            May/2024
                        </p>
                        <div>
                            <JavaScriptBadge/> <SiCss3/> <NextBadge/> <TypeBadge/>
                        </div>
                    </Col>
                    <Col xs={12} sm={6} md={6} className="justify-content-center align-items-center d-flex flex-column my-5">
                        <Image src="./img/projects/Linkfolio.png" fluid width="90%" rounded/>
                    </Col>
                </Row>
                <hr/>
                <Row>
                    <Col xs={12} sm={6} md={6} className="justify-content-center d-flex flex-column my-5">
                    <h2><a href="https://www.linkfolio-six.vercel.app" rel="noreferrer" target="_blank">Old Portfolio Website</a></h2>
                        <p>
                            A website to share portfolios, among peers, and among recruiters.
                        </p>
                        <p>
                            May/2024
                        </p>
                        <div>
                            <JavaScriptBadge/> <SiCss3/> <NextBadge/> <TypeBadge/>
                        </div>
                    </Col>
                    <Col xs={12} sm={6} md={6} className="justify-content-center align-items-center d-flex flex-column my-5">
                        <Image src="./img/projects/Linkfolio.png" fluid width="90%" rounded/>
                    </Col>
                </Row>
                <hr/>
                <Row>
                    <Col xs={12} sm={6} md={6} className="justify-content-center d-flex flex-column my-5">
                    <h2><a href="https://www.old-portfolio-mohammed.vercel.app" rel="noreferrer" target="_blank">Previous Portfolio Website</a></h2>
                        <p>
                            My previous portfolio website, to share myprojects, blogs, and experiences.
                        </p>
                        <p>
                            March/2024
                        </p>
                        <div>
                            <JavaScriptBadge/> <SiCss3/>
                        </div>
                    </Col>
                    <Col xs={12} sm={6} md={6} className="justify-content-center align-items-center d-flex flex-column my-5">
                        <Image src="./img/projects/old.png" fluid width="90%" rounded/>
                    </Col>
                </Row>
                <hr/>
                <Row>
                    <Col xs={12} sm={6} md={6} className="justify-content-center d-flex flex-column my-5">
                    <h2><a href="https://www.charlotteweb.io/" rel="noreferrer" target="_blank">Charlotte</a></h2>
                        <p>
                            Charlotte aims to make the web more accessible by providing a suite of accessibility tools, all in one handy browser extension.
                        </p>
                        <p>
                            Most Impactful Award, Tech for Good Festival.
                        </p>
                        <div>
                            <FlaskBadge/> <ReactBadge/> <ChromeBadge/>
                        </div>
                    </Col>
                    <Col xs={12} sm={6} md={6} className="justify-content-center align-items-center d-flex flex-column my-5">
                        <Image src="./img/software/Charlotte.png" fluid width="90%" rounded/>
                    </Col>
                </Row>
                <hr/>
                
                <Row>
                    <Col xs={12} sm={6} md={6} className="justify-content-center d-flex flex-column my-5">
                        <h2><a href="https://zeyu2001.github.io/chess-ai/" rel="noreferrer" target="_blank">Chess AI</a></h2>
                        <p>
                            Simple Chess AI in JavaScript, using the minimax algorithm, alpha-beta pruning, and piece square tables.
                        </p>
                        <div>
                            <JavaScriptBadge/> <BootstrapBadge/>
                        </div>
                    </Col>
                    <Col xs={12} sm={6} md={6} className="justify-content-center align-items-center d-flex flex-column my-5">
                        <Image src="./img/software/Chess.png" fluid width="90%" rounded/>
                    </Col>
                </Row>
            </Container>
            <Container>
                <Row>
                    <Col xs={12} sm={6} md={6} className="my-5">
                        <h2 align="center" className='glow'>Technologies I Use</h2>
                        <hr/>
                        <div className="my-5">
                            <ListGroup a="ul">
                                <li>
                                    <SiPython/> Python, <SiDjango/> Django, <SiFlask/> Flask
                                </li>
                                <li>
                                    <SiNodedotjs/> Node.js, <SiMysql/> MySQL
                                </li>
                                <li>
                                    <SiReact/> React, <SiBootstrap/> Bootstrap
                                </li>
                                <li>
                                    <SiJava/> Java, <SiSpringboot/> Spring Boot
                                </li>
                                <li>
                                    <SiDocker/> Docker, <SiVagrant/> Vagrant
                                </li>
                            </ListGroup>
                        </div>
                    </Col>
                    <Col xs={12} sm={6} md={6} className="my-5">
                        <h2 align="center" className='glow'>Competitions</h2>
                        <hr/>
                        <div className="my-5">
                            <ListGroup a="ul">
                                <li>
                                    Tech For Good Festival 2021 - Most Impactful Award
                                </li>
                                <li>
                                    BrainHack Today I Learned AI Camp 2021 - 4th Place, Newcomer Award (University Category)
                                </li>
                                <li>
                                    National Olympiad for Informatics 2019 - Bronze Award
                                </li>
                            </ListGroup>
                        </div>
                    </Col>
                </Row>
            </Container>
        </Container>
        </>
    )
}

export default Projects;