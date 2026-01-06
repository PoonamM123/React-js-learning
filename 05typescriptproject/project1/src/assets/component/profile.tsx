import { useState } from "react"
import { FaCamera } from "react-icons/fa"
const img="data:image/png;base64,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"

const Profile=()=>{
    const [banner,setBanner]=useState('https://imgs.search.brave.com/UAPKCrDTGGCsMyZvWCbTxKz_JGwsPY-9UzAt4C1MfsA/rs:fit:0:180:1:0/g:ce/aHR0cHM6Ly9jZG4t/dXNlYXN0MS5rYXB3/aW5nLmNvbS9zdGF0/aWMvdGVtcGxhdGVz/L3R3aXR0ZXItYmFu/bmVyLWltYWdlLXNp/emUtdGVtcGxhdGUt/cmVndWxhci1iNjgw/MDk2NC53ZWJw')
    const [profile,setProfile]=useState(img)

    const bannerchange=(event:any)=>{
        const file=event.target.files[0];
        if(file){
            setBanner(URL.createObjectURL(file))
        }
    }
    const profilechange=(event:any)=>{
        const file=event.target.files[0];
        if(file){
            setProfile(URL.createObjectURL(file))
        }
    }
    return <>
        <div className="relative w-[92%] ml-[7.5rem]">
            <div className="relative">
                <img src={banner} alt="" className="w-full h-60 object-cover"/>
            
                <button className="absolute top-2 right-2 bg-gray-700 text-white p-2 rounded-full hover:bg-gray-500">
                    <label htmlFor="banner-picture" className="cursor-pointer"><FaCamera size={24}/></label>
                    <input type="file" id="banner-picture" accept="image/*" className="hidden" onChange={bannerchange}/>
                    
                </button>
            </div>

        {/* this is for profile picture */}
        
            <div className="flex items-center ml-4 mt-[2rem]">
                <img src={profile} alt="profileimg" className="w-40 h-40 object-cover rounded-full border-white relative"/>
                <button className="absolute ml-[3.7rem] z-5 mt-[8.7rem] bg-gray-800 text-white p-2 rounded-full hover:bg-gray-600">
                    <label htmlFor="profile-upload">
                        <FaCamera size={24}/>
                    </label>
                    <input type="file" id="profile-upload" accept="image/*" className="hidden" onChange={profilechange}/>
                </button>
                <div className="ml-4 mt-4">
                    <div className="text-2xl font-bold">Poonam . M</div>
                    <p>1M Millon Subscribe</p>
                    <p className="mt-2">
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nesciunt, accusantium sed, consectetur ea harum assumenda nam unde, sapiente animi alias ab praesentium illo rerum natus suscipit quod eveniet similique velit. 
                    </p>
                    <button className="mt-4 bg-red-600 text-white py-2 px-4 rounded hover:bg-red-500">Subscribe</button>
                </div>
            </div>

        {/* tabs component */}

        </div>

    </>
}
export default Profile