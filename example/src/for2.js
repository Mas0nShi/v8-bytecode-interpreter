function check() {
    let flag = "N1CTF{y3Ea4h_tHIs_1S_NlDeskT0p_4pPS_n0w_enj0y_1T}";

    const Matrix = [
        [ 78,  49,  67,  84,  70, 123, 121],
        [ 51,  69,  97,  52, 104,  95, 116],
        [ 72,  73, 115,  95,  49,  83,  95],
        [ 78, 108,  68, 101, 115, 107,  84],
        [ 48, 112,  95,  52, 112,  80,  83],
        [ 95, 110,  48, 119,  95, 101, 110],
        [106,  48, 121,  95,  49,  84, 125]
    ];

    if (flag.length != 49) {
        console.log("Length Error");
    }

    const A = [];
    for (let i = 0; i < 7; i++) {
        A[i] = [];
        for (let j = 0; j < 7; j++) {
            A[i][j] = flag.charCodeAt(i*7+j);
        }
    }
    

    for (let i = 0; i < 7; i++) {
        for (let j = 0; j < 7; j++) {
            if (A[i][j] !== Matrix[i][j]) {
                console.log("Hacker!");
            }
        }
    }
    console.log("Success!");
}

check();