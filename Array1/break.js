for (let i = 1; i <= 5; i++) {
    if (i === 4) {
        console.log("Pet full! Ar khabo na. Break!");
        break; // i er value 4 holei loop ekhane off hoye jabe
    }
    console.log(i + " Plate Kacchi khelam");
}

let torkari = ["Dal", "Alu Vorta", "Korola Vaji", "Mangsho"];

for (let i = 0; i < torkari.length; i++) {
    if (torkari[i] === "Korola Vaji") {
        console.log("Eeeh! Korola khabo na. Skip!");
        continue; // Eta skip kore porer tay chole jabe
    }
    console.log(torkari[i] + " Khacshi!");
}