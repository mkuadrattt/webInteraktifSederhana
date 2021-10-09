const tombol = document.getElementById("cekHasil");
let hasil = document.getElementById("hasil");
let hadiah;
let pilKom = document.getElementById("aKom");
let pilKu = document.getElementById("aKu");

tombol.addEventListener("click",function(){
	let angkaKom = Math.round(Math.random()* 100 + 1);
    let uang = document.getElementById("uang").value;
	let angka = document.getElementById("angkaTebakan").value;
    if (angka==angkaKom){
    	hadiah = uang * 2;
        hasil.innerHTML = "Selamat uang anda sekarang Rp" + hadiah;
    }else{
    	let selisih = Math.max(angka,angkaKom) - Math.min(angka,angkaKom);
        let potong = selisih *uang/100;
    	hadiah = uang - potong;
        pilKu.innerHTML = "angka pilihanku adalah " + angka;
    	pilKom.innerHTML = "angka pilihan Komputer adalah " + angkaKom;
    	hasil.innerHTML = "Yaah uang anda sekarang Rp " + hadiah;
    }
})
