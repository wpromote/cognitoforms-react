# CognitoForms React

---

Easily embed CognitoForms in React

## Usage

---

```jsx
import CognitoForm from '@wpromote/cognitoforms-react';

const MyComponent = () => {
	return (
		<>
			<h1>My Demo Page</h1>
			<CognitoForm
				formId={61}
				accountId={`SOMEACCOUNTIDSTRING`}
				prefill={{
					Name: {
						First: 'John',
						Last: 'Peter',
					},
				}}
				css='* { color: red !important }'
			/>
		</>
	);
};

export default MyComponent;
```

## Install

---

```bash
npm install --save https://github.com/wpromote/cognitoforms-react
```

## License

---

Artistic 2.0
