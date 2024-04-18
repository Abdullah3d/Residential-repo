
const Banner = () => {
    return (
        <div className="carousel ">
            <div id="slide1" className="carousel-item relative w-full ">
                <img src="https://images.unsplash.com/photo-1533280385001-c32ffcbd52a7?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" className="w-full p-24" />
                <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                    <a href="#slide4" className="btn ml-24 btn-circle">❮</a>
                    <a href="#slide2" className="btn mr-24 btn-circle">❯</a>
                </div>
            </div>
            <div id="slide2" className="carousel-item relative w-full">
                <img src="https://images.unsplash.com/photo-1448630360428-65456885c650?q=80&w=2067&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" className="w-full p-16 " />
                <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                    <a href="#slide1" className="btn ml-24 btn-circle">❮</a>
                    <a href="#slide3" className="btn mr-36 btn-circle">❯</a>
                </div>
            </div>
            <div id="slide3" className="carousel-item relative w-full">
                <img src="https://media.istockphoto.com/id/1449212413/photo/row-houses.jpg?s=2048x2048&w=is&k=20&c=SOajTRmwiVFYGu4pEvQ8TgUTfqkzewWimTEKGjHSPqI=" className="w-full p-24" />
                <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                    <a href="#slide2" className="btn ml-24  btn-circle">❮</a>
                    <a href="#slide4" className="btn mr-24  btn-circle">❯</a>
                </div>
            </div>
        </div>
    );
};

export default Banner;