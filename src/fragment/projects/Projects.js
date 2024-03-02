import { useTranslation } from 'react-i18next';
import Ide from '../../component/ide/Ide';
import Title from '../../component/title/Title';
import './projects.css';

function Projects() {
    let {t} = useTranslation(); 
    
    const data = [
        {main: "Sondeju", extension: "jsx", techno: "react", imgs:[
            "./Sondeju/sondeju_homepage.png", "./Sondeju/sondeju_editor.png", "./Sondeju/sondeju_survey.png", "./Sondeju/sondeju_answers.png"
        ], repo: "https://github.com/Antoine68/sondeju"},
        {main: "JobScheduler", extension:"java", techno: "java", imgs:[
            "./JobScheduler/home.png", "./JobScheduler/conditions.png", "./JobScheduler/jobs.png"
        ]},
        {main: "Portfolio", extension:"js", techno:"react", imgs: [
            "./Portfolio/home.png"
        ]},
        {main: "CRM", extension:"php", techno:"symfony", imgs:[
            "./CRM/page.png", "./CRM/gmail.png", "./CRM/widget.png", "./CRM/popup.png"
        ]},
        {main: "FloorPlanner", extension:"js", techno:"preact", imgs:[
            "./FloorPlanner/page.png"
        ]},
        {main: "DigitErgo", extension:"jsx", techno:"react", imgs:[
            "./DigitErgo/home.png", "./DigitErgo/diagnostic.png", "./DigitErgo/diagnostic1.png"
        ]},
        {main: "GarminWatchFace", extension: "mc", techno: "garmin", imgs: [
            "./GarminWatchFace/watch.png"
        ], repo: "https://github.com/Antoine68/GarminWatchFace"}  
    ];
    
    return (
        <div className="secondary-background" id='projects-background'>
            <section id='projects' className='container'>
                <Title text={t("nav.Projects")} />
                <div id='ide-container'>
                    <Ide data={data}/>
                </div>
            </section>
            
        </div>
        
    );
}

export default Projects;