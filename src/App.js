import Button from "./components/Button";
import {Download, Features, SectionWrapper} from "./components";
import assets from "./assets";
import styles from "./styles/Global";

const App = () => {
  return (
    <>
     <SectionWrapper
     title="Your own store of Nifty NFTs. Start Selling & Growing!"
     description="Buy, Store, Collect NFTS, exchange & earn crypto. Join a community of over 25 million people using ProNef Marketplace."
     showBtn
     mockupImg={assets.homeHero}
     banner="banner"
     />
     <SectionWrapper
     title="Smart User Interface Marketplace."
     description="Experience a buttery smooth UI of the ProNef NFT Marketplace. Smooth constanst colors of a fluent UI design."
     mockupImg={assets.homeCards}
     reverse
     />
     <Features/>
     <SectionWrapper
     title="Deployment"
     description="ProNef is built using Expo which runs natively on all users' devices. You can easily get your app into people's hands."
     mockupImg={assets.feature}
     reverse
     />
     <SectionWrapper
     title="Creative way to showcase the store."
     description="The app contains screens. The first screen lists all NFTs while the second one shows the detauls of a specific NFT."
     mockupImg={assets.mockup}
     banner='banner02'
     />
     <Download/>

     <div className="px-4 py-2 justify-center items-center bg-primary flex-col text-center banner04">
      <p className={`${styles.pText} ${styles.whiteText}`}>Made with Love by {" "} <span className="bold">Adel Sliman</span></p>
     </div>
    </>

  );
}

export default App;
