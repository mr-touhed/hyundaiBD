
const TagLine = ({sub,title}) => {
    return (
        <div className=" bg-primary h-36 flex items-center my-9">
                <div className="container text-[white]">
                            <h2 className="font-thin text-xl">{sub}</h2>
                            <h3 className="text-2xl font-bold">{title}</h3>
                </div>
        </div>
    );
};

export default TagLine;