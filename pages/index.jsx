import Head from 'next/head'
import Link from 'next/link'
import { Navbar } from '../components/navbar'

export default function Home() {


  return (
    <>
      <Head>
        <title>HZ Apps</title>
        <meta name="description" content="A collection of apps from hanzzakino" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Navbar />
      
      <div className="hzcontainer">
        <div className="hzrow">
          <br /><br /><br /><br /><br />
        </div>
        <div className="hzrow">
          <Link href="/apps/simple-encryption"><a className="hzabtn">SimpleEncryption</a></Link>
        </div>
        <div className="hzrow">
          <br /><br /><br /><br /><br />
          <br /><br /><br /><br /><br />
          <br /><br /><br /><br /><br />
          <br /><br /><br /><br /><br />
          <br /><br /><br /><br /><br />
          <br /><br /><br /><br /><br />
          <br /><br /><br /><br /><br />
        </div>
      </div>
    
    </>
  )


}
