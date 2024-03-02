import TabCard from './TabCard';
import './tabs.css';

function Tab({items}) {
    
    return (
        <div className='tab'>
           {items.map((item, idx) => 
               <TabCard key={idx} item={item} />
           )}
        </div>
        
    );
}

export default Tab;