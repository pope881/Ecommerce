import { FormEvent, useState } from 'react'
import { useDispatch } from 'react-redux'
import { authActions } from '../store/auth'
import { styles } from './Login.styles'
import { useNavigate } from 'react-router-dom'

type Credentials = {
	email: string
	password: string
}

type HasBeenEdited = {
	email: boolean
	password: boolean
}

export const Login = (): JSX.Element => {
	const [enteredValues, setEnteredValues] = useState<Credentials>({ email: '', password: '' })
	const [didEdit, setDidEdit] = useState<HasBeenEdited>({ email: false, password: false })
	const [loginIsValid, setLoginIsValid] = useState(false)

	const emailIsInvalid = didEdit.email && !enteredValues.email.includes('@')
	const passwordIsInvalid = didEdit.password && enteredValues.password.trim().length < 10

	const emailIsValid = enteredValues.email.includes('@')
	const passwordIsValid = enteredValues.password.trim().length >= 10
	const formIsValid = emailIsValid && passwordIsValid

	const dispatch = useDispatch()
	const navigate = useNavigate()

	function navigateHandler() {
		navigate('/')
	}

	const handleSubmit = (event: FormEvent) => {
		event.preventDefault()

		if (!formIsValid) {
			setLoginIsValid(true)
			return
		}

		dispatch(authActions.login())
		setEnteredValues({ email: '', password: '' })
		setDidEdit({ email: false, password: false })
		setLoginIsValid(false)
		navigateHandler()
	}

	const handleInputChange = (identifier: any, value: any) => {
		setEnteredValues(prevValues => ({ ...prevValues, [identifier]: value }))
		setDidEdit(prevEdit => ({ ...prevEdit, [identifier]: false }))
	}

	const handleInputBlur = (identifier: any) => {
		setDidEdit(prevEdit => ({ ...prevEdit, [identifier]: true }))
	}

	const cancelLoginHandler = () => {
		setEnteredValues({ email: '', password: '' })
		setDidEdit({ email: false, password: false })
		setLoginIsValid(false)
	}

	return (
		<div className={styles.login}>
			<div className={styles.loginText}>
				<h2 className={styles.loginTextH2}>Login</h2>
				<p className={styles.loginTextP}>
					<i className="fa-solid fa-lock"></i>
				</p>
			</div>
			<form className={styles.loginForm} onSubmit={handleSubmit}>
				<div className={styles.loginControls}>
					<div className={`${styles.loginControl} ${styles.loginControlLoginNoMargin}}`}>
						<label className={styles.loginControlLabel} htmlFor="email">
							Email
						</label>
						<input
							className={styles.loginControlInput}
							id="email"
							type="email"
							name="email"
							placeholder="Email address..."
							onBlur={() => handleInputBlur('email')}
							onChange={event => handleInputChange('email', event.target.value)}
							value={enteredValues.email}
						/>

						<div className={styles.loginControlError}>
							{emailIsInvalid && <p className={styles.loginControlErrorP}>Please enter a valid email address.</p>}
						</div>
					</div>

					<div className={`${styles.loginControl} ${styles.loginControlLoginNoMargin}}`}>
						<label className={styles.loginControlLabel} htmlFor="password">
							Password
						</label>
						<input
							className={styles.loginControlInput}
							id="password"
							type="password"
							name="password"
							onBlur={() => handleInputBlur('password')}
							onChange={event => handleInputChange('password', event.target.value)}
							placeholder="Password..."
							value={enteredValues.password}
						/>
						<div className={styles.loginControlError}>
							{passwordIsInvalid && (
								<p className={styles.loginControlErrorP}>Password must contains min. 10 characters.</p>
							)}
						</div>
					</div>
				</div>
				<p className={styles.loginActions}>
					<button type="button" className={styles.loginButton} onClick={cancelLoginHandler}>
						Cancel
					</button>
					<button className={`${styles.loginButton} ${styles.loginSubmit}`}>Login</button>
				</p>
				<div className={`${styles.loginControlError}`}>
					{loginIsValid && <p className={styles.loginControlErrorFormP}>All fields are required.</p>}
				</div>
			</form>
		</div>
	)
}
