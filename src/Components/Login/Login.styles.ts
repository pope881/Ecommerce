.login {
	display: flex;
	flex-direction: column;
	align-items: center;
	padding: 4% 10%;
	height: 100vh;
	background-color: #0c0b0b;
}

.login__text {
	display: flex;
	align-items: center;
	justify-content: center;
}

.login__text h2 {
	font-size: 8rem;
	color: #ce1446;
	margin-right: 2rem;
}

.login__text p {
	font-size: 9rem;
	color: #ce1446;
}

.login__form {
	position: relative;
	width: 100%;
	display: flex;
	flex-direction: column;
	justify-content: center;
	max-width: 56rem;
	margin: auto;
	padding: 5rem;
	background: #f8f8ff;
	border-radius: 8px;
	box-shadow: 0 0 16px 1px rgba(0, 0, 0, 0.5);
}

.login__form::before,
.login__form::after,
.login__form {
	transition: 0.3s;
}

.login__form::before,
.login__form::after {
	content: '';
	position: absolute;
	width: 0px;
	height: 0px;
}

.login__form::before {
	top: -25px;
	left: -25px;
	border-top: 0px solid #ce1446;
	border-left: 0px solid #ce1446;
}

.login__form::after {
	bottom: -25px;
	right: -25px;
	border-bottom: 0px solid #ce1446;
	border-right: 0px solid #ce1446;
}

.login__form:hover::before,
.login__form:hover::after {
	width: 25%;
	height: 20%;
}

.login__form:hover::before {
	border-top: 6px solid #ce1446;
	border-left: 6px solid #ce1446;
}

.login__form:hover::after {
	border-bottom: 6px solid #ce1446;
	border-right: 6px solid #ce1446;
}

.login__control,
fieldset {
	margin-bottom: 1rem;
}

.login__control.login__noMargin {
	margin-bottom: 0;
}

.login__control label {
	display: block;
	font-size: 1.6rem;
	margin-bottom: 0.5rem;
	color: #0c0b0b;
	text-transform: uppercase;
}

.login__control input {
	display: block;
	width: 100%;
	max-width: 40rem;
	padding: 0.5rem;
	font-size: 1.6rem;
	border-radius: 4px;
	border: 1px solid;
	background-color: #869999;
	color: #0c0b0b;
}

.login__control--error {
	color: #ffca99;
	height: 3.5rem;
	padding: 0.5rem 0;
}

.login__control--error p {
	font-size: 1.1rem;
	margin: 0;
	color: #aa0b20;
}

.login__control--error.form p {
	margin-top: 1rem;
	color: #aa0b20;
	text-align: center;
}

.login__controls {
	display: flex;
	flex-direction: column;
	gap: 1rem;
}

.login__actions {
	display: flex;
	justify-content: center;
	justify-content: flex-start;
	gap: 1rem;
}

.login__button {
	font-size: 1.6rem;
	color: #5a1a01;
	cursor: pointer;
	background-color: transparent;
	border: none;
	border-radius: 25px;
	padding: 1rem 4rem;
	transition: 0.4s;
}

.login__button:hover,
.login__button:active {
	background-color: #ffe6dc;
}

.login__submit {
	border: 1px solid #ce1446;
	background-color: #ce1446;
	color: #f8f8ff;
	transition: 0.4s;
}

.login__submit:hover,
.login__submit:active {
	background-color: #f8f8ff;
	color: #ce1446;
}


'&::before': {
    '&:before, &:after': {
    '&:after': {
