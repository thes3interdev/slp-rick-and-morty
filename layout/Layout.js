import Meta from '../utilities/Meta';
import NavigationHeader from '../components/NavigationHeader';
import NavigationFooter from '../components/NavigationFooter';

const Layout = ({ children }) => {
	return (
		<div className="mx-auto max-w-6xl">
			<Meta />
			<div className="flex h-screen flex-col">
				<NavigationHeader />
				{children}
				<NavigationFooter />
			</div>
		</div>
	);
};

export default Layout;
