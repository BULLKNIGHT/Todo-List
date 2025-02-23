import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
import { IconButton } from "@mui/material";
import LogoutRoundedIcon from "@mui/icons-material/LogoutRounded";

export const LogoutButton = () => {
	const { logout } = useAuth0();

	return (
		<IconButton
			onClick={() =>
				logout({ logoutParams: { returnTo: window.location.origin } })
			}>
			<LogoutRoundedIcon />
		</IconButton>
	);
};
