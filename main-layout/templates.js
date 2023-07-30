// Шаблон header

const header = document.querySelector('.header')

const headerName = document.createElement('div');
headerName.classList.add('header__name');
header.appendChild(headerName);

const headerLogo = document.createElement('a');
headerLogo.href = 'index.html';
headerLogo.classList.add('header__logo');
headerName.appendChild(headerLogo);

const headerLogoImg = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
headerLogoImg.setAttribute("viewBox", "0 0 34 34");
headerLogoImg.setAttribute("width", "34");
headerLogoImg.setAttribute("height", "34");
headerLogoImg.setAttribute("fill", "none");
headerLogoImg.setAttribute("xmlns", "http://www.w3.org/2000/svg");
headerLogo.appendChild(headerLogoImg);

const headerLogoPath = document.createElementNS('http://www.w3.org/2000/svg', 'path');
headerLogoPath.setAttribute("d", "M0 34.0003H13.4588V24.499C13.4588 22.4853 15.0898 20.8543 17.1035 20.8543C19.1172 20.8543 20.7482 22.4853 20.7482 24.499V34.0003H33.9975V0C15.2211 0 0 15.2211 0 34.0003Z");
headerLogoPath.setAttribute("fill", "#CDA274");
headerLogoImg.appendChild(headerLogoPath);

const headerHead = document.createElement('div');
headerHead.textContent = 'Interno';
headerHead.classList.add('header__head');
headerName.appendChild(headerHead);

const headerNav = document.createElement('div');
headerNav.classList.add('header__nav');
header.appendChild(headerNav);

const headerLinks = [
    {
        linkName: 'Home',
        url: '#'
    },
    {
        linkName: 'Project',
        url: '#'
    },
    {
        linkName: 'Blog',
        url: 'blog.html'
    },
];
headerLinks.forEach((value) => {
    const headerLink = document.createElement('a');
    headerLink.textContent = value.linkName;
    headerLink.href = value.url;
    headerLink.classList.add('header__link');
    headerNav.appendChild(headerLink);
})

//----------------

// Шаблон footer

const footer = document.querySelector('.footer');

const footerLeft = document.createElement('div');
footerLeft.classList.add('footer__left');
footer.appendChild(footerLeft);

const footerName = document.createElement('div');
footerName.classList.add('footer__name');
footerLeft.appendChild(footerName);

const footerLogo = document.createElement('a');
footerLogo.href = 'index.html';
footerLogo.classList.add('footer__logo');
footerName.appendChild(footerLogo);
const footerLogoImg = headerLogoImg.cloneNode(true);
footerLogo.appendChild(footerLogoImg);

const footerHead = document.createElement('div');
footerHead.textContent = 'Interno';
footerHead.classList.add('header__head');
footerName.appendChild(footerHead);

const footerText = document.createElement('p');
footerText.textContent = 'It is a long established fact that a reader will be distracted lookings';
footerText.classList.add('footer__text');
footerLeft.appendChild(footerText);

const footerSocial = document.createElement('div');
footerSocial.classList.add('footer__social');
footerLeft.appendChild(footerSocial);

const footerLinkTweet = document.createElement('a');
footerLinkTweet.href = '#';
footerLinkTweet.classList.add('footer__link');
footerSocial.appendChild(footerLinkTweet);

const footerSocialImgTweet = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
footerSocialImgTweet.setAttribute("viewBox", "0 0 19 16");
footerSocialImgTweet.setAttribute("width", "19");
footerSocialImgTweet.setAttribute("height", "16");
footerSocialImgTweet.setAttribute("fill", "none");
footerSocialImgTweet.setAttribute("xmlns", "http://www.w3.org/2000/svg");
footerLinkTweet.appendChild(footerSocialImgTweet);

