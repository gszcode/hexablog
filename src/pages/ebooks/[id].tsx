import { ebooksData, Data } from '@/utils/dataMapping'
import { GetStaticPaths, GetStaticProps } from 'next'

interface Props {
  data: Data | null
}

const EbookId: React.FC<Props> = ({ data }) => {
  return (
    <section>
      <h1>{data?.title}</h1>
    </section>
  )
}

export default EbookId

export const getStaticPaths: GetStaticPaths = async () => {
  try {
    const paths = ebooksData.map(({ id }) => ({ params: { id: `${id}` } }))

    return {
      paths,
      fallback: false
    }
  } catch (error) {
    console.log(error)
    return {
      paths: [],
      fallback: false
    }
  }
}

export const getStaticProps: GetStaticProps<Props> = async ({ params }) => {
  try {
    const ebookId = Number(params?.id)
    const data = ebooksData.find((item) => item.id === ebookId) || null

    return {
      props: {
        data
      }
    }
  } catch (error) {
    console.log(error)
    return {
      props: {
        data: null
      }
    }
  }
}
