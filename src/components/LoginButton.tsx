import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
import { IconButton } from "@mui/material";
import LoginRoundedIcon from '@mui/icons-material/LoginRounded';

export const LoginButton = () => {
	const { loginWithRedirect } = useAuth0();

	return (
		<IconButton onClick={() => loginWithRedirect()}>
			<LoginRoundedIcon />
		</IconButton>
	);
};
