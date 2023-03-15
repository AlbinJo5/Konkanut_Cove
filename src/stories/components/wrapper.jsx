import Page4Slider from '../../components/page4-slider';
import MainHeader, { MainTitle,MainText } from '../../components/main-header';
export function Wrapper({widthTitle,widthText,widthSlider,ratioSlider,name1,name2,title,text,titleSize}){
    return(
      <div className="w-full h-[500px] flex flex-col relative" style={{background:"url('/assets/images/back4.png')"}}>
          <div className="absolute bg-black bg-opacity-25 w-full h-full flex flex-col items-center">
            <div className="mt-10">
              <MainHeader>
                <MainTitle width={widthTitle} size={titleSize}>
                  {title}
                </MainTitle>
                <MainText width={widthText}>{text}</MainText>
              </MainHeader>
            </div>
              <Page4Slider width={widthSlider} ratio={ratioSlider} name1={name1} name2={name2}/>
          </div>  
      </div>
    );
  }