import Head from '../components/header'
import Nav from '../components/nav'
import Image from 'next/image'


export default function Home() {
  return (
    <>

      <Head />
      <Nav />


      <div class="imgavatar">
            <Image src="/avatar.png" alt="Aluno satisfeito com teste vocacional do Grupo Prominas" width={900} height={900} />
        </div>

      <style jsx>{`
                      .imgavatar {
                        position: absolute !important;
                        bottom: 0px !important;
                        left:5% !important;
                    }
    
    `}</style>
    </>
  )
}
