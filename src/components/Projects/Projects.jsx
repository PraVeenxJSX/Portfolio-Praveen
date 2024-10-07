import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import leaf from "../../Assets/Projects/leaf.png";
import emotion from "../../Assets/Projects/emotion.png";
import editor from "../../Assets/Projects/codeEditor.png";
import chatify from "../../Assets/Projects/chatify.png";
import suicide from "../../Assets/Projects/suicide.png";
import emart from "../../Assets/Projects/emart.png";
import bitsOfCode from "../../Assets/Projects/blog.png";
import Todo from "../../Assets/Projects/Todo.png";
import user from "../../Assets/Projects/user-info.png";
import Netflix from "../../Assets/Projects/Netflix.png";
import drinks from "../../Assets/Projects/drinks.png";
import ancons from "../../Assets/Projects/ancons.png";
import users from "../../Assets/Projects/usersMern.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={ancons}
              isBlog={false}
              title="Ancons International"
              description="ANCONS International represents universities in the USA, focusing on facilitating the admission process for international students who wish to study in American institutions. ANCONS provides assistance with application procedures, guiding students through visa requirements, and offering support throughout the entire process of studying in the USA."
              ghLink="https://github.com/PraVeenxJSX/ancons-frontend"
              demoLink="https://ancons-frontend.vercel.app/"
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={emart}
              isBlog={false}
              title="E-Commerce Website"
              description="A E-Commerce website where items are able to add into cart also able to delete the added items from the cart, the application is"
              ghLink="https://github.com/PraVeenxJSX/Todo-Management"
              demoLink="https://react-e-commerce-zeta.vercel.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={users}
              isBlog={false}
              title="User Management"
              description="A website of users data where, user does CRUD operations in the application "
              ghLink="https://github.com/PraVeenxJSX/reactTask.git"
              demoLink="https://usersdataview.vercel.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={user}
              isBlog={false}
              title="userInfo"
              description="displays a list of user information by utilizing an API. It retrieves data such as user names, emails, and other relevant details, and presents them in a structured list format. The component ensures data is dynamically updated by making API calls whenever necessary, providing a seamless experience for users viewing the information. It also handles loading states and potential errors during data retrieval, ensuring a robust and user-friendly interface."
              ghLink="https://github.com/PraVeenxJSX/user-info"
              demoLink="https://userss-dataa.netlify.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={Netflix}
              isBlog={false}
              title="Netflix website"
              description="Used the plant disease dataset from Kaggle and trained a image classifer model using 'PyTorch' framework using CNN and Transfer Learning with 38 classes of various plant leaves. The model was successfully able to detect diseased and healthy leaves of 14 unique plants. I was able to achieve an accuracy of 98% by using Resnet34 pretrained model."
              ghLink="https://github.com/PraVeenxJSX/Netflix-Clone"
              demoLink="https://main--netflixother.netlify.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={Todo}
              isBlog={false}
              title="A Todo Management"
              description="A Todo Management Application which allows users to enter their list of works"
              ghLink="https://github.com/PraVeenxJSX/Todo-Management"
              demoLink="https://todolistmanagement-1.netlify.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={drinks}
              isBlog={false}
              title="A Drink Application"
              description="The Drink Finder App is a user-friendly web application that allows you to search for and discover a wide variety of drinks. Powered by the CocktailDB API, the app enables users to easily find detailed information about their favorite beverages, including ingredients, preparation instructions, and more. Whether you're looking for a classic cocktail or exploring new drink ideas, this app provides a seamless and enjoyable experience. Simply enter the name of a drink in the search bar, and instantly access a rich database of drink recipes and images."
              ghLink="https://github.com/PraVeenxJSX/cocktaiApi"
              demoLink="https://drinks-wheat.vercel.app/"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
