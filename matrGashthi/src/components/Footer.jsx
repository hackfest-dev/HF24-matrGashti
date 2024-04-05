export default function footer(){
    return(
        <div className="flex px-20 p-5 mt-20 bg-red-400 justify-between items-center">
            <div className="flex justify-center items-center flex-col text-white">
                <h1 className="self-start">ReCuisine</h1>
                <h4 className="">Let us reduce food wastage together</h4>
            </div>
            <div className="flex flex-col text-white">
                    <a href="/">About</a>
                    <a href="/">Food</a>
                    <a href="/">Donate</a>
            </div>
        </div>
    )
}