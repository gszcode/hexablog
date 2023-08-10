import About from './About/About'
import Contact from './Contact/Contact'
import Ebooks from './Ebooks/Ebooks'
import Layout from './Layout/Layout'
import MainSection from './MainSection/MainSection'
import Plans from './Plans/Plans'
import Questions from './Questions/Questions'
import Team from './Team/Team'

const Index: React.FC = () => {
  return (
    <Layout>
      <MainSection />
      <Plans />
      <Ebooks />
      <Team />
      <About />
      <Questions />
      <Contact />
    </Layout>
  )
}

export default Index
