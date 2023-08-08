import styles from '@/styles/Contact.module.css'

const Contact: React.FC = () => {
  return (
    <section className={styles.container}>
      <div className={styles.contact}>
        <h2 className={styles.title}>Contacto</h2>
        <form className={styles.form}>
          <div className={styles.input}>
            <label>Nombre</label>
            <input placeholder="Nombre..." />
          </div>
          <div className={styles.input}>
            <label>Correo electrónico</label>
            <input placeholder="ejemplo@gmail.com" />
          </div>
          <div className={styles.input}>
            <label>Asunto</label>
            <input placeholder="Me interesan sus servicios..." />
          </div>
          <div className={styles.input}>
            <label>Mensaje</label>
            <textarea placeholder="Escriba su mensaje aquí..."></textarea>
          </div>
          <button className={styles.submit}>Enviar</button>
        </form>
      </div>
    </section>
  )
}

export default Contact
