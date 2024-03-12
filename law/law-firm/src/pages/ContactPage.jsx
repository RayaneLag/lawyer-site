// src/pages/ContactPage.jsx

const ContactPage = () => {
  return (
    <div className="contact-page-container">
      <div className="contact-info">
        <h1>Contactez-Nous</h1>
        <p>Pour toute question ou demande, n'hésitez pas à nous contacter :</p>
        <p>Email : contact@example.com</p>
        <p>Téléphone : 01 23 45 67 89</p>
      </div>
      <form className="form-contact">
        <input type="text" name="name" placeholder="Votre nom" required />
        <input type="email" name="email" placeholder="Votre email" required />
        <textarea
          name="message"
          rows="5"
          placeholder="Votre message"
          required
        ></textarea>
        <input type="submit" value="Envoyer" />
      </form>
    </div>
  );
};

export default ContactPage;
