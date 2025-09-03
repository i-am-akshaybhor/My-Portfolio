import React from "react";
import GitHubCalendar from "react-github-calendar";
import { Row } from "react-bootstrap";
import gfg from "../../Assets/Projects/gfg_streak.png";
function Github() {
  return (
    <>
    <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
      <h1 className="project-heading" style={{ paddingBottom: "20px" }}>
        Days I <strong className="purple">Code</strong>
      </h1>
      <GitHubCalendar
        username="i-am-akshaybhor"
        blockSize={15}
        blockMargin={5}
        color="#c084f5"
        fontSize={16}
      />
    </Row>

    {/* <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
      <h1 className="project-heading" style={{ paddingBottom: "20px" }}>
        My <strong className="purple">GeeksforGeeks</strong> Profile
      </h1>
      <iframe
        src="https://auth.geeksforgeeks.org/user/i-am-akshaybhor/"
        width="100%"
        height="600px"
        style={{ border: "none", borderRadius: "10px" }}
        title="GeeksforGeeks Profile"
      />
    </Row> */}

    <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
      <h1 className="project-heading" style={{ paddingBottom: "20px" }}>
        My <strong className="purple">GeeksforGeeks</strong> Profile
      </h1>
      <img 
          src={gfg} 
          alt="GeeksforGeeks" 
          style={{ width: "1200px", cursor: "pointer" }}
        />
      <a href="https://www.geeksforgeeks.org/user/_akshay_bhor_/"   
        target="_blank" 
        rel="noopener noreferrer"
        style={{ textDecoration: "none" }} >
          <br />
        <button 
          style={{
            padding: "12px 24px",
            backgroundColor: "#c770f0",
            color: "black",
            border: "none",
            borderRadius: "8px",
            fontSize: "16px",
            cursor: "pointer"
          }}
        >
          View My GfG Profile
        </button>
      </a>
    </Row>
    </> 
  );
}

export default Github;
