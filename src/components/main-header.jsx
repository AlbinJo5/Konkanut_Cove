import { Size } from "../constants/size";
import { useMediaQuery } from "../hooks/media-query";

export function MainTitle({size="72px",mt=0,mb=0,children,width="100%"}){
    const isMobileorTablet = useMediaQuery(0,768)
    console.log(isMobileorTablet)
    const styleSize = isMobileorTablet ?{
        width:'100%',
        fontSize:'48px',
    } : {maxWidth: width,fontSize: size};
    console.log(styleSize)
    return(
        <div className="text-center text-slate-50" style={{
            ...styleSize,
            marginTop: mt,
            marginBottom: mb,
            
        }}>{children}</div>
    );
}

export function MainText({size="sm",my=0,mt=0,mb=0,children,width="100%"}){
    return(
        <p className="text-center text-slate-50" style={{
            maxWidth:width,marginTop:mt,marginBottom:mb,fontSize:size
        }}>{children}</p>
    );
}

export default function MainHeader({children}){
    return(
        <div className="flex flex-col w-full justify-center items-center">
            {children}
        </div>
    );
}