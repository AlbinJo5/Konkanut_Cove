export default function Page3Panel({title,includedList}){
    return(
        <div className="flex flex-col bg-[url('/assets/images/background.png')] bg-repeat">
            <div className="flex w-[300px]">
                <div className="w-full bg-green-800 text-white text-lg font-bold flex justify-center items-center">{title}</div>
                <div className="w-0 h-0 
                    border-t-[30px] border-t-transparent
                    border-l-[45px] border-l-green-800
                    border-b-[30px] border-b-transparent">
                </div>
            </div>
            <div className="flex items-center">
                <div className="text-gray-500 text-lg">Included:</div>
                {includedList.map(({title,Icon},index)=>
                    <div className="flex justify-center items-center" key={index}>
                        <Icon  theme="filled" size="24" fill="black"/>
                        <div className="text-green-800 text-lg mx-3">{title}</div>
                    </div>
                )}
            </div>
        </div>
    );
}