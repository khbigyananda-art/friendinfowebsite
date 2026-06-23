const people = {

    "bigyananda": {
        fullname: "Bigyananda kh",
        height: "5'9\"",
        gender: "Sigma Male",
        hobby: "Football CR7 SIUUUUUUUUU😈"
    },

    "tanishq": {
        fullname: "Tunnik Tunnik Sholay",
        height: "5'10\"",
        gender: "Gay rainbow color patner Pabitra",
        hobby: "Football Pessi fan"
    },
    "pabitra": {
        fullname: "Gurumaahii Pabitra Shittt",
        height: "6'2\"",
        gender: "Gay patner Tanishq",
        hobby: "Football Pessi fan"
    },
    "robertson": {
        fullname: "Kh Ropertson Song",
        height: "6'5\"",
        gender: "Gay rainbow color patner Rohal",
        hobby: "Sleeping"
    },
     "priya": {
        fullname: "Priya Dhulai",
        height: "4'5\"",
        gender: "Mard ",
        hobby: "thusna"
    },
    "tezza": {
        fullname: "Cutiepie",
        height:"5'4\"",
        gender:"Unknown",
        hobby: "Fake her study and just talking to Bigya😂😆🤣"
    }
};

function searchPerson(){

    const name =
        document
        .getElementById("nameInput")
        .value
        .toLowerCase();

    const result =
        document.getElementById("result");

    if(people[name]){

        result.innerHTML = `
            <h3>${people[name].fullname}</h3>
            <p>Height: ${people[name].height}</p>
            <p>Gender: ${people[name].gender}</p>
            <p>Hobby: ${people[name].hobby}</p>
        `;

    } else {

        result.innerHTML =
            "<p>No data found.</p>";

    }

}
