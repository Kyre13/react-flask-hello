import React, { useContext, useState } from "react";
import { Context } from "../store/appContext";
import rigoImageUrl from "../../img/rigo-baby.jpg";
import "../../styles/home.css";
import { Link } from "react-router-dom";

export const Home = () => {
	const [email, setEmail] = useState();
	const [password, setPassword] = useState();
	const { store, actions } = useContext(Context);

	return (
		<div className="text-center mt-5">
			<form onSubmit={(evt) => {
				evt.preventDefault();
				actions.login(email,password)
			}}>
				<input type="email" placeholder="email" onChange={(evt) => setEmail(evt.target.value)} value={email}/>
				<input typer="password" placeholder= "password" onChange={(evt) => setPassword(evt.target.value)} value={password}/>
				<input type="submit"/>
			</form>
			<Link to='/single'>
			go to user page
			</Link>
		</div>
	);
};
