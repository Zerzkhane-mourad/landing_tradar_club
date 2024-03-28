import Footer from "./Footer"
import Navbar from "./Navbar"


const MainLayout = ({ children }) => {
  return (
    <div className="flex h-screen flex-col overflow-y-scroll custom-scrollbar ">
      <Navbar />
      <div className="flex-1">
        {children}
      </div>
      <Footer />
    </div>
  )
}

export default MainLayout