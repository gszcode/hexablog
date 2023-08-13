import EbookLayout from '@/components/EbookLayout/EbookLayout'
import EbookLi from '@/components/Ebooks/EbookLi'
import Layout from '@/components/Layout/Layout'

const CreaTuPropiaRutina: React.FC = () => {
  return (
    <Layout>
      <EbookLayout
        img="/img/bases-del-entrenamiento.jpg"
        title="bases del entrenamiento"
        subtitle="Bases del entrenamiento"
        price="$2.999,00"
      >
        <div>
          <p>
            A veces, nos enfocamos mucho en hilar fino, queremos saber que
            suplemento es el mejor, que ejercicio debemos hacer para ganar
            musculo… y terminamos sin lograr nada. Sin embargo, antes de hilar
            fino, como lo debería hacer una persona que este más avanzada en
            este tema, deberías enfocarte en las bases, que estas son muy
            importantes y no conseguirás ningún resultados si no las dominas.
            Consolidar una base solida de conocimiento es muy importante si el
            objetivo es cumplir nuestros objetivos a medio-largo plazo. Esta
            guía no solo va dirigida a principiantes, los temas tratados le
            servirán al 90% de la población que esté interesada en este hermoso
            mundo del entrenamiento con cargas, los temas son:
          </p>
          <br />
          <ul>
            <EbookLi content="Beneficios del entrenamiento de fuerza" />
            <EbookLi content="Cómo crece un músculo" />
            <EbookLi content="Métodos del entrenamiento" />
            <EbookLi content="Variables del entrenamiento" />
            <EbookLi content="Selección de ejercicios" />
            <EbookLi content="Biomecánica básica" />
            <EbookLi content="Tipos de rutina" />
            <EbookLi content="Nutrición en el entrenamiento (volumen y definición)" />
            <EbookLi content="Como es el entrenamiento en volumen y definición" />
          </ul>
        </div>
      </EbookLayout>
    </Layout>
  )
}

export default CreaTuPropiaRutina
