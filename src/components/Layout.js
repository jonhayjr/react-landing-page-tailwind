import Nav from "./Nav";
import Footer from "./Footer";

const Layout = ({children}) => {
  return (
    <div className="flex flex-col min-h-screen">  
      <div className="grow">
        <Nav/>
          {children}
      </div>
      <Footer/>
    </div>
  )
}

export default Layout