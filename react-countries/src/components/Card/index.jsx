import { CardBody } from "./CardBody"
import { CardHeader } from "./CardHeader"

export const Card = ({character}) => {
    return (
        <div style={{
            display: "flex",
            flexDirection: "column",
            maxWidth: "300px",
            borderRadius: "20px",
            backgroundColor: "palegreen"
        }}>
            <CardHeader character={character}/>
            <CardBody character={character}/>
        </div>
    )
}