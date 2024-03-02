import { useTranslation } from 'react-i18next';
import Logo from '../../component/logo/Logo';
import './footer.css';

function Footer() {
  
  let {t} = useTranslation();
    
    return (
      <footer>
        <div className='footer-content'>
            <span>{t("footer.rights")} © {(new Date()).getFullYear()}</span>
            <Logo showText={true}/>
            <span>{t("footer.thanks")}</span>
        </div>
      </footer>  
    );

}

export default Footer;