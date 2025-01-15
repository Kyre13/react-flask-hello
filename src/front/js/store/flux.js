const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			message: null,
		},
		actions: {
			login: async (email, password) => {
				try{
					const token = await fetch(`${process.env.BACKEND_URL}api/login`, {
						method: 'POST',
						headers: {
							'Content-Type': 'application/json',
							
						},
						body: JSON.stringify({
							email,
							password
						})

					});

					if(!token.ok){
						Throw('error')
					}
					const tokenJson = await token.json();
					localStorage.setItem('token',tokenJson.access_token)
					
					
				} catch {
					console.log("error")
				}
			},

			getUser: async () => {
				const token = localStorage.getItem('token');
				try {
					const user = await fetch(`${process.env.BACKEND_URL}api/user`,
						{
							method: 'GET',
							headers: {
								'Content-Type': 'application/json',
								'Authorization': `Bearer ${token}`
							}
						}
					)
					if (!user.ok) return Throw ('error get user')
					return await user.json();
					
					}catch {
						console.log('error')
					}
			},

			getMessage: async () => {
				try {
					// fetching data from the backend
					const resp = await fetch(process.env.BACKEND_URL + "/api/hello")
					const data = await resp.json()
					setStore({ message: data.message })
					// don't forget to return something, that is how the async resolves
					return data;
				} catch (error) {
					console.log("Error loading message from backend", error)
				}
			},

		}
	};
};

export default getState;
