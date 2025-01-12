import { useState,useEffect } from "react";


const Trendingcoin = () => {
    const [coindata, setCoindata] = useState([]);

    useEffect (() => {
        const fetchdata = async () => {
            try {
                const response = await fetch("https://api.coingecko.com/api/v3/search/trending");
                const result = await response.json();
                setCoindata(result.coins);
                console.log(result.coins[14].item.id)
            }catch (error) {
                console.log("error")
            }
        }
        fetchdata();
    },[])
    
    return (
        <>
        
        {coindata};
        </>
        
    )
}

export default Trendingcoin;

/* fetch("https://api.coingecko.com/api/v3/search/trending")
    .then((response) => {
        return response.json();
    })
    .then ((data) => {
        setCoindata(data.coins);
        value=data.coins;
        console.log(data.coins[0].item.id,data.coins[1].item.id);
    })
    .catch((Error) => {
        console.log(Error);
    }) */