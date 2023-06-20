const images = [
  {
    url: 'https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'White and Black Long Fur Cat',
  },
  {
    url: 'https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Orange and White Koi Fish Near Yellow Koi Fish',
  },
  {
    url: 'https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Group of Horses Running',
  },
];

let galleryList = document.querySelector(".gallery");

const galleryHTML = images
  .map(image => {
    const img = `
    <li>
      <img  src="${image.url}" alt="${image.alt}" width=250px>
    </li>
  `;
    console.log(img)
    return img;
  })
  .join('');
  
galleryList.insertAdjacentHTML('beforeend', galleryHTML);

const flexStyle = document.querySelector(".gallery");
flexStyle.style.backgroundColor = "gray";
flexStyle.style.paddingTop = "10px";
flexStyle.style.paddingBottom = "10px";
flexStyle.style.borderRadius = "10px";
flexStyle.style.listStyle = "none";
