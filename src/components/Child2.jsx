import { useParams } from "react-router-dom";
function Child2(){
    const {id}=useParams();
    console.log("child2 component renderd")
    return (
        <div>
            child2+{id}
        </div>
    )
}
export default Child2;