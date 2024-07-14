'use strict';

async function getDetails(keyLog){

try {


    const url = `https://free-to-play-games-database.p.rapidapi.com/api/game?id=${keyLog}`;
    const options = {
        method: 'GET',
        headers: {
            'x-rapidapi-key': '45fdb60f5dmsh1c8d9b1c172c63bp1f82f1jsncdb257145b20',
            'x-rapidapi-host': 'free-to-play-games-database.p.rapidapi.com'
        }
    };
    const response = await fetch(url, options);
	const result = await response.json();
	console.log(result);

}
 catch (error) {
	console.error(error);
}
}


 


// async function setKey(){
    
    
//     try{

//         if(displaycard === true){

//              let gameCard = document.getElementById('gameCard');
//             gameCard.setAttribute('data-key', gameData.id);
//             console.log(gameCard)
    
//         }else{
// console.log(err)
//         }
    
//     }catch (error) {
//         console.error(error);
//       }

   
    

// };
// setKey()

