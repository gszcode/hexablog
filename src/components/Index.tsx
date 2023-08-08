import About from './About/About'
import Contact from './Contact/Contact'
import Ebooks from './Ebooks/Ebooks'
import Footer from './Footer/Footer'
import Header from './Header/Header'
import MainSection from './MainSection/MainSection'
import Plans from './Plans/Plans'
import Questions from './Questions/Questions'
import Team from './Team/Team'

const Index: React.FC = () => {
  return (
    <>
      <Header />
      <MainSection />
      <Plans />
      <Ebooks />
      <Team />
      <About />
      <Questions />
      <Contact />
      <Footer />
    </>
  )
}

export default Index
