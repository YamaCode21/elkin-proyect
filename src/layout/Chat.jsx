import React from "react";
import './../styles/chat.css';
import chat from "./../assets/chat.png";

const Chat = () => {
  return (
    <main className="main-chat">
      <p>
        Bienvenido a esta sección dedicada a fortalecer tus conocimientos sobre
        el tema a través de una amplia gama de documentos pedagógicos.
      </p>
      <section className="discord">
        <div className="discord-container">
          <img src={chat} alt="" />
          <button className="btn-disc">Entrar</button>
        </div>
      </section>
    </main>
  );
};

export default Chat;
