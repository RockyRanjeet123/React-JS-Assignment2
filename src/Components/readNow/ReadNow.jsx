import axios from 'axios';
import React,{useState,useEffect} from 'react';
import ReadCard from '../ReadCard';

export default function ReadNow() {
    const[readnowlist,setReadnowlist] =useState([]);
    useEffect(() => {
        axios.get("http://localhost:3100/news")
        .then((res)=>{
            setReadnowlist(res.data);
        })
    }, []);
    return (
        <div className='container' >
        <div className='row' style={{width:"max"}}>
                    {readnowlist.map((news) => (
                        <ReadCard
                        urlToImage={news.urlToImage}
                        title={news.title}
                        author={news.author}
                        description={news.description}
                        url={news.url}
                        />
                    ))
                    }
                
        </div>
        </div>
    )
}
