const NavigationFooter = () => {
	const currentYear = new Date().getFullYear();

	return (
		<footer className="mt-auto block border border-slate-100 py-8 text-center">
			© Copyright {currentYear} Superior Software Solutions
		</footer>
	);
};

export default NavigationFooter;
