export default function DescriptionComp({heading,children,button={},alignLeft=true,maxWidth,paragraphs=[],classNames=[]}){
    const textAlign = alignLeft?"text-left":"text-right";
    return(
        <div className={"flex flex-col font-sansation "+(alignLeft?"items-start ":"items-end ") +classNames.join(" ")} style={{maxWidth:maxWidth}}>
            <div className={"text-2xl font-bold text-slate-50 mb-5 "+textAlign}>{heading}</div>
            {paragraphs.map((para,ind)=>
                <p className={"text-slate-50 mb-5 "+textAlign} key={ind}>{para}</p>
            )}
            {children && <div className={"text-slate-50 mb-5"+textAlign}>{children}</div>}
            <button className={"mt-5 py-3 px-5 text-slate-50 bg-green-800 font-mullish text-sm rounded-md font-bold ripple-bg-green-700 "+textAlign} onClick={button.onClick}>{button.name}</button>
        </div>
    );
}