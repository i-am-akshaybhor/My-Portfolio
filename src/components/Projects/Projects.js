import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
// import leaf from "../../Assets/Projects/leaf.png";
// import emotion from "../../Assets/Projects/emotion.png";
// import editor from "../../Assets/Projects/codeEditor.png";
// import chatify from "../../Assets/Projects/chatify.png";
// import suicide from "../../Assets/Projects/suicide.png";
// import bitsOfCode from "../../Assets/Projects/blog.png";
import visualytics from "../../Assets/Projects/visualytics.png"
import hotelBooking from "../../Assets/Projects/Best Hotel Booking...png"
import favMovie from "../../Assets/Projects/Fav Movie1.png"
import pdfchat from "../../Assets/Projects/chatwithpdf.png"
import countries from "../../Assets/Projects/countries API.png"
import fms from "../../Assets/Projects/FMS.png"
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
              imgPath={visualytics}
              isBlog={false}
              title="Visualytics"
              description="Visualytics is a cutting-edge web application designed for data analysis and visualization, offering users an intuitive platform to extract actionable insights from complex datasets. Built with Python, Streamlit, LIDA, and GPT-3.5, it enables advanced dataset exploration through interactive dashboards and analytics modules, including summarization, dataset previews, and goal-based visualizations. Users can leverage natural language queries powered by GPT-3.5 to generate code and custom visualizations—such as bar charts, pie charts, pairplots, heatmaps, line charts, and treemaps—helping to communicate data findings effectively and foster deeper understanding."
              ghLink="https://github.com/i-am-akshaybhor/Visualytics"
              demoLink="https://datavisualytics.streamlit.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={hotelBooking}
              isBlog={false}
              title="Best Hotel Booking"
              description="The Best Hotel Booking web application is a modern platform designed for users to search and book hotels with ease and flexibility. Built using React, React Router, JavaScript, and CSS, the project features dynamic hotel listings, interactive filtering options—including price range and categories—and detailed hotel pages to create a seamless and engaging booking experience. Efficient state management is achieved with React Hooks, while visually appealing components powered by React Icons contribute to an appealing and user-friendly interface."
              ghLink="https://github.com/i-am-akshaybhor/Best-Hotel-Booking"
              demoLink="https://besthotelbooking.netlify.app"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={favMovie}
              isBlog={false}
              title="Find Your Favorite Movies"
              description="Find Your Favourite Movie is an interactive web application built with React that enables users to search for films, explore popular titles, and curate their own favorites list. Core technologies include React Router for smooth client-side navigation, Context API for managing favorite movies globally, and integration of the TMDb API for real-time movie data. The app features responsive UI design, dynamic searches, and localStorage persistence, ensuring a seamless and engaging experience while users browse and manage their movie preferences."
              ghLink="https://github.com/i-am-akshaybhor/Find-Favorite-Movie"
              demoLink="https://findfavoritemovie.netlify.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={pdfchat}
              isBlog={false}
              title="Chat with PDF"
              description="This project is a Streamlit-based web app that enables users to upload PDFs and interact with their content through an AI-powered chat interface. Using Python libraries like PyPDF2 for PDF text extraction, python-dotenv for environment management, and OpenAI’s API for generating natural language responses, the app allows users to ask questions about their PDF content seamlessly. Additionally, it integrates with Pinata for decentralized PDF storage on IPFS, ensuring secure and efficient file handling in the cloud."
              ghLink="https://github.com/i-am-akshaybhor/Chat-With-PDF"
              demoLink="https://accesspdfdata.streamlit.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={countries}
              isBlog={false}
              title="Countries API Project"
              description="This project is a React-based web application that interacts with a Countries API to display detailed information about countries. It utilizes React concepts such as useState, Fetch API for data retrieval, Context API for state management, and localStorage for data persistence. Key features include a shimmer loading effect for better user experience, toggleable dark/light mode, and the ability to filter countries by name or region, making it a responsive and interactive tool for exploring global countries data."
              ghLink="https://github.com/i-am-akshaybhor/Countries_API"
              // demoLink="" <--------Please include a demo link here
            />
          </Col>


          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={fms}
              isBlog={false}
              title="File Management System"
              description="This project is a simple and efficient File Management System developed using PHP and MySQL, designed to enable users to easily upload, store, and share files with friends through generated shareable links. The code structure is kept straightforward for easy understanding and quick operations, allowing even moderate users to navigate and use it seamlessly. Features include fast file uploads/downloads, link sharing without exposing entire files, and a clean GUI with logically placed elements and a user-friendly color scheme for a pleasant experience. The use of MySQL enhances data management while ensuring minimal resource usage for optimal performance."
              ghLink="https://github.com/i-am-akshaybhor/File-Management-System"
              // demoLink=""      <--------Please include a demo link here 
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
