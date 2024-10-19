

let ota = document.getElementById('ota')

async function getData() {
    const response = await fetch("https://66f68256436827ced9776af5.mockapi.io/all-data")
    const data = await response.json();

    data?.map((item) => {
        console.log(item);
        let rasm = document.createElement("img");
        rasm.src = item.img

        ota.appendChild(rasm)



    })
}

getData()