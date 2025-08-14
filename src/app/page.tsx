import Empresa from "../components/home/empresa";
import Hero from "../components/home/hero";
import Plano from "../components/home/plano";
import Sobre from "../components/home/sobre";
//import WppLink from "../components/wppLink";


export default function Home() {
  return (
      <main>
        <Hero />
        <Sobre />
        <Plano />
        <Empresa />
      </main>
  );
}
