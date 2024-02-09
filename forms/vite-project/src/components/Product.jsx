import {Link, NavLink} from 'react-router-dom'
function Product(){
    return(
        <>
        <h1>Products</h1>
        <div>
            <Link to="/products/one"><button>1</button></Link>
            <Link to="/products/two"><button>2</button></Link>
            <Link to="/products/three"><button>3</button></Link>
            <Link to="/products/four"><button>4</button></Link>
            <Link to="/products/five"><button>5</button></Link>
            <Link to="/products/six"><button>6</button></Link>
            <Link to="/products/seven"><button>7</button></Link>
            <Link to="/products/eight"><button>8</button></Link>
            <Link to="/products/nine"><button>9</button></Link>
            <Link to="/products/ten"><button>10</button></Link>
        </div>
        </>
    )
}
export default Product