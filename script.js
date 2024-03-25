let image = document.getElementById("images")
let i = 0
let put = document.getElementById("put")

let arr = [{
    name: 'Fullname: Stallion Taylor',
    Age: 'Age: 34', Nationality: 'Nationality: Ireland',
    Email: 'Email: styl@gmail.com',
    PhoneNO: 'PhoneNO: +353 01842913043',
    SkinColor: ' SkinColor: lightBrown',
    height: 'height: 5.7',
    image: "person-flat.png",
},
{
    name: 'Fullname: Dariana Boeman',
    Age: 'Age: 28',
    Nationality: 'Nationality: USA',
    Email: 'Email: Dariana@gmail.com',
    PhoneNO: 'PhoneNO: +1 0187650913',
    SkinColor: ' SkinColor: lightBrown',
    height: 'height: 5.6',
    image: "-avatar-icon-of-girl.jpg",

},
{
    name: 'Fullname: Effiong Emmanuel',
    Age: 'Age: 38',
    Nationality: 'Nationality: Nigeria',
    Email: 'Email: EffEmma@gmail.com',
    PhoneNO: 'PhoneNO: +234 0187650913',
    SkinColor: ' SkinColor: lightBrown',
    height: 'height: 5.7',
    image: "images.png",
},
{
    name: 'Fullname: Jurgen Schmaltz',
    Age: 'Age: 38',
    Nationality: 'Nationality: Germany',
    Email: 'Email: schmaltz66@gmail.com',
    PhoneNO: 'PhoneNO: +234 8176509132',
    SkinColor: ' SkinColor: lightBrown',
    height: 'height: 6.0',
    image: "depositphotos.jpg",
}
]

function showcase() {
    image.src = arr[i].image
    put.innerHTML = `<h3 id="arrange">${arr[i].name}
    <br>${arr[i].Age}
    <br>${arr[i].Nationality}
    <br>${arr[i].Email}
    <br>${arr[i].PhoneNO}
    <br>${arr[i].SkinColor}
    <br>${arr[i].height}
</h3>`
}

showcase()

function next() {
    if (i == arr.length - 1) {
        i = 0
    } else {
        i++
    }
    showcase()
}
function previous() {
    if (i = 0) {
        i == arr.length - 1
    } else {
        i--
    }
    showcase()
}