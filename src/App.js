import Header from "./components/header/header";
import Footer from "./components/footer/footer";
import Link from "./components/link/link";
import { Helmet } from 'react-helmet';

const App = () => {
  return (
    <>
      <Helmet>
        <title>Tambapro - Kaszinó bónuszok</title>‍
        <meta name="description" content="Legjobb kaszinó oldalak, befizetési bónuszok mind kriptovalutával és kártyás befizetéssel! Ha egy kis kikapcsolódásra vágysz itt találsz rá megfelelő kaszinót!" />
        <meta name="keywords" content="kaszinó, bónusz, befizetés, kaszinóbónusz, rulett, slot, nyerőgép" />
        <meta property="og:site_name" content="Tambapro - Kaszinó bónuszok" />
        <meta property="og:locale" content="hu_HU" />
        <meta property="og:type" content="website" />
        <meta property="og:description" content="Legjobb kaszinó oldalak, befizetési bónuszok mind kriptovalutával és kártyás befizetéssel! Ha egy kis kikapcsolódásra vágysz itt találsz rá megfelelő kaszinót!" />
        <meta property="og:url" content="https://tamba.pro/" />
        <meta property="og:image" content="https://cdn.discordapp.com/attachments/1017925966691053660/1121490805379571913/Untitled_Artwork.png" />
      </Helmet>
      <Header />
      <Link />
      <Footer />
    </>
  );
};

export default App;
