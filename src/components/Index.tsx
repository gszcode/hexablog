import Ebooks from './Ebooks/Ebooks'
import Footer from './Footer/Footer'
import Header from './Header/Header'
import MainSection from './MainSection/MainSection'
import Plans from './Plans/Plans'

const Index: React.FC = () => {
  return (
    <>
      <Header />
      <MainSection />
      <Plans />
      <Ebooks />
      <Footer />
    </>
  )
}

export default Index
