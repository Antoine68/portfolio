import { useRef, useState } from 'react';
import Logo from '../logo/Logo';
import './ide.css';
import Markdown from 'react-markdown';
import { useTranslation } from 'react-i18next';
import Gallery from '../gallery/Gallery';

function Ide({data}) {
    
    const {t} = useTranslation();
    
    const logos = {
        symfony: <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg"><g clip-path="url(#clip0_64_298)"><path d="M15.9994 0.03125C7.18056 0.03125 0.03125 7.18013 0.03125 15.9991C0.03125 24.8191 7.18056 31.9688 15.9994 31.9688C24.8194 31.9688 31.9688 24.8191 31.9688 15.9991C31.9688 7.18013 24.8194 0.03125 15.9994 0.03125ZM24.6117 9.27331C23.8724 9.29931 23.3622 8.85775 23.3382 8.18637C23.3307 7.94006 23.3939 7.72588 23.5631 7.47375C23.7276 7.15125 23.7632 7.11381 23.7591 6.97294C23.7437 6.55056 23.1051 6.53469 22.9305 6.54275C20.5334 6.62225 19.9015 9.857 19.3895 12.4878L19.1389 13.8748C20.5191 14.0767 21.4989 13.8278 22.0457 13.4741C22.8151 12.9748 21.83 12.4613 21.9537 11.8931C22.0805 11.314 22.6069 11.0344 23.0251 11.0232C23.6112 11.0079 24.0296 11.6162 24.0164 12.233C23.9958 13.2531 22.6426 14.6542 19.9356 14.5968C19.606 14.5895 19.3026 14.5659 19.0202 14.5316L18.5092 17.3504C18.0523 19.4837 17.4452 22.3998 15.272 24.9438C13.4051 27.1643 11.5109 27.5082 10.6628 27.537C9.07531 27.5916 8.0235 26.7448 7.98525 25.6153C7.94887 24.5211 8.91594 23.9234 9.55094 23.9036C10.3978 23.8755 10.9841 24.4894 11.0067 25.1968C11.0282 25.7946 10.7159 25.9817 10.5084 26.0945C10.3707 26.206 10.163 26.3198 10.1708 26.566C10.1758 26.671 10.2886 26.9137 10.6409 26.9023C11.3123 26.8794 11.7581 26.5475 12.0692 26.3254C13.6154 25.0377 14.2103 22.7923 14.9895 18.705L15.1527 17.7151C15.4189 16.3856 15.7131 14.9042 16.1628 13.4274C15.0731 12.6069 14.4195 11.5899 12.9539 11.192C11.9491 10.9189 11.3362 11.1507 10.9058 11.6954C10.3956 12.3405 10.5648 13.18 11.0576 13.6722L11.8719 14.5726C12.8694 15.726 13.4159 16.6234 13.2099 17.8296C12.8842 19.7576 10.5879 21.2353 7.87369 20.4011C5.55662 19.6874 5.12362 18.0469 5.40219 17.1424C5.64756 16.3474 6.27938 16.1972 6.8975 16.3861C7.55919 16.5914 7.81881 17.3958 7.62937 18.0125C7.60775 18.0786 7.574 18.1903 7.50513 18.3374C7.428 18.5079 7.28606 18.6573 7.22419 18.8556C7.0755 19.3411 7.74038 19.6858 8.20356 19.8282C9.24031 20.1473 10.2521 19.6053 10.5084 18.7663C10.7467 17.9951 10.2592 17.4572 10.0569 17.2511L9.07525 16.2C8.62637 15.6994 7.639 14.3056 8.12012 12.7397C8.30594 12.1362 8.69763 11.4959 9.265 11.0717C10.4637 10.1787 11.7671 10.0316 13.0085 10.3889C14.6139 10.8506 15.3859 11.9127 16.3865 12.7324C16.9461 11.0906 17.7224 9.48294 18.8894 8.126C19.9436 6.88988 21.3596 5.995 22.9818 5.93944C24.6028 5.88594 25.8279 6.62063 25.8682 7.78344C25.8846 8.27844 25.6002 9.24038 24.6117 9.27331Z" fill="black"/></g><defs><clipPath id="clip0_64_298"><rect width="32" height="32" fill="white"/></clipPath></defs></svg>,
        md: <svg viewBox="0 0 21 27" fill="none" xmlns="http://www.w3.org/2000/svg"><g clip-path="url(#clip0_53_149)"><path d="M1.42969 0C0.633735 0 0 0.641549 0 1.4375V24.9443C0 25.7403 0.633735 26.3818 1.42969 26.3818H18.8828C19.6788 26.3818 20.3125 25.7403 20.3125 24.9443V7.28125H15.0547C13.9782 7.28125 13.0391 6.49597 13.0391 5.45312V0H1.42969ZM14.0391 0V5.45312C14.0391 5.88166 14.4471 6.28125 15.0547 6.28125H20.3125L14.0391 0ZM5.37891 13.2764L7.09229 15.2822L8.80615 13.2764L10.9478 13.3179V19.8276H8.80615V16.5518L7.10059 18.6729V18.6934L7.09229 18.6836L7.08447 18.6934V18.6729L5.37891 16.5518V19.8276H3.2373V13.3179L5.37891 13.2764ZM13.0918 13.2764H15.2935V16.6313H17.0752L14.1924 20.4619L11.3101 16.6313H13.0918V13.2764Z" fill="black"/></g><defs><clip-path id="clip0_53_149"><rect width="21" height="27" fill="white"/></clip-path></defs></svg>,
        react: <svg viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M18.6788 15.9758C18.6788 14.5414 17.4795 13.3784 15.9999 13.3784C14.5205 13.3784 13.321 14.5414 13.321 15.9758C13.321 17.4104 14.5205 18.5733 15.9999 18.5733C17.4795 18.5733 18.6788 17.4104 18.6788 15.9758Z" fill="#53C1DE"/><path fill-rule="evenodd" clip-rule="evenodd" d="M24.7004 11.1537C25.2661 8.92478 25.9772 4.79148 23.4704 3.39016C20.9753 1.99495 17.7284 4.66843 16.0139 6.27318C14.3044 4.68442 10.9663 2.02237 8.46163 3.42814C5.96751 4.82803 6.73664 8.8928 7.3149 11.1357C4.98831 11.7764 1 13.1564 1 15.9759C1 18.7874 4.98416 20.2888 7.29698 20.9289C6.71658 23.1842 5.98596 27.1909 8.48327 28.5877C10.9973 29.9932 14.325 27.3945 16.0554 25.7722C17.7809 27.3864 20.9966 30.0021 23.4922 28.6014C25.9956 27.1963 25.3436 23.1184 24.7653 20.8625C27.0073 20.221 31 18.7523 31 15.9759C31 13.1835 26.9903 11.7923 24.7004 11.1537ZM24.4162 19.667C24.0365 18.5016 23.524 17.2623 22.8971 15.9821C23.4955 14.7321 23.9881 13.5088 24.3572 12.3509C26.0359 12.8228 29.7185 13.9013 29.7185 15.9759C29.7185 18.07 26.1846 19.1587 24.4162 19.667ZM22.85 27.526C20.988 28.571 18.2221 26.0696 16.9478 24.8809C17.7932 23.9844 18.638 22.9422 19.4625 21.7849C20.9129 21.6602 22.283 21.4562 23.5256 21.1777C23.9326 22.7734 24.7202 26.4763 22.85 27.526ZM9.12362 27.5111C7.26143 26.47 8.11258 22.8946 8.53957 21.2333C9.76834 21.4969 11.1286 21.6865 12.5824 21.8008C13.4123 22.9332 14.2816 23.9741 15.1576 24.8857C14.0753 25.9008 10.9945 28.557 9.12362 27.5111ZM2.28149 15.9759C2.28149 13.874 5.94207 12.8033 7.65904 12.3326C8.03451 13.5165 8.52695 14.7544 9.12123 16.0062C8.51925 17.2766 8.01977 18.5341 7.64085 19.732C6.00369 19.2776 2.28149 18.0791 2.28149 15.9759ZM9.1037 4.50354C10.9735 3.45416 13.8747 6.00983 15.1159 7.16013C14.2444 8.06754 13.3831 9.1006 12.5603 10.2265C11.1494 10.3533 9.79875 10.5569 8.55709 10.8297C8.09125 9.02071 7.23592 5.55179 9.1037 4.50354ZM20.3793 11.5771C21.3365 11.6942 22.2536 11.85 23.1147 12.0406C22.8562 12.844 22.534 13.6841 22.1545 14.5453C21.6044 13.5333 21.0139 12.5416 20.3793 11.5771ZM16.0143 8.0481C16.6054 8.66897 17.1974 9.3623 17.7798 10.1145C16.5985 10.0603 15.4153 10.0601 14.234 10.1137C14.8169 9.36848 15.414 8.67618 16.0143 8.0481ZM9.8565 14.5444C9.48329 13.6862 9.16398 12.8424 8.90322 12.0275C9.75918 11.8418 10.672 11.69 11.623 11.5748C10.9866 12.5372 10.3971 13.5285 9.8565 14.5444ZM11.6503 20.4657C10.6679 20.3594 9.74126 20.2153 8.88556 20.0347C9.15044 19.2055 9.47678 18.3435 9.85796 17.4668C10.406 18.4933 11.0045 19.4942 11.6503 20.4657ZM16.0498 23.9915C15.4424 23.356 14.8365 22.6531 14.2448 21.8971C15.4328 21.9423 16.6231 21.9424 17.811 21.891C17.2268 22.6608 16.6369 23.3647 16.0498 23.9915ZM22.1667 17.4222C22.5677 18.3084 22.9057 19.1657 23.1742 19.9809C22.3043 20.1734 21.3652 20.3284 20.3757 20.4435C21.015 19.4607 21.6149 18.4536 22.1667 17.4222ZM18.7473 20.5941C16.9301 20.72 15.1016 20.7186 13.2838 20.6044C12.2509 19.1415 11.3314 17.603 10.5377 16.0058C11.3276 14.4119 12.2404 12.8764 13.2684 11.4158C15.0875 11.2825 16.9178 11.2821 18.7369 11.4166C19.7561 12.8771 20.6675 14.4086 21.4757 15.9881C20.6771 17.5812 19.7595 19.1198 18.7473 20.5941ZM22.8303 4.4666C24.7006 5.51254 23.8681 9.22726 23.4595 10.8426C22.2149 10.5641 20.8633 10.3569 19.4483 10.2281C18.6239 9.09004 17.7698 8.05518 16.9124 7.15949C18.1695 5.98441 20.9781 3.43089 22.8303 4.4666Z" fill="#53C1DE"/></svg>,
        garmin:<svg viewBox="0 0 32 30" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M29.355 29.229H2.64602C1.62102 29.229 0.798023 28.713 0.386023 27.89C-0.129977 27.078 -0.129977 26.035 0.386023 25.218L13.741 2.10302C14.252 1.28602 15.074 0.77002 16.001 0.77002C17.028 0.77002 17.85 1.28602 18.252 2.10302L31.616 25.218C32.132 26.041 32.132 27.073 31.616 27.89C31.199 28.817 30.376 29.229 29.356 29.229H29.355Z" fill="black"/></svg>,
        java: <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M16.0497 8.44062C22.6378 3.32607 19.2566 0 19.2566 0C19.7598 5.28738 13.813 6.53583 12.2189 10.1692C11.1312 12.6485 12.9638 14.8193 16.0475 17.5554C15.7749 16.9494 15.3544 16.3606 14.9288 15.7645C13.4769 13.7313 11.9645 11.6132 16.0497 8.44062Z" fill="#E76F00"/><path d="M17.1015 18.6768C17.1015 18.6768 19.0835 17.0777 17.5139 15.3006C12.1931 9.27168 23.3333 6.53564 23.3333 6.53564C16.5317 9.81231 17.5471 11.7572 19.2567 14.12C21.0871 16.6536 17.1015 18.6768 17.1015 18.6768Z" fill="#E76F00"/><path d="M22.937 23.4456C29.0423 20.3258 26.2195 17.3278 24.2492 17.7317C23.7662 17.8305 23.5509 17.9162 23.5509 17.9162C23.5509 17.9162 23.7302 17.64 24.0726 17.5204C27.9705 16.1729 30.9682 21.4949 22.8143 23.6028C22.8143 23.6028 22.9088 23.5198 22.937 23.4456Z" fill="#5382A1"/><path d="M10.2329 19.4971C6.41306 18.9955 12.3274 17.6141 12.3274 17.6141C12.3274 17.6141 10.0306 17.4618 7.20586 18.8045C3.86571 20.3934 15.468 21.116 21.4739 19.5627C22.0983 19.1434 22.9613 18.78 22.9613 18.78C22.9613 18.78 20.5036 19.2116 18.056 19.4147C15.0611 19.6614 11.8458 19.7095 10.2329 19.4971Z" fill="#5382A1"/><path d="M11.6864 22.476C9.55624 22.2594 10.951 21.2441 10.951 21.2441C5.43897 23.0431 14.0178 25.0832 21.7199 22.8684C20.9012 22.5846 20.3806 22.0655 20.3806 22.0655C16.6163 22.7783 14.441 22.7555 11.6864 22.476Z" fill="#5382A1"/><path d="M12.6144 25.6993C10.4859 25.4587 11.7294 24.7476 11.7294 24.7476C6.72588 26.1224 14.7728 28.9627 21.1432 26.2779C20.0998 25.8789 19.3527 25.4183 19.3527 25.4183C16.511 25.9471 15.193 25.9886 12.6144 25.6993Z" fill="#5382A1"/><path d="M25.9387 27.339C25.9387 27.339 26.8589 28.0846 24.9252 28.6614C21.2481 29.7568 9.62093 30.0876 6.39094 28.7051C5.22984 28.2084 7.40723 27.5191 8.09215 27.3744C8.80646 27.2221 9.21466 27.2505 9.21466 27.2505C7.9234 26.356 0.868489 29.0069 5.63111 29.7661C18.6195 31.8374 29.3077 28.8333 25.9387 27.339Z" fill="#5382A1"/><path d="M28 28.9678C27.7869 31.6946 18.7877 32.2682 12.9274 31.8993C9.10431 31.6582 8.33811 31.0557 8.3269 31.0469C11.9859 31.6401 18.1549 31.7481 23.1568 30.8224C27.5903 30.0015 28 28.9678 28 28.9678Z" fill="#5382A1"/></svg>,
        preact:<svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M16 2L28.12 9V23L16 30L3.88 23V9L16 2Z" fill="#673AB8"/><path d="M18.4998 19.2559C23.1968 15.6518 25.8871 11.2737 24.5086 9.47727C23.1301 7.68083 18.205 9.14628 13.5079 12.7504C8.81088 16.3546 6.12064 20.7327 7.4991 22.5291C8.87756 24.3256 13.8027 22.8601 18.4998 19.2559Z" stroke="white" stroke-width="1.875"/><path d="M24.5087 22.5218C25.8872 20.7253 23.1969 16.3472 18.4999 12.7431C13.8028 9.13891 8.87768 7.67346 7.49922 9.46991C6.12076 11.2664 8.811 15.6444 13.508 19.2486C18.2051 22.8527 23.1303 24.3182 24.5087 22.5218Z" stroke="white" stroke-width="1.875"/><path d="M16 17.8601C17.0273 17.8601 17.86 17.0274 17.86 16.0001C17.86 14.9729 17.0273 14.1401 16 14.1401C14.9728 14.1401 14.14 14.9729 14.14 16.0001C14.14 17.0274 14.9728 17.8601 16 17.8601Z" fill="white"/></svg>,
        php: <svg width="65" height="65" viewBox="0 0 65 65" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M32.6063 60.2188C48.0702 60.2188 60.6063 47.6827 60.6063 32.2188C60.6063 16.7548 48.0702 4.21875 32.6063 4.21875C17.1423 4.21875 4.60626 16.7548 4.60626 32.2188C4.60626 47.6827 17.1423 60.2188 32.6063 60.2188Z" fill="#8892BF"/><path d="M29.4847 20.2188H32.8447L31.8951 25.2672H34.9143C36.5701 25.3026 37.8035 25.6726 38.6153 26.3774C39.4431 27.082 39.6867 28.4216 39.3459 30.395L37.7145 39.1966H34.3057L35.8639 30.7914C36.0261 29.9102 35.9775 29.2847 35.7179 28.9148C35.4583 28.5448 34.8983 28.3598 34.0379 28.3598L31.3351 28.3334L29.3385 39.1966H25.9785L29.4847 20.2188Z" fill="white"/><path fill-rule="evenodd" clip-rule="evenodd" d="M14.0881 25.2673H20.6135C22.5287 25.2847 23.9167 25.8841 24.7771 27.0645C25.6375 28.2451 25.9215 29.8573 25.6293 31.9015C25.5159 32.8357 25.2641 33.7517 24.8745 34.6505C24.5011 35.5491 23.9819 36.3595 23.3163 37.0821C22.5045 37.9983 21.6361 38.5797 20.7109 38.8267C19.7856 39.0735 18.8278 39.1967 17.8378 39.1967H14.9159L13.9907 44.2187H10.6063L14.0881 25.2673ZM15.476 36.2099L16.932 28.3069H17.4238C17.6026 28.3069 17.7891 28.2979 17.9839 28.2805C19.2826 28.2629 20.3617 28.3951 21.2223 28.6769C22.0987 28.9587 22.3909 30.0249 22.0987 31.8751C21.7419 34.0779 21.0435 35.3641 20.0048 35.7341C18.9661 36.0867 17.6673 36.2539 16.109 36.2363H15.7681C15.6707 36.2363 15.5734 36.2273 15.476 36.2099Z" fill="white"/><path fill-rule="evenodd" clip-rule="evenodd" d="M49.4792 25.2673H42.9538L39.472 44.2187H42.8564L43.7818 39.1967H46.7036C47.6936 39.1967 48.6514 39.0735 49.5766 38.8267C50.502 38.5797 51.3702 37.9983 52.182 37.0821C52.8476 36.3595 53.3668 35.5491 53.7402 34.6505C54.1298 33.7517 54.3816 32.8357 54.495 31.9015C54.7872 29.8573 54.5034 28.2451 53.6428 27.0645C52.7824 25.8841 51.3946 25.2847 49.4792 25.2673ZM45.7978 28.3069L44.3418 36.2099C44.4392 36.2273 44.5366 36.2363 44.634 36.2363H44.9748C46.5332 36.2539 47.8318 36.0867 48.8706 35.7341C49.9092 35.3641 50.6076 34.0779 50.9646 31.8751C51.2568 30.0249 50.9646 28.9587 50.088 28.6769C49.2276 28.3951 48.1484 28.2629 46.8496 28.2805C46.6548 28.2979 46.4684 28.3069 46.2896 28.3069H45.7978Z" fill="white"/></svg>
    }
    
    const [currentIdx, setCurrentIdx] = useState(0);
    const dropdown = useRef(null);
    
    function toggleDropown() {
        dropdown.current.classList.toggle("active");
    }
    
    return (
      <div className='ide'>
        <div className='menu-bar'>
            <ul className='menu-bar-actions'>
                <li className='menu-bar-action menu-bar-logo'><Logo showText={false} /></li>
                <li className='menu-bar-action'>{t("File")}</li>
                <li className='menu-bar-action'>{t("Edit")}</li>
                <li className='menu-bar-action'>{t("View")}</li>
            </ul>
            <span className='current-project'>{t("Project")} - {data[currentIdx].main}</span>
            <div className='menu-bar-buttons'>
                <div className='menu-bar-button'></div>
                <div className='menu-bar-button'></div>
                <div className='menu-bar-button'></div>
            </div>
        </div>
        <div className='ide-content'>
            <div className='ide-dropdown' onClick={() => toggleDropown()}>
                <div className='ide-dropdown-content'>{logos[data[currentIdx].techno]}<span>{t(`projects.${data[currentIdx].main}`, {returnObjects: true}).title}</span></div>
                <div className='ide-dropdown-absolute' ref={dropdown} >
                    <ul className='ide-dropdown-items'>
                        {data.map((project, idx) => 
                        <li key={idx} onClick={() => setCurrentIdx(idx)}>
                            <div className='ide-dropdown-item-logo'>
                                {logos[project.techno]}
                            </div>
                            {t(`projects.${project.main}`, {returnObjects: true}).title}
                        </li>
                    )}
                    </ul>
                
                </div>
            </div>
            <div className='ide-sidebar'>
                <div className='ide-sidebar-item ide-sidebar-header'><span>{t("projects.explore")}</span></div>
                {data.map((project, idx) => 
                    <div key={idx} className={'ide-sidebar-item' + (idx === currentIdx ? ' active' : '')} onClick={() => setCurrentIdx(idx)}>
                        <div className='ide-sidebar-item-logo'>
                        {logos[project.techno]}
                        </div>
                        {t(`projects.${project.main}`, {returnObjects: true}).title}
                    </div>
                )}
            </div>
            <div className='ide-file'>
                <div className='ide-file-header'>
                    <div className='ide-file-header-item active'>
                        <div className='file-icon'>
                            {logos.md}
                        </div>                        
                        Readme.md
                    </div>
                    <div className='ide-file-header-item'>
                        <div className='file-icon'>
                            {logos[data[currentIdx].extension] ?? logos[data[currentIdx].techno]}
                        </div>    
                        {data[currentIdx].main + "." + data[currentIdx].extension}
                    </div>
                </div>
                <div className='ide-file-content'>
                    <Markdown>{t(`projects.${data[currentIdx].main}`, {returnObjects: true}).content.join("\n\n")}</Markdown>
                    {data[currentIdx].repo &&
                     <>
                        <h3>{t("sourceCode")}</h3>
                        <a href={data[currentIdx].repo} target='_blank'>{data[currentIdx].repo}</a>
                     </> 
                    }
                    {data[currentIdx].imgs && 
                        <>
                            <h3>{t("Images")}</h3>
                            <Gallery imgs={data[currentIdx].imgs} />
                        </>
                    }
                </div>
            </div>
        </div>
      </div>
    );
}

export default Ide;