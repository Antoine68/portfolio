import { useState } from "react";
import "./gallery.css";

function Gallery({imgs}) {
    
    const [idxToShow, setIdxToShow] = useState(-1);
    
    function imgToAlt(img) {
        let values = img.split(".")[1].split("/");
        return values[values.length - 1];
    }
    
    return (
        <>
            <div className="gallery">
                { imgs.map((img, index) => 
                    <div className='gallery-item' key={index}>
                        <img loading='lazy' alt={imgToAlt(img)} src={img} onClick={() => setIdxToShow(index)}/>
                    </div>
                )}
            </div>
            {
                idxToShow >= 0 &&
                <div className="lightbox">
                    <span className="lightbox-control lightbox-cross" onClick={() => setIdxToShow(-1)}>x</span>
                    <div className="lightbox-content">
                        <span className="lightbox-control lightbox-previous" onClick={() => setIdxToShow(idxToShow - 1)}>◀</span>
                        <img src={imgs[idxToShow]} />
                        <span className="lightbox-control lightbox-next" onClick={() => setIdxToShow(idxToShow < imgs.length - 1 ? idxToShow + 1 : -1)}>▶</span>
                    </div>
                </div>
            }
        </>
        
    );
}
  
export default Gallery;