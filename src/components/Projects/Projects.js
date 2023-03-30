import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import leaf from "../../Assets/Projects/leaf.png";
import emotion from "../../Assets/Projects/emotion.png";
import editor from "../../Assets/Projects/codeEditor.png";
import chatify from "../../Assets/Projects/chatify.png";
import suicide from "../../Assets/Projects/suicide.png";
import aaaa from "../../Assets/Projects/dhfg.png";
import bbbb from "../../Assets/Projects/sdcs.png";
import cccc from "../../Assets/Projects/sdddd.png";
import bitsOfCode from "../../Assets/Projects/blog.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
        Мой недавний <strong className="purple">Работает </strong>
        </h1>
        <p style={{ color: "white" }}>
        Вот несколько проектов, над которыми я работал в последнее время.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={chatify}
              isBlog={false}
              title="ProxyLab"
              description="Этот мой сайт не очень сложный сайт, это первая фигма сделанная в попутном ветре"
              ghLink="https://github.com/abdumom1nov1cho1/tailwind-figma.git"
              //demoLink="https://chatify-49.web.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={bitsOfCode}
              isBlog={false}
              title="Nout.uz"
              description="Я сделал этот сайт Nout.uz в Узбекистане, он сделан в React и его можно заказать."
              ghLink="https://github.com/abdumom1nov1cho1/NoutUz.git"
              //demoLink="https://blogs.soumya-jit.tech/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={editor}
              isBlog={false}
              title="Parallax website"
              description="Этот мой сайт сделан на Javascript, и я изучил параллакс и показал его на этом сайте."
              ghLink="https://github.com/abdumom1nov1cho1/Parallax-2.git"
              //demoLink="https://editor.soumya-jit.tech/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={leaf}
              isBlog={false}
              title="Credit Bank"
              description="Этот мой сайт о банке, то есть банке, который выдает кредиты, он тоже сделан на JavaScript, а не на React"
              ghLink="https://github.com/abdumom1nov1cho1/credibank.git"
              //demoLink="https://plant49-ai.herokuapp.com/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={suicide}
              isBlog={false}
              title="VSALE car-shop"
              description="Мой сайт - это интернет-автомаркет, аналог интернет-журнала olx.uz, так же сделан на javascript."
              ghLink="https://github.com/abdumom1nov1cho1/Car-shop.git"
              // demoLink="https://www.youtube.com/watch?v=dQw4w9WgXcQ&ab_channel=RickAstley" <--------Please include a demo link here
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={emotion}
              isBlog={false}
              title="Evro Kran"
              description="Это мой незавершенный сайт.Это сайт о кранах используемых в строительстве"
              ghLink="https://github.com/abdumom1nov1cho1/Evrokran-website.git"
              // demoLink="https://blogs.soumya-jit.tech/"      <--------Please include a demo link here
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={cccc}
              isBlog={false}
              title="Max Way"
              description="Этот мой сайт - наш собственный сайт фасфуда maxway.uz. Это делается в реакции, и это мой первый полноценный сайт."
              ghLink="https://github.com/abdumom1nov1cho1/maxway--full.git"
              // demoLink="https://blogs.soumya-jit.tech/"      <--------Please include a demo link here
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={bbbb}
              isBlog={false}
              title="TrailFX-[Trail-FELIX]"
              description="Этот мой сайт — большой магазин аксессуаров, над которым я сейчас работаю."
              ghLink="https://github.com/abdumom1nov1cho1/"
              // demoLink="https://blogs.soumya-jit.tech/"      <--------Please include a demo link here
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={aaaa}
              isBlog={false}
              title="BBB sport"
              description="Этот мой сайт - незавершенный сайт... Этот сайт о спорте"
              ghLink="https://github.com/abdumom1nov1cho1/sport---sites.git"
              // demoLink="https://blogs.soumya-jit.tech/"      <--------Please include a demo link here
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
