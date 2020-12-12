function getPilihanComputer() {
    const comp = Math.random();
    if (comp < 0.34) return "gajah";
    if (comp >= 0.34 && comp <= 0.6) return "orang";
    return "semut";
}

function getPilihanUser(comp, player) {
    if (comp == player) return 'SERI';
    if (player == 'gajah') return (comp == 'orang') ? 'MENANG' : 'KALAH';
    if (player == 'orang') return (comp == 'gajah') ? 'KALAH' : 'MENANG';
    if (player == 'semut') return (comp == 'orang') ? 'KALAH' : 'MENANG';
}

function putar() {

    const imgComputer = document.querySelector('.img-computer');
    const gambar = ['gajah', 'orang', 'semut'];
    let i = 0;
    const waktuMulai = new Date().getTime();
    setInterval(function () {
        if (new Date().getTime() - waktuMulai > 1000) {
            clearInterval;
            return;
        }
        imgComputer.setAttribute('src', 'foto/' + gambar[i++] + '.jpg');
        if (i == gambar.length) i = 0;
    }, 100)
}


const pilihan = document.querySelectorAll('li img');
pilihan.forEach(function (pil) {
    pil.addEventListener('click', function () {
        const pilihanComputer = getPilihanComputer();
        const pilihanPlayer = pil.className;
        const hasil = getPilihanUser(pilihanComputer, pilihanPlayer);

        putar();
        setTimeout(function () {
            const imgComp = document.querySelector('.img-computer');
            imgComp.setAttribute('src', 'foto/' + pilihanComputer + '.jpg');

            const info = document.querySelector('.info');
            info.innerHTML = hasil;
        }, 1000);

    });
})


//cara sederhana
// const pGajah = document.querySelector('.gajah');
// pGajah.addEventListener('click', function () {
//     const pilihanComputer = getPilihanComputer();
//     const pilihanPlayer = pGajah.className;
//     const hasil = getPilihanUser(pilihanComputer, pilihanPlayer);

//     const imgComp = document.querySelector('.img-computer');
//     imgComp.setAttribute('src', 'foto/' + pilihanComputer + '.jpg');

//     const info = document.querySelector('.info');
//     info.innerHTML = hasil;
// });