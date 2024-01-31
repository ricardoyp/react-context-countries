import { useQuery } from '@tanstack/react-query';
import { Link } from 'react-router-dom';

export const Countries = () => {
    const countriesApi = 'https://restcountries.com/v3.1/all';

    const fetchData = async () => {
        const response = await fetch(countriesApi);
        const jsonData = await response.json();
        return jsonData;
    };

    const { data: countriesData, isLoading } = useQuery({
        queryKey: ['countries'],
        queryFn: fetchData,
    });

    console.log(countriesData)

    if(isLoading){
        return <h1>LOADING...</h1>
    }

    return (
        <div>
            <h1>Countries</h1>
            <div
                style= {{
                        display: 'flex',
                        justifyContent: 'space-between',
                        flexWrap: 'wrap',
                        textAlign: 'center',
                        gap: '10px'
                }}
                >
                {countriesData?.map((country, index) => (
                    <div key={index} style= {{
                        border: '1px solid black',
                        borderRadius: '20px',
                        overflow: 'hidden',
                        height: '200px',
                        padding: '10px'
                    }}>
                        <Link to={country.name.common}>
                            <h3>{country.name.common}</h3>
                            <img width={150} src={country.flags.png}></img>
                        </Link>    
                    </div>
                ))}
            </div>
        </div>
    );
}