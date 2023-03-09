import Dropdown from 'react-dropdown';
import 'react-dropdown/style.css';
import '../styles/react-dropdown.css'

const dropdowns=["Location","Check In","Check Out","No of People","Rooms"]
const text=["Lorem ipsum","Lorem ipsum","Lorem ipsum","Lorem ipsum","Lorem ipsum"]
const options=["Lorem ipsum","Lorem ipsum","Lorem ipsum","Lorem ipsum","Lorem ipsum"]

export default function SearchBar({locationOptions=[],checkInOptions,width="100%"}){
    return(
        <div className="grid grid-cols-2 max-md:grid-rows-3 md:grid-cols-6 bg-white max-md:max-w-[400px] rounded-md justify-items-center gap-0 px-1 py-5">
            {dropdowns.map((dd,ind)=>
                <div className="flex flex-col max-md:mb-3 w-full px-3" key={ind}>
                    <Dropdown options={options} value={null} placeholder={dd} />
                    <div className="text-slate-500 w-max text-sm">{text[ind]}</div>
                </div>
            )}
            <div className="flex w-full justify-start items-center">
                <button className="max-sm:mx-5 max-sm:mt-4 bg-green-800 rounded-lg font-bold text-white h-min px-5 py-2">Search</button>
            </div>
            
        </div>
    )
}