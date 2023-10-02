export default function Comment({commentData}) {
    console.log("data:", commentData);
    return (
        <>  
            {commentData.map((item, index) => (
                <div className="flex items-center mb-[20px]" key={index}>
                    <div className="mr-[15px]">
                        <img
                            src={item.avatar}
                            alt=""
                            className="block w-[40px] object-cover rounded-full cursor-pointer"
                        />
                    </div>
                    <div>
                        <span className="text-[13px] text-[#000]">{item.name}</span> <span>{item.time}</span>
                        <p>{item.content}</p>
                    </div>
                </div>
            ))}
        </>
    );
}