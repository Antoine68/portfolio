import Skill from "../../component/skill/Skill";
import Title from "../../component/title/Title";
import SoftwareLogo from "./software.svg";
import MobileLogo from "./mobile.svg";
import WebsiteLogo from "./website.svg";
import "./skills.css";
import SvgArtSoftware from "./SvgArtSoftware";
import SvgArtMobile from "./SvgArtMobile";
import SvgArtValidation from "./SvgArtValidation";
import SvgArtWeb from "./SvgArtWeb";
import { useTranslation } from "react-i18next";

function Skills() {
    
    let {t} = useTranslation();    
    
    return (
      <section id='skills' className='container'>
        <Title text={t("nav.Skills")} />
        <div className="skills-content">
            <div className="skills-relative">
                <div id="left-line" />
                <div id="skills-items">
                    <Skill
                        logo={<img src={WebsiteLogo} alt="Web logo"/>} 
                        text={<><span>{t("skills.website.textHeader")}</span> {t("skills.website.text")}</>}/>
                    <SvgArtWeb />
                    <Skill
                        logo={<img src={SoftwareLogo} alt="Software logo"/>} 
                        text={<><span>{t("skills.software.textHeader")}</span> {t("skills.software.text")}</>}/>
                    <SvgArtSoftware />
                    <Skill
                        logo={<img src={MobileLogo} alt="Mobile logo"/>} 
                        text={<><span>{t("skills.mobile.textHeader")}</span> {t("skills.mobile.text")}</>}/>
                    <SvgArtMobile />
                </div>
            </div>
            <Skill className="last"
            text={<><span style={{color: "black"}}>{t("skills.validation.textHeader")}</span> {t("skills.validation.text")}</>}/>
            <SvgArtValidation />
        </div>
        
      </section>
    );
  }
  
  export default Skills;