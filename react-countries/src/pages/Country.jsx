import { useQuery } from '@tanstack/react-query';
import { useParams } from 'react-router-dom';

export const Country = () => {
    const countriesApi = 'https://restcountries.com/v3.1/name';
    const { name } = useParams();

    const fetchDataByName = async (name) => {
        const response = await fetch(`${countriesApi}/${name}`);
        const jsonData = await response.json();
        return jsonData;
    };

    const { data: countryData, isLoading } = useQuery({
        queryKey: ['country', name],
        queryFn: () => fetchDataByName(name),
    });

    console.log(countryData)

    if (isLoading) {
        return <h1>LOADING...</h1>;
    }

    return (
        <>
            <h1>Country</h1>
            {countryData?.map((country) => (
                    <p>{country.name.common}</p>
                ))}
            
        </>
    )
}