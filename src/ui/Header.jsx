import { Link } from "react-router";
import { UserCircle2 } from "lucide-react";

// Could have some "Whats new" icon
// Updates can be implemented this way so users can see the updates only if they
// want to

const Header = () => {
	return (
		<header className="flex justify-between  h-20 items-end p-2">
			<h1 className="text-lg font-bold">Hi, John</h1>
			<div className="flex gap-2 items-center">
				<button className="border-2 rounded-full px-2 ">What's new?</button>
				<Link to="settings">
					<UserCircle2 />
				</Link>
			</div>
		</header>
	);
};

export default Header;
