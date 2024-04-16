async function weather(){
    let delhiWeather = new Promise ((resolve, reject)=> {
        setTimeout(() => {
            resolve("28 'c")
        }, 2000);
    });


    let bangaloreWeather = new Promise ((resolve, reject)=> {
        setTimeout(() => {
            resolve("38 'c")
        }, 5000);
    });

    console.log("Fetching Delhi wather Please wait...");
    let delhiW = await delhiWeather
    console.log("Fetched Delhi weather:" + delhiW)
    
    console.log("Fetching Bangalore weather Please wait...");
    let bangaloreW = await bangaloreWeather
    console.log("Fetched Delhi weather:" + bangaloreW)

    return [delhiW, bangaloreW]
}

const weatherAgain = () => {
    console.log("Hey i am a weather again and i am not waiting :-)")
};

const main = async () => {
    console.log("Welcome to weather controll room")
    
    let a = weather();
    let b = weatherAgain();
}

main();
