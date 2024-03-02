import { useState } from 'react';
import Tab from './Tab';
import TabTitle from './TabTitle';
import './tabs.css';

function Tabs({tabs}) {
    
    const [currentTab, setCurrentTab] = useState(0);
    
    return (
        <div className='tabs'>
            <div className='tabs-title-container'>
                {tabs.map((tab, idx) => 
                    <TabTitle key={idx} title={tab.title} onClick={() => setCurrentTab(idx)} active={currentTab === idx} />
                )}
            </div>
            <div className='tabs-items-container'>
                {currentTab >= 0 && tabs.length > currentTab && <Tab items={tabs[currentTab].items} />}         
            </div>
            
        </div>
        
    );
}

export default Tabs;
