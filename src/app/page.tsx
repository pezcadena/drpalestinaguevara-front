import Footer from "./components/footer";
import Gallery from "./components/gallery";
import Header from "./components/header";
import HeadlineCard from "./components/headline-card";
import Navbar from "./components/navbar";
import NewContentCard from "./components/new-content-card";
import Subtitle from "./components/subtitle";
export default function Home() {
  return (
    <main className="p-gap flex flex-col gap-gap max-w-screen-xl mx-auto">
      <section className="flex flex-col gap-gap">
        <Header/>
        <Navbar/>
        <div className="flex gap-gap">
          <HeadlineCard/>
          <Gallery/>
        </div>
      </section>
      <section className="flex flex-col gap-gap">
        <Subtitle label="Últimas publicaciones"/>
        <div className="flex flex-wrap -m-mitad-gap">
          <div className="grow basis-1/3 p-mitad-gap">
            <NewContentCard/>
          </div>
          <div className="grow basis-1/3 p-mitad-gap">
            <NewContentCard/>
          </div>
          <div className="grow basis-1/3 p-mitad-gap">
            <NewContentCard/>
          </div>
          <div className="grow basis-1/3 p-mitad-gap">
            <NewContentCard/>
          </div>
          <div className="grow basis-1/3 p-mitad-gap">
            <NewContentCard/>
          </div>
        </div>
      </section>
      <Footer/>
    </main>
  );
}
