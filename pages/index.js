import Head from '../components/header'
import Nav from '../components/nav'
import Image from 'next/image'
import Formulario from '../components/formularioinicial'



export default function Home() {
  return (
    <>

      <Head />
      <Nav />
      <Formulario />






      <div class="imgavatar">
        <Image src="/avatar.png" alt="Aluno satisfeito com teste vocacional do Grupo Prominas" width={1200} height={900} />
      </div>
      <div id="content-grid">
        <div class="lado1"></div>
        <div class="lado2"></div>
      </div>

      <style jsx>{`
      #content-grid{

      }

      .imgavatar {
        position: fixed !important;
        bottom: -4px !important;
      }


    
    `}</style>
    </>
  )
}
