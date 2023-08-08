import About from './About/About'
import Ebooks from './Ebooks/Ebooks'
import Footer from './Footer/Footer'
import Header from './Header/Header'
import MainSection from './MainSection/MainSection'
import Plans from './Plans/Plans'
import Questions from './Questions/Questions'

const Index: React.FC = () => {
  return (
    <>
      <Header />
      <MainSection />
      <Plans />
      <Ebooks />
      <About />
      <Questions />
      <Footer />
    </>
  )
}

export default Index
