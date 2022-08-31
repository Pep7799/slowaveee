import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTwitter } from '@fortawesome/free-brands-svg-icons'
export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="preconnect" href="https://fonts.googleapis.com"/>
        <link rel="preconnect" href="https://fonts.gstatic.com"/>
        <link href="https://fonts.googleapis.com/css2?family=Bebas+Neue&display=swap" rel="stylesheet"/>
        <link href="https://fonts.googleapis.com/css2?family=DM+Sans&display=swap" rel="stylesheet"/>
        <link href="https://fonts.googleapis.com/css2?family=Inter&display=swap" rel="stylesheet"/>
      </Head>

      <main className={styles.main}>
        <div className={styles.mainlogo}>
         <img src="/images/logo1.png" alt="logo" className={styles.logo} /> 
         <img src="/images/logo2.png" alt="logo" className={styles.logo2} /> 
         
        </div>

        <div className={styles.body}>
          <div className={styles.maintitle}>
            <h2 className={styles.title1}>Investing in the future of web3</h2>
            <h4  className={styles.title2}>We invest in daring Web3 founders with disruptive ideas.</h4>
          </div>
          <div>
            <img src="/images/coin.png" className={styles.coin} alt="coin" />
          </div>
        </div>

        
      </main>

      <section className={styles.footersection}>
        <div>
          <h2 className={styles.footertitle}>HAVE A BREATHTAKING IDEA?</h2>
          <h3 className={styles.footert2}>pitch@slowave.vc</h3>
        </div>
        <div>
          <h3 className={styles.media}>Follow us on        
          <span className={styles.span}>
          <FontAwesomeIcon icon={faTwitter} className = {styles.fonticon} style={{color:"#1143C5", marginLeft: "5"}}/>
          </span>
          </h3>
        </div>
        
        </section>
        <div className={styles.line}></div>

      <footer className={styles.footer}>
        <div className={styles.footerimg}>
          <img src="/images/logo3.png" alt="logo" className={styles.logo3} /> 
          <img src="/images/logo4.png" alt="logo" className={styles.logo4} />
        </div> 
        <div>
         <h3 className={styles.footerright}> © 2022 Slowave. All Rights Reserved</h3>
        </div>      
      </footer>
     
    </div>
  )
}
