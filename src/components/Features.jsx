import { features } from "./data";
import Card from "./Card";

function Features(){
    return(
<div id="about" className="page p-10 mt-64 flex flex-wrap gap-8 justify-center">
 {features.map(feature=>(
    <Card title={feature[0]} para={feature[1]}></Card>
 ))}
</div>
    )
}
export default Features;