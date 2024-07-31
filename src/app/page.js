import Navbar from "./component/navbar";
import Hero1 from "./component/hero1";
import About from "./component/about";
import Services from "./component/service/page";
import Card from "./component/card/page";
import Contact1 from "./component/contact1";
import Footer from "./component/footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero1 />
      <Services />
      <About />
      <Card />
      <Contact1 />
      <Footer />
    </>
  );
}
