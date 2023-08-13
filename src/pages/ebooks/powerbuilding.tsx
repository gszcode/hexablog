import EbookLayout from '@/components/EbookLayout/EbookLayout'
import EbookLi from '@/components/Ebooks/EbookLi'
import Layout from '@/components/Layout/Layout'

const PowerBuilding: React.FC = () => {
  return (
    <Layout>
      <EbookLayout
        img="/img/powerbuilding.jpg"
        title="powerbuilding"
        subtitle="Rutina Powerbuilding"
        price="$5.999,99"
      >
        <div>
          <p>
            Programa de entrenamiento de 12 semanas, cuyo objetivo es mejorar la
            marca de tus básicos (Press banca, Sentadilla y Peso muerto) y
            aumentar tu masa muscular.
          </p>
          <br />
          <ul>
            <EbookLi
              content="2 videos explicativos, uno explicando el cuaderno de entrenamiento
              y otro explicando la rutina. Videos explicativos de todos los
              ejercicios en la
            "
            />
            <EbookLi content="Videos explicativos de todos los ejercicios en la rutina." />
            <EbookLi
              content="Un cuaderno de entrenamiento en donde vas a poder anotar
              absolutamente TODO.
            "
            />
            <br />
          </ul>
          <p>
            En el programa de entrenamiento también detallamos como debe ser el
            calentamiento para el entrenamiento de fuerza.
          </p>
          <br />
          <p>
            La rutina esta orientada a aquellas personas que son
            INTERMEDIAS//AVANZADAS en el entrenamiento de fuerza, si eres
            principiante también puedes hacer este programa de entrenamiento
            pero deberías enfatizar más en el trabajo técnico para tener una
            técnica realmente buena, y así luego poder seguir al 100% el
            programa de entrenamiento
          </p>
          <br />
          <p>
            Si tienes alguna duda que está exclusivamente relacionada con el
            programa adquirido y no con tu caso concreto, puedes escribirnos a
            nuestro correo sharpness@gmail.com y te responderemos en un plazo
            máximo de 48 horas.
          </p>
        </div>
      </EbookLayout>
    </Layout>
  )
}

export default PowerBuilding
