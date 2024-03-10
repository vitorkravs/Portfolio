"use client";

//styles
import "./styles.scss";

//components
import TitleContainer from "../TitleContainer/TitleContainer";

//hooks
import { useState } from "react";

//envio de email
import emailJs from "@emailjs/browser";

//animação
import { motion } from "framer-motion";

const Contact = () => {
  const [clientName, setClientName] = useState("");
  const [clientMessage, setClientMessage] = useState("");
  const [clientEmail, setClientEmail] = useState("");
  const [emailSent, setEmailSent] = useState(false);

  const sendEmail = (e: any) => {
    e.preventDefault();

    const templateParams = {
      from_name: clientName,
      message: clientMessage,
      email: clientEmail,
    };

    emailJs
      .send(
        `${process.env.NEXT_PUBLIC_NEXT_EMAILJS_SERVICE_ID}`,
        `${process.env.NEXT_PUBLIC_NEXT_EMAILJS_TEMPLATE_ID}`,
        templateParams,
        `${process.env.NEXT_PUBLIC_NEXT_EMAILJS_PUBLIC_KEY}`
      )
      .then(
        (response) => {
          console.log("Email enviado com sucesso!", response);
          setEmailSent(true);
        },
        (err) => {
          console.log("Algo deu errado: Erro, ", err);
        }
      );
  };

  return (
    <motion.section
      id="contact-container"
      initial={{ opacity: 0, x: -100 }}
      whileInView={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <TitleContainer
        text="Precisa dos meus serviços?"
        description="Prencha o formulário abaixo :)"
      />

      <motion.form
        id="form-contact"
        onSubmit={sendEmail}
        initial={{ opacity: 0, x: -100 }}
        whileInView={{ opacity: 1, x: 0 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.5 }}
      >
        <h3>Formulário</h3>
        <input
          className="input-contact"
          required
          type="text"
          placeholder="Digite seu nome:"
          onChange={(e) => setClientName(e.target.value)}
          value={clientName}
        />
        <input
          className="input-contact"
          required
          type="email"
          placeholder="Digite seu email:"
          onChange={(e) => setClientEmail(e.target.value)}
          value={clientEmail}
        />
        <textarea
          required
          className="textarea-contact"
          placeholder="Digite sua menssagem e entrarei em contato com você"
          onChange={(e) => setClientMessage(e.target.value)}
          value={clientMessage}
        />
        {emailSent ? (
          <p className="sent-email">Email enviado com sucesso !!!</p>
        ) : (
          <button className="btn-contact" type="submit">
            Enviar
          </button>
        )}
      </motion.form>
    </motion.section>
  );
};

export default Contact;