const footerSocialPathTweet = document.createElementNS('http://www.w3.org/2000/svg', 'path');
footerSocialPathTweet.setAttribute("d", "M16.6367 4.59375C17.3398 4.06641 17.9727 3.43359 18.4648 2.69531C17.832 2.97656 17.0938 3.1875 16.3555 3.25781C17.1289 2.80078 17.6914 2.09766 17.9727 1.21875C17.2695 1.64062 16.4609 1.95703 15.6523 2.13281C14.9492 1.39453 14 0.972656 12.9453 0.972656C10.9062 0.972656 9.25391 2.625 9.25391 4.66406C9.25391 4.94531 9.28906 5.22656 9.35938 5.50781C6.30078 5.33203 3.55859 3.85547 1.73047 1.64062C1.41406 2.16797 1.23828 2.80078 1.23828 3.50391C1.23828 4.76953 1.87109 5.89453 2.89062 6.5625C2.29297 6.52734 1.69531 6.38672 1.20312 6.10547V6.14062C1.20312 7.93359 2.46875 9.41016 4.15625 9.76172C3.875 9.83203 3.52344 9.90234 3.20703 9.90234C2.96094 9.90234 2.75 9.86719 2.50391 9.83203C2.96094 11.3086 4.33203 12.3633 5.94922 12.3984C4.68359 13.3828 3.10156 13.9805 1.37891 13.9805C1.0625 13.9805 0.78125 13.9453 0.5 13.9102C2.11719 14.9648 4.05078 15.5625 6.16016 15.5625C12.9453 15.5625 16.6367 9.97266 16.6367 5.08594C16.6367 4.91016 16.6367 4.76953 16.6367 4.59375Z");
footerSocialPathTweet.setAttribute("fill", "#292F36");
footerSocialImgTweet.appendChild(footerSocialPathTweet);

const footerLinkIn = document.createElement('a');
footerLinkIn.href = '#';
footerLinkIn.classList.add('footer__link');
footerSocial.appendChild(footerLinkIn);

const footerSocialImgIn = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
footerSocialImgIn.setAttribute("viewBox", "0 0 17 16");
footerSocialImgIn.setAttribute("width", "17");
footerSocialImgIn.setAttribute("height", "16");
footerSocialImgIn.setAttribute("fill", "none");
footerSocialImgIn.setAttribute("xmlns", "http://www.w3.org/2000/svg");
footerLinkIn.appendChild(footerSocialImgIn);

const footerSocialPathIn = document.createElementNS('http://www.w3.org/2000/svg', 'path');
footerSocialPathIn.setAttribute("d", "M4.14062 16V5.48828H0.871094V16H4.14062ZM2.48828 4.08203C3.54297 4.08203 4.38672 3.20312 4.38672 2.14844C4.38672 1.12891 3.54297 0.285156 2.48828 0.285156C1.46875 0.285156 0.625 1.12891 0.625 2.14844C0.625 3.20312 1.46875 4.08203 2.48828 4.08203ZM16.3398 16H16.375V10.2344C16.375 7.42188 15.7422 5.24219 12.4375 5.24219C10.8555 5.24219 9.80078 6.12109 9.34375 6.92969H9.30859V5.48828H6.17969V16H9.44922V10.7969C9.44922 9.42578 9.69531 8.125 11.3828 8.125C13.0703 8.125 13.1055 9.67188 13.1055 10.9023V16H16.3398Z");
footerSocialPathIn.setAttribute("fill", "#292F36");
footerSocialImgIn.appendChild(footerSocialPathIn);

const footerNav = document.createElement('div');
footerNav.classList.add('footer__nav');
footer.appendChild(footerNav);

const footerNavHeading = document.createElement('h3');
footerNavHeading.textContent = 'Pages';
footerNavHeading.classList.add('footer__nav-heading');
footerNav.appendChild(footerNavHeading);

const footerLinks = [
    {
        linkName: 'Home',
        url: '#'
    },
    {
        linkName: 'Project',
        url: '#'
    },
    {
        linkName: 'Blog',
        url: 'blog.html'
    },
];
headerLinks.forEach((value) => {
    const footerLink = document.createElement('a');
    footerLink.textContent = value.linkName;
    footerLink.href = value.url;
    footerLink.classList.add('footer__link');
    footerNav.appendChild(footerLink);
})

const footerContacts = document.createElement('div');
footerContacts.classList.add('footer__contacts');
footer.appendChild(footerContacts);

const footerHeading = document.createElement('h3');
footerHeading.textContent = 'Contact';
footerHeading.classList.add('footer__heading');
footerContacts.appendChild(footerHeading);

const footerInfos = ['55 East Birchwood Ave. Brooklyn, New York 11201', 'contact@interno.com', '(123) 456 - 7890'];

footerInfos.forEach((value) => {
    const footerInfo = document.createElement('p');
    footerInfo.textContent = value;
    footerInfo.classList.add('footer__info');
    footerContacts.appendChild(footerInfo);
})