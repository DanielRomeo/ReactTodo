import React, {useState, useEffect} from 'react';
import './css/App.css';



const App = ()=>{

    const [posts, setPosts] = useState([])

    useEffect( ()=>{
        var info = getData();
	}, [] );


	var getData = async() =>{
		const url = "https://randomuser.me/api/?results=5&gender=female&nat=gb";
		const response = await fetch(url);
		const data = await response.json();
        console.log(data.results)
        setPosts(data.results);
		//setLoading(false);
	}

    return(
      
        <div>
            {/*JSON.stringify(posts)*/}

            <div className="row">
            {

                posts.map( person => (
                    <div key={person.login.uuid} className="col s12 m7">
                      <div className="card">
                        <div className="card-image">
                          <img src={person.picture.thumbnail}></img>
                          <span className="card-title"></span>
                        </div>
                        <div className="card-content">
                          <p>{person.name.first}</p>
                          <p>{person.name.first}</p>
                        </div>
                        <div className="card-action">
                          <a href="#">This is a link</a>
                        </div>
                      </div>
                    </div>
                ))
            }
            </div>
        </div>
    )
}



export default App;





