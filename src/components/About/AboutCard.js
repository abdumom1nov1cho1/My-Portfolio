import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
          Привет всем, я <span className="purple"> Анвар Абдумоминович </span>
          от <span className="purple"> Узбекистан, Ташкент</span>
            <br />Я учусь в IT Академии в сотрудничестве с IT Park в Ташкенте
            <br />
            <br />
            Помимо кодирования, некоторые другие занятия, которые я люблю делать!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight />Архитектура
            </li>
            <li className="about-activity">
              <ImPointRight /> Архитектурный дизайнер
            </li>
            <li className="about-activity">
              <ImPointRight /> Фронтенд-разработчик
            </li>
            <li className="about-activity">
              <ImPointRight /> Скоро будет Fullstack
            </li>
            <li className="about-activity">
              <ImPointRight /> IT-ментор
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "Стремитесь создавать вещи, которые имеют значение!"{" "}
          </p>
          <footer className="blockquote-footer">Anvar</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
