function janken(myHand) {
    let handArray = ["ぐー", "ちょき", "ぱー"];

    let resultArray = ["あいこ！", "きみの負けだぁ！ハハハッ", "きみの勝ちだ..."];

    let result = 0;

    let computerHand = 0;

    console.log("あなたの手は：" + handArray[myHand]);

    let rand = Math.random() * 100
    console.log("乱数：" + rand);

    let rand_int = Math.floor(rand);
    console.log("乱数（整数）：" + rand_int);

    computerHand = rand_int % 3;
    console.log("computerHand：" + computerHand);
    console.log("コンピュータの手は：" + handArray[computerHand]);

    result = (myHand - computerHand + 3) % 3;
    
    console.log(resultArray[result]);
    console.log("-----------------------------------------");

    const janken_result = document.querySelector("#result");
    janken_result.textContent = resultArray[result];
}

document.getElementById("send-data").onclick = function () {
    const firstname = document.getElementById("firstname").value;
    const remarks = document.getElementById("remarks").value;

    document.getElementById("display-firstname").innerText = firstname
    document.getElementById("display-remarks").innerText = remarks
}

function hello(muda) {
    let message;

    if (muda === 0) {
        message = "ハンガーバー"; 
    } else if (muda === 1) {
        message = "たんかけ麺"; 
    } else if (muda === 2) {
        message = "けつあご"; 
    } else if (muda === 3) {
        message = "ばふん経済"; 
    } else if (muda === 4) {
        message = "海鮮炒めじゃないんだよ！"; 
    } else {
        message = "想定されていない引数です";
    }

    console.log(message);
    const p_hello = document.querySelector("#hello");
    p_hello.textContent = message;
}


