import { useParams } from "react-router-dom"

function Products() {
    const params=useParams();
    const {num}=params
    console.log(num)
    return(
        <>
            <h1>it is product page {num}</h1>
        </>
    )
}
export default Products