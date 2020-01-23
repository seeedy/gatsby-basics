import React from "react";
import Container from "../components/container/container";
import css from "./about-css-modules.module.css";

console.log(css);

const User = props => (
    <div className={css.user}>
        <img src={props.avatar} className={css.avatar} alt="" />
        <div className={css.description}>
            <h2 className={css.username}>{props.username}</h2>
            <p className={css.excerpt}>{props.excerpt}</p>
        </div>
    </div>
);

export default () => (
    <Container>
        <h1>About CSS Modules</h1>
        <p>CSS Modules are cool</p>
        <User
            username="Jane Doe"
            avatar="https://s3.amazonaws.com/uifaces/faces/twitter/adellecharles/128.jpg"
            excerpt="I'm Jane Doe. Lorem ipsum dolor sit amet, consectetur adipisicing elit."
        />
        <User
            username="Bob Smith"
            avatar="https://s3.amazonaws.com/uifaces/faces/twitter/vladarbatov/128.jpg"
            excerpt="I'm Bob Smith, a vertically aligned type of guy. Lorem ipsum dolor sit amet, consectetur adipisicing elit."
        />
    </Container>
);
