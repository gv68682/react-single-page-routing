import { useEffect, useState } from 'react';
import axios from 'axios';
import GifViewer from './GifViewer';
import '../styles/style.css';
import SavedPage from '../containers/SavedPage';


function Pictures() {

    const [gifs, setGifs] = useState([]);
    const [savedGifs, setSavedGifs] = useState([]);
    useEffect(() => {
        const sGifs = localStorage.getItem('savedGifs');
        if (sGifs) setSavedGifs(JSON.parse(sGifs));
    }, [])
    useEffect(() => {
        const search = async () => {
            // event.preventDefault();
           // const res = await axios.get("https://imsea.herokuapp.com/api/1?=")
           const res = await axios.get("https://picsum.photos/v2/list")
            console.log(res);
            //debugger;
            setGifs(res.data);
            console.log(gifs)
        };
        search();
    }, [])

    const save = (index) => {
        const newArray = [...savedGifs, gifs[index]];

//Browser will have some local storage options
        setSavedGifs(newArray);
        localStorage.setItem('savedGifs', JSON.stringify(newArray)); //object to string
    };

    const remove = (index) => {
        const newArray = savedGifs.filter((gif, key) => key !== index)

        setSavedGifs(newArray);
        localStorage.setItem('savedGifs', JSON.stringify(newArray));
    }

    return (
        <div>
            <h3>Saved Pictures</h3>
            <GifViewer
                gifs={savedGifs}
                buttonAction={remove}
                buttonText={'delete'}
            />
            <div>
                <h3>Pictures</h3>
                <GifViewer
                    gifs={gifs}
                    buttonAction={save}
                    buttonText={'save'}
                />
            </div>
        </div>
    )
}



export default Pictures;










// function GiphySearch() {
//     const [input, setInput] = useState('');
//     const [gifs, setGifs] = useState([]);
//     const [savedGifs, setSavedGifs] = useState([]);
//     useEffect(() => {
//         const savedGifs = localStorage.getItem('savedGifs');

//         if (savedGifs) setSavedGifs(JSON.parse(savedGifs));
//     }, [])

//     const search = async (event) => {
//         event.preventDefault();
//         if (!input) return;
//          const res = await axios.get(`https://api.giphy.com/v1/gifs/search?&q=${input}&api_key=HmEX7II3wXDKvQ7d1d10aO23CimFAj1J&rating=g&limit=10`);
//        // const res = await axios.get(`https://imsea.herokuapp.com/api/1?q=${input}`)
//         console.log(res.data.data);
//         setGifs(res.data.data);
//     };

//     const save = (gif) => {
    
//         const newArray = [...savedGifs, gifs[gif]];

// //Browser will have some local storage options
//         setSavedGifs(newArray);
//         localStorage.setItem('savedGifs', JSON.stringify(newArray)); //object to string
//     };

//     const remove = (index) => {
//         const newArray = savedGifs.filter((gif, key) => key !== index)

//         setSavedGifs(newArray);
//         localStorage.setItem('savedGifs', JSON.stringify(newArray));
//     }

//     return (
//         <div>
//             <h3>Saved Gifs</h3>
//             <GifViewer
//                 gifs={savedGifs}
//                 buttonAction={remove}
//                 buttonText={'delete'}
//             />
//             <div>
//                 <h3>Gif Search</h3>
//                 <form onSubmit={search}>
//                     <input value={input} onChange={(event) => setInput(event.target.value)} />
//                     <button>search</button>
//                 </form>
                
//                 <GifViewer
//                     gifs={gifs}
//                     buttonAction={save}
//                     buttonText={'save'}
//                 />
//             </div>
//         </div>
//     )
// }




      //    let imgArr=res.data.map((each,i) => {
        //         return (
        //             each.download_url
        //         )
        //     })
        //     console.log(imgArr)

            // let res1=[] ;
            // for(let i = 0; i < imgArr.length; i++) {
            //     const val = await axios.get(imgArr[i])
            //     res1.push(val)
            // }
            // console.log("kkkkk") 
            // console.log(res1)  

