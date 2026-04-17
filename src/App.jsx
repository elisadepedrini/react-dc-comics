import 'bootstrap/dist/css/bootstrap.min.css'
import AppHeader from './components/AppHeader'
import AppMain from './components/AppMain'
import AppFooter from './components/AppFooter'
import AppProducts from './components/AppProduct'
import AppFollow from './components/AppFollow'

function App() {
  return (
    <>
      <AppHeader />
      <AppMain />
      <AppProducts />
      <AppFooter />
      <AppFollow />
    </>
  )
}

export default App
