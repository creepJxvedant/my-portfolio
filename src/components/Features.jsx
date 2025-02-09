import { useState, useEffect } from "react";
import { features } from "./data";
import { Loader } from "lucide-react";
import Card from "./Card";

function Features() {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    Promise.all([import("./data")]).then(() => setIsLoaded(true));
  }, []);

  if (!isLoaded) return <Loader></Loader>;
  return (
    <div
      id="about"
      className="page p-10 mt-64 flex flex-wrap gap-8 justify-center"
    >
      {features.map((feature) => (
        <Card
          key={feature[0]}
          title={feature[1]}
          para={feature[2]}
          id={feature[0]}
        ></Card>
      ))}
    </div>
  );
}
export default Features;
