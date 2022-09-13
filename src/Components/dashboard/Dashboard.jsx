import axios from 'axios';
import React,{useState,useEffect} from 'react';
import Card from '../card/Card';
// import Card from './card/Card';
export default function Dashboard() {

const[trending,setTrending] =useState([]);
const[readlaterdb,setReadlaterdb] =useState([]);
// const Api=b909d678e82f454a84d8487e1da59893;
    useEffect(() => {
        axios.get("https://newsapi.org/v2/top-headlines?country=in&apikey=53d1cc299b0b4a3e8fe0794de18c2759&page=2")
        .then((res)=>{
            setTrending(res.data.articles);
        })
    }, []);
    const readLater = (newCard) => {
        axios
          .post('http://localhost:3100/news', newCard, {
            headers: { 'Content-Type': 'application/json' },
          })
          .then(function (response) {
            if (response.status === 201) {
              // [...contact, response.data]
              setReadlaterdb([...readlaterdb, response.data]);
            }
          })
          .catch(function (error) {
            console.log(error);
          });
      };
    return (
        <div className='container'>
        <div className='row' style={{width:"max"}}>
                    {trending.map((news) => (
                        <Card
                        urlToImage={news.urlToImage}
                        title={news.title}
                        author={news.author}
                        readLater={readLater}
                        description={news.description}
                        url={news.url}
                        />
                    ))
                    }
                {/* <div className="col-md-6 mt-4">
                        <AddContact addContact={saveContact}/>
                </div> */}
                
        </div>
        </div>
    )
}
