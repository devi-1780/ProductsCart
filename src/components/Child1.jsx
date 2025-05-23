import { useParams } from "react-router-dom";
function Child1(){
    const {id}=useParams();
    console.log("child1 component renderd")
    return (
        <div>
            child1+{id}
        </div>
    )
}
export default Child1;