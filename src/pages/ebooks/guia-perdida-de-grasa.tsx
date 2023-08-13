import EbookLayout from '@/components/EbookLayout/EbookLayout'
import EbookLi from '@/components/Ebooks/EbookLi'
import Layout from '@/components/Layout/Layout'

const CreaTuPropiaRutina: React.FC = () => {
  return (
    <Layout>
      <EbookLayout
        img="/img/guia-perdida-de-grasa.jpg"
        title="guía: perdida de grasa"
        subtitle="Guía perdida de-grasa"
        price="$5.999,99"
      >
        <div>
          <p>
            Perder grasa no es solamente consumir menos kcal de las que tu
            cuerpo necesita, sino que hay una fisiología detrás, un metabolismo…
            que es necesario comprender y tener en cuenta para potenciar esta
            pérdida de grasa y NO perder masa muscular. Todo esto, y más, te vas
            a encontrar en esta guía de perdida de grasa donde no me guardo
            NADA. Es una guía que te va a encantar y que sin dudas te va a
            servir. Te encontraras con información muy básica, y algo más
            avanzada, siempre basándonos en evidencia científica. Con la lectura
            de este e-book te ahorraras muchísimo tiempo de estudio, y dinero en
            formaciones.
          </p>
          <p>Temas:</p>
          <ul>
            <EbookLi content="Capitulo 1 : Conceptos Básicos" />
            <EbookLi content="Capitulo 2 : Calcular kcal (video + excel)" />
            <EbookLi content="Capitulo 3 : Fisiología sobre la perdida de grasa" />
            <EbookLi content="Capitulo 4 : La evolución del Ser Humano" />
            <EbookLi
              content="
              Capitulo 5 : Flujo energético, la clave del déficit calorico
            "
            />
            <EbookLi content="Capitulo 6 : ¿Cómo entrenar en déficit calorico?" />
            <EbookLi content="Capitulo 7 : Diet Break" />
            <EbookLi
              content="
              Capitulo 8 : 10 alimentos fundamentales para el déficit calorico
            "
            />
            <EbookLi content="Capitulo 9 : Los mejores suplementos para perder grasa" />
            <EbookLi content="Capitulo 10 : Últimos consejos sobre el déficit calorico" />
          </ul>
          <p>
            PD: Esta guía esta pensada para complementarla con el PLAN DE
            ENTRENAMIENTO PARA PERDER GRASA de 12 SEMANAS
          </p>
        </div>
      </EbookLayout>
    </Layout>
  )
}

export default CreaTuPropiaRutina
