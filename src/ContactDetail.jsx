// eslint-disable-next-line no-unused-vars
import React from 'react';
import './ContactDetail.css';

function ContactDetail(contact) {
  return (
    <div className="contact-detail">
      <h2>Contacto Destacado</h2>
      <p><strong>Nombre:</strong> {contact.nombre}</p>
      <p><strong>Teléfono:</strong> {contact.numero}</p>
      <p><strong>Correo:</strong> {contact.correo}</p>
    </div>
  );
}

export default ContactDetail;