import React, {useState, useEffect} from 'react';

export function Newivyrest(){


	const [post , setPost] = useState('');
	const [loading, setLoading] = useState(true);
	const [id, setId] = useState(1);

	useEffect( ()=>{
		let data = loadData();
		setLoading(false);
	}, [id] );

	const loadData = async () => {
		const url = `http://localhost/phpRest/api/post/read_single.php?id=${id}`;
		const response = await fetch(url);
		const data = await response.json();
		//let datas = data.data[0];
		console.log(data);
		setPost(data);
	}


	return(
		<div className="">

			{!loading ? <div>Title: {post.title}</div> : <div>Loading...</div> }

			<div>
				<input value={id} onChange={ e => setId(e.target.value) } className=""></input>

			</div>
		</div>
	);
	

	

}

export function NewivyrestAllData(){
	
	const [posts, setPosts] = useState([]);
	const [loading, setLoading] = useState(true);


	useEffect( ()=>{
		getData();
	}, [] );


	var getData = async() =>{
		const url = "http://localhost/phpRest/api/post/read.php";
		const response = await fetch(url);
		const data = await response.json();
		console.log(data.data);
		setPosts(data.data);
		setLoading(false);
	}

	if(loading){
		return <div>Loading...</div>
	}

	if(!loading){
		return(
			<div className="">

				{posts.map(post => (
					<div  key={post.id}>
						<div>id: {post.id}</div>
						<div>Title : {post.title}</div>
					</div>
				))}
				
			</div>
		);
	}

	

}