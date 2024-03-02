import './tabs.css';

function TabCard({item}) {
    return (
        <div className='tab-card'>
            <div className='tab-card-content' >
                <span className='tab-card-title'>{item.title}</span>
                <p className='tab-card-text'>{item.text}</p>
                <span className='tab-card-footer'>{item.footer}</span>
            </div>
        </div>
        
    );
}

export default TabCard;