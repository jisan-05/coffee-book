import { useParams } from "react-router-dom";

const CoffeeCards = () => {
    const {category} = useParams()
    console.log(category)
    return (
        <div>
            Coffee cards..........{category}
        </div>
    );
};

export default CoffeeCards;