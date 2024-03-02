import './tabs.css';

function TabTitle({title, onClick, active}) {
    
    return (
        <span className={'tabs-title' + (active ? ' tabs-title-active' : '')} onClick={onClick}>
           {title}
        </span>
        
    );
}

export default TabTitle;
