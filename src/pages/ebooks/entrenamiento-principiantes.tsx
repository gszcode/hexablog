import EbookLayout from '@/components/EbookLayout/EbookLayout'
import EbookLi from '@/components/Ebooks/EbookLi'
import Layout from '@/components/Layout/Layout'

const EntrenamientoPrincipiantes: React.FC = () => {
  return (
    <Layout>
      <EbookLayout
        img="/img/entrenamiento-principiantes.jpg"
        title="entrenamiento principiantes"
        subtitle="Entrenamiento principiantes"
        price="$4.999,99"
      >
        <div>
          <p>
            El ebook de guía para principiantes, no solo esta dirigido a las
            personas que recién están arrancando a entrenar, sino que también le
            será útil a entrenadores/as o estudiantes que deseen ampliar sus
            conocimientos. Te encontraras con información muy básica, y algo más
            avanzada, siempre basándonos en evidencia científica. Recopilar toda
            está información nos llevo años, las fuimos incorporando con la
            experiencia y estudió, leer este ebook te ahorrará mucho tiempo
          </p>
          <p>Temas:</p>
          <ul>
            <EbookLi content="Capitulo 1 : Planos, ejes y tipos de movimientos" />
            <EbookLi content="Capitulo 2 : Biomecánica básica general" />
            <EbookLi content="Capitulo 3 : Como entrenar cada grupo muscular" />
            <EbookLi content="Capitulo 4 : Selección de ejercicios" />
            <EbookLi content="Capitulo 5 : Variables del entrenamiento" />
            <EbookLi content="Capitulo 6 : Tipos de rutinas" />
            <EbookLi content="Capitulo 7 : Beneficios fisiológicos de un principiante" />
            <EbookLi content="Capitulo 8 : Crea tu propia dieta" />
            <EbookLi content="Capitulo 9 : Guía básica de suplementacion" />
            <EbookLi content="Capitulo 10 : Puntos extra" />
          </ul>
        </div>
      </EbookLayout>
    </Layout>
  )
}

export default EntrenamientoPrincipiantes
