import EbookLayout from '@/components/EbookLayout/EbookLayout'
import EbookLi from '@/components/Ebooks/EbookLi'
import Layout from '@/components/Layout/Layout'

const CreaTuPropiaRutina: React.FC = () => {
  return (
    <Layout>
      <EbookLayout
        img="/img/crea-tu-propia-rutina.jpg"
        title="crea tu propia rutina"
        subtitle="Crea tu propia rutina"
        price="$3.499,99"
      >
        <div>
          <p>
            Crear una rutina de entrenamiento no es difícil, porque es saber
            aplicar los principios de entrenamiento y saber como aplicas las
            variables, lo que es difícil de verdad, y muy poca gente lo hace, es
            hacer que la rutina se adapte al contexto de la persona, por eso en
            este e-book lo que se busca es aprender a armar una rutina de
            entrenamiento enseñando los principios y variables, pero lo que más
            se enseña es como adaptar la rutina a tu estilo de vida.
          </p>
          <p>Temas:</p>
          <ul>
            <EbookLi content="Capitulo 1 : Adherencia" />
            <EbookLi content="Capitulo 2 : Calentamiento" />
            <EbookLi content="Capitulo 3 : Variables del entrenamiento" />
            <EbookLi content="Capitulo 4 : Planificación" />
            <EbookLi content="Capitulo 5 : 3 puntos clave" />
            <EbookLi content="Capitulo 6 : Conclusión" />
            <EbookLi content="Capitulo 7 : Cardio y fuerza" />
            <EbookLi content="Capitulo 8 : Experiencia personal" />
          </ul>
        </div>
      </EbookLayout>
    </Layout>
  )
}

export default CreaTuPropiaRutina
