# CognitoForms React

---

# NO LONGER IN USE
We are now using the original package linked just below.

Easily embed CognitoForms in React.
This package was forked from [@tylermenezes/cognitorforms-react](https://github.com/tylermenezes/cognitoforms-react)

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

## License

---

Artistic 2.0
