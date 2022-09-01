import * as r from "readline"

const rl = r.createInterface({
    input : process.stdin,
    output : process.stdout
});

// rl.question("Masukkan Nama : ", function(data){
//     console.log('Nama anda adalah ', data);
//     rl.close();

    //simple

    rl.question("Masukkan Nama : ", (data) => {
        console.log(`Nama anda adalah ${data}` );
        rl.close();
});