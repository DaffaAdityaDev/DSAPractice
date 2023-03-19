

// function dapa(namatengah, callback) {

//   console.log("dapa, " + namatengah + "!");
//   console.log(callback("rpl"))
  
// }

// // callback == function

// function jurusan(inputJurusan) {
//   return ("jurusan " + inputJurusan);
// }

// dapa("adityasdsadsadasasdasdasdasd", jurusan);

// let dapa = (namatengah) => {
//   console.log("dapa, " + namatengah + "!");
//   return "rpl"
// }

// let jurusan = (inputJurusan) => {
//   console.log("jurusan " + inputJurusan);
// }

// jurusan(dapa("jurusan"));


function dapa(namatengah) {
  function() {
    console.log("dapa, " + namatengah + "!");
  }
}

dapa("aditya");