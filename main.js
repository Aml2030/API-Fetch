fetch("http://api.alquran.cloud/v1/ayah/262/ar.alafasy")
  .then((resolve) => {
    //console.log(resolve); //Returns Response
    let myData = resolve.json();
    //console.log(myData); // Returns Promise
    return myData;
  })
  .then((ayah) => {
    //console.log(ayah.data.audio); //to Test
    let audio = new Audio(ayah.data.audio);
    audio.setAttribute("controls", "");
    let div = document.createElement("div");
    div.appendChild(audio);
    document.body.appendChild(div);
  })
  .catch((rej) => console.log(Error(`${rej} : Your API Is Wrong`)));
