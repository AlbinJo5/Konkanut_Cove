export default function StoryWrapper({children}){
    return(
        <div className={`w-full h-[200vh]`} style={{
            backgroundImage:"url('/assets/images/background.png')"
        }}>{children}</div>
    );
}