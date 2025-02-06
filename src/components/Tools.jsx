import { tools } from "./data";

function Tools() {
    return (
        <>
            <div className="slider relative flex-nowrap scrollbar flex gap-8 items-center place-items-center">
                {tools.map((tool, index) => (
                    <Tool key={index} tool={tool} />
                ))}
            </div>
            <div className="slider2 relative flex-nowrap flex gap-8 items-center place-items-center mt-8">
                {tools.map((tool, index) => (
                    <Tool key={index} tool={tool} />
                ))}
            </div>
        </>
    );
}

function Tool({ tool }) {
    return (
        <img className="tool w-1/12 max-sm:w-2/12 place-items-center" alt={tool[0]} src={tool[1]} />
    );
}

export default Tools;