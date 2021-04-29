import Image from 'next/image'


export default function nav() {
  return (
      <>
      
    <div className="menu">
        <Image src="/logo.png" alt="Prominas Logo" width={230} height={55} />
    </div>
    <style jsx>{`
   .menu{
        text-align: left;
        margin-left: 20%;
        margin-right: 20%;
    }

    
    `}</style>

    </>
    
  )
}