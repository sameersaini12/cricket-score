const API_KEY = "Zrl6b4uXTbcYTdDSBQxidPFyfHq2";


//get all the matches

export const getMatches = ()=> {
    const url=`https://cricapi.com/api/matches/?apikey=${API_KEY}`;

    return fetch(url).then((response)=>
    response.json())
    .catch(err => console.log("Error:-",err));
}

export const getMatchDetail=(id)=> {
    const url=`https://cricapi.com/api/cricketScore/?apikey=${API_KEY}&unique_id=${id}`;

    return fetch(url)
    .then((response)=> response.json())
    .catch(err => console.log(err));

}