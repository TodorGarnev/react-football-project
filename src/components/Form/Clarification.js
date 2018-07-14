import React from 'react'

const Clarification = props => {
	function toggleSignUp(e, path) {
		e.preventDefault()
		props.hideError()
		props.history.push(path)
	}

	return (
		<div className='text-center alert alert-warning'>
			{props.route === '/login' &&
				<div>If you don't have an account you can sign up
        	<a href='' onClick={(e) => toggleSignUp(e, '/signup')}> here!</a>
				</div>}

			{props.route === '/signup' &&
				<div>If you already have an account you can log in
					<a href='' onClick={e => toggleSignUp(e, 'login')}> here!</a>
				</div>}
		</div>
	)
}



export default Clarification