import styles from '@/styles/Questions.module.css'
import Accordion from './Accordion'

const Questions: React.FC = () => {
  return (
    <section className={styles.container}>
      <div className={styles.questions}>
        <h2 className={styles.title}>Preguntas Frecuentes</h2>
        <Accordion />
      </div>
    </section>
  )
}

export default Questions
