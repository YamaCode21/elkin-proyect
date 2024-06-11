import React from "react";
import "./../styles/discusion.css";

const Discusion = () => {
  return (
    <main className="contenedorforo">
      <div
        style={{
          border: "1px solid rgba(0,0,0,0.1)",
          borderRadius: "2px",
          boxSizing: "border-box",
          overflow: "hidden",
          position: "relative",
          width: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          paddingTop: "50px",
          background: "#F4F4F4",
        }}
      >
        <p style={{ padding: 0, margin: 0, width: "90%" }}>
          <iframe
            src="https://padlet.com/embed/h1f3td512xkqyjoc"
            frameBorder="0"
            allow="camera;microphone;geolocation"
            style={{
              width: "100%",
              height: "608px",
              display: "block",
              padding: 0,
              margin: 0,
            }}
            title="Padlet Embed"
          ></iframe>
        </p>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "end",
            margin: 0,
            height: "28px",
          }}
        >
          <a
            href="https://padlet.com?ref=embed"
            style={{
              display: "block",
              flexGrow: 0,
              margin: 0,
              border: "none",
              padding: 0,
              textDecoration: "none",
            }}
            target="_blank"
            rel="noopener noreferrer"
          >
            <div style={{ display: "flex", alignItems: "center" }}>
              <img
                src="https://padlet.net/embeds/made_with_padlet_2022.png"
                width="114"
                height="28"
                style={{
                  padding: 0,
                  margin: 0,
                  background: "0 0",
                  border: "none",
                  boxShadow: "none",
                }}
                alt="Made with Padlet"
              />
            </div>
          </a>
        </div>
      </div>
    </main>
  );
};

export default Discusion;
