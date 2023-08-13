import EbookLayout from '@/components/EbookLayout/EbookLayout'
import EbookLi from '@/components/Ebooks/EbookLi'
import Layout from '@/components/Layout/Layout'

const Los3Basicos: React.FC = () => {
  return (
    <Layout>
      <EbookLayout
        img="/img/los-3-basicos.jpg"
        title="los 3 básicos"
        subtitle="Guía practica de los 3 básicos"
        price="$3.499,99"
      >
        <div>
          <p>
            Los 3 básicos de powerlifting deberían ser, en mi opinión, la base
            del entrenamiento de cada persona. Independientemente del objetivo
            de cada uno. Estos ejercicios van a ayudar a consolidar una base
            solida, que va a beneficiar muchísimo en el entrenamiento de fuerza
            con objetivos de hipertrofia.
          </p>
          <p>
            En esta guía van a encontrar en profundidad los 3 básicos de
            powerlifting:
          </p>
          <ul>
            <EbookLi content="Sentadilla" />
            <EbookLi content="Press banca" />
            <EbookLi content="Peso muerto" />
          </ul>
          <p>
            Además, incluye un pequeño capitulo sobre biomecanica basica general
            que es importantisimo para tener un mejor entendimiento de los
            capitulos siguientes.
          </p>
        </div>
      </EbookLayout>
    </Layout>
  )
}

export default Los3Basicos
