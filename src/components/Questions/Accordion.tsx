'use client'
import styles from '@/styles/Questions.module.css'
import { questionsData } from '@/utils/dataMapping'
import { useState } from 'react'
import { ArrowTop } from '@/components/icons/ArrowTop'
import { ArrowButton } from '@/components/icons/ArrowButton'

const Accordion: React.FC = () => {
  const [selected, setSelected] = useState('')

  const toggle = (question: string) => {
    if (selected === question) {
      return setSelected('')
    }

    setSelected(question)
  }

  return (
    <div className={styles.accordion_container}>
      <div className={styles.accordion}>
        {questionsData.map((item) => (
          <article
            key={item.questionNum}
            className={styles.item}
            onClick={() => toggle(item.questionNum)}
          >
            <div className={styles.question}>
              <span>{item.questionNum}</span>
              <h5>{item.question}</h5>
              <p>
                {selected === item.questionNum ? (
                  <ArrowTop className={styles.icon} />
                ) : (
                  <ArrowButton className={styles.icon} />
                )}
              </p>
            </div>
            <p
              className={
                selected === item.questionNum ? styles.show : styles.answer
              }
            >
              {item.answer}
            </p>
          </article>
        ))}
      </div>
    </div>
  )
}

export default Accordion
