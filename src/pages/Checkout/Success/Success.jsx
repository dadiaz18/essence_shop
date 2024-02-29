import { Navbar } from "../../../components/Navbar/Navbar";
import { Footer } from "../../../components/Footer/Footer";
import "./Success.css";


const Success = () => {
  return (
    <div className="page-wrapper">
      <Navbar />
      <section className="main-section success-wrapper">
        <div className="heading-3">
          Se ha abonado exitosamente!
          </div>
      </section>
      <Footer />
    </div>
  );
};

export { Success };
