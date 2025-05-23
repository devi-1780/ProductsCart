import { Link } from "react-router-dom";
function Parent(){
    console.log("parent component rendered")
    return (
        <div>
            Parent
            <ul>
                <Link to='child1/1'><li>child1</li></Link>
                <Link to='child2/2'><li>child2</li></Link>
            </ul>
        </div>
    )
}
export default Parent;