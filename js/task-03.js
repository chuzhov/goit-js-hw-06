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

let htmlString = "";

const gallery = document.querySelector("ul.gallery");
const imgWidth = (gallery.clientWidth - 4*16) / 3;

for (const image of images) {
  htmlString+=`<li class="hw3"><img src=${image.url} alt=${image.alt} width="${imgWidth}"></li>`
}

gallery.style.margin = 0;
gallery.style.padding = 0;
gallery.style.listStyle = "none";
gallery.style.display = "flex";
gallery.style.justifyContent = "center";
gallery.style.alignItems = 'center';
gallery.style.gap = "1rem";

gallery.insertAdjacentHTML("afterbegin", htmlString);

