import BgImg from './image/bg-image.png';
import Logotype from './image/logotype.png';
import TelephoneLogo from './image/phone.svg';

let headerBgImage = document.getElementById('header-bg-image');
let headerLogotype = document.getElementById('header-logotype');
const headerTelephoneButton = document.getElementById('telephone-logo');

headerBgImage.src = BgImg;
headerLogotype.src = Logotype;
headerTelephoneButton.src = TelephoneLogo;
