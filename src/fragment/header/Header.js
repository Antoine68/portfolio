import { useEffect, useRef, useState } from "react";
import Logo from "../../component/logo/Logo";
import "./header.css";
import { useTranslation } from "react-i18next";

function Header() {
  const [t, i18n] = useTranslation();
  const header = useRef(null);
  const [showNav, setShowNav] = useState(false);
  const langs = {
    "en": <svg width="61" height="41" viewBox="0 0 61 41" fill="none" xmlns="http://www.w3.org/2000/svg">
      <g clip-path="url(#clip0_531_142)">
      <path d="M55.9193 0.92511H4.90643C2.42463 0.92511 0.412872 2.93687 0.412872 5.41866V35.742C0.412872 38.2237 2.42463 40.2355 4.90643 40.2355H55.9193C58.401 40.2355 60.4129 38.2238 60.4129 35.742V5.41866C60.4129 2.93687 58.4011 0.92511 55.9193 0.92511Z" fill="#41479B"/>
      <path d="M60.3506 4.67581C59.9965 2.5478 58.1479 0.924988 55.9193 0.924988H54.7501L35.5853 13.4813V0.925105H25.2405V13.4814L6.07561 0.925105H4.90643C2.67787 0.925105 0.82924 2.5478 0.475099 4.67592L16.8553 15.408H0.412872V25.7528H16.8553L0.475099 36.4846C0.82924 38.6126 2.67787 40.2354 4.90643 40.2354H6.07561L25.2405 27.6791V40.2354H35.5853V27.6791L54.7501 40.2354H55.9193C58.1479 40.2354 59.9965 38.6127 60.3506 36.4846L43.9704 25.7526H60.4129V15.4077H43.9704L60.3506 4.67581Z" fill="#F5F5F5"/>
      <path d="M33.5163 0.92511H27.3094V17.4768H0.412872V23.6837H27.3094V40.2354H33.5163V23.6837H60.4129V17.4768H33.5163V0.92511Z" fill="#FF4B55"/>
      <path d="M3.3183 39.9457L25.1835 25.7527H21.3833L1.4938 38.6635C1.98048 39.2315 2.60591 39.6766 3.3183 39.9457Z" fill="#FF4B55"/>
      <path d="M41.0052 25.7527H37.2051L58.3827 39.4994C58.9753 39.1102 59.4699 38.5845 59.8226 37.9671L41.0052 25.7527Z" fill="#FF4B55"/>
      <path d="M0.88736 3.40938L19.3713 15.4079H23.1715L2.22634 1.81177C1.66396 2.23036 1.20377 2.77763 0.88736 3.40938Z" fill="#FF4B55"/>
      <path d="M39.3855 15.4078L59.3114 2.47328C58.8194 1.90715 58.189 1.46465 57.4717 1.20062L35.5853 15.4078H39.3855Z" fill="#FF4B55"/>
      </g>
      <defs>
      <clipPath id="clip0_531_142">
      <rect width="61" height="41" fill="white"/>
      </clipPath>
      </defs>
    </svg>,
    "fr": <svg width="61" height="45" viewBox="0 0 61 45" fill="none" xmlns="http://www.w3.org/2000/svg">
      <g clip-path="url(#clip0_525_162)">
      <path d="M60.6246 37.5382C60.6246 39.3064 59.9222 41.002 58.672 42.2523C57.4217 43.5025 55.726 44.2049 53.9579 44.2049H40.6246V0.871582H53.9579C55.726 0.871582 57.4217 1.57396 58.672 2.8242C59.9222 4.07445 60.6246 5.77014 60.6246 7.53825V37.5382Z" fill="#ED2939"/>
      <path d="M7.29127 0.871582C5.52316 0.871582 3.82747 1.57396 2.57722 2.8242C1.32698 4.07445 0.624603 5.77014 0.624603 7.53825L0.624603 37.5382C0.624603 39.3064 1.32698 41.002 2.57722 42.2523C3.82747 43.5025 5.52316 44.2049 7.29127 44.2049H20.6246V0.871582H7.29127Z" fill="#002495"/>
      <path d="M20.6246 0.871582H40.6246V44.2049H20.6246V0.871582Z" fill="#EEEEEE"/>
      </g>
      <defs>
      <clipPath id="clip0_525_162">
      <rect width="61" height="45" fill="white"/>
      </clipPath>
      </defs>
    </svg>
  }
    
  function toggleNav() {
    header.current.classList.toggle("nav-open");
    document.body.classList.toggle("overflow");
    setShowNav(header.current.classList.contains("nav-open"));
  }
  
  function nextLang() {
    let keys = Object.keys(langs);
    let currentIdx = keys.indexOf(i18n.language);
    i18n.changeLanguage(keys[(currentIdx + 1) % keys.length]);
  }

  return (
      <header ref={header}>
        <div className="header-content">
          <h1><a href="#"><Logo showText={true}/></a></h1>
          <nav>     
            <button id="lang-button" aria-label="Language" onClick={() => nextLang()}>{langs[i18n.language.split("-")[0]]}</button>
            <ul id="nav-links">
                <li><a onClick={showNav ? () => toggleNav() : undefined} href="#presentation">{t("nav.Presentation")}</a></li>
                <li><a onClick={showNav ? () => toggleNav() : undefined} href="#skills">{t("nav.Skills")}</a></li>
                <li><a onClick={showNav ? () => toggleNav() : undefined} href="#projects">{t("nav.Projects")}</a></li>
                <li><a onClick={showNav ? () => toggleNav() : undefined} href="#contact">{t("nav.Contact")}</a></li>
            </ul>
          </nav>
          <button id="burger-menu-button" onClick={() => toggleNav()}>
            <span>Afficher le menu</span>
          </button>
        </div>
      </header>
    );
  }
  
  export default Header;