import DOMPurify from 'isomorphic-dompurify';
import { Size } from "../constants/size";
import { useMediaQuery } from "../hooks/media-query";

export function MainTitle({size="72px",mt=0,mb=0,children,width="100%"}){
    const isMobileorTablet = useMediaQuery(0,768)
    console.log( isMobileorTablet ?{
        width:'100%',
        fontSize:'48px',
    } : {maxWidth: width,fontSize: size});
    const styleSize = isMobileorTablet ?{
        width:'100%',
        fontSize:'48px',
    } : {maxWidth: width,fontSize: size};
    return(
        <div className="text-center text-slate-50  leading-[5rem]" style={{
            ...styleSize,
            marginTop: mt,
            marginBottom: mb,
            
        }} dangerouslySetInnerHTML={{__html: DOMPurify.sanitize(children)}}></div>
    );
}

export function MainText({size="sm",my=0,mt=0,mb=0,children,width="100%"}){
    return(
        <div className="text-center text-slate-50" style={{
            maxWidth:width,marginTop:mt,marginBottom:mb,fontSize:size
        }}>{children}</div>
    );
}

export default function MainHeader({children}){
    return(
        <div className="flex flex-col w-full justify-center items-center">
            {children}
        </div>
    );
}