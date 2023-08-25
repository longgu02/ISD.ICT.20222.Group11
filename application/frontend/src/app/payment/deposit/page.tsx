import * as React from "react";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardHeader from "@mui/material/CardHeader";
import CssBaseline from "@mui/material/CssBaseline";
import Grid from "@mui/material/Grid";
import StarIcon from "@mui/icons-material/StarBorder";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Link from "@mui/material/Link";
import GlobalStyles from "@mui/material/GlobalStyles";
import Container from "@mui/material/Container";
import Image from "next/image";
import { CardMedia } from "@mui/material";

export default function Deposit() {
	return (
		<Box>
			{" "}
			<GlobalStyles
				styles={{ ul: { margin: 0, padding: 0, listStyle: "none" } }}
			/>
			<CssBaseline />
			<AppBar
				position="static"
				color="default"
				elevation={0}
				sx={{
					// borderBottom: (theme) => `1px solid ${theme.palette.divider}`,
					borderBottom: "1px solid #00A13E",
					backgroundColor: "#00A13E",
				}}
			>
				<Toolbar sx={{ flexWrap: "wrap" }}>
					<Box sx={{ flexGrow: 1 }}>
						<Image
							alt="logo"
							width={55}
							height={55}
							src="https://play-lh.googleusercontent.com/ssJrdRx3TZh3D4URaYWtQpANb_PaFIDvklwPSLWsDjd4hGBsSHijYTPbBOUt0FylXLs"
						/>
					</Box>
					<nav>
						<Link
							variant="button"
							href="#"
							sx={{ my: 1, mx: 1.5, color: "white", textDecoration: "none" }}
						>
							Features
						</Link>
						<Link
							variant="button"
							href="#"
							sx={{ my: 1, mx: 1.5, color: "white", textDecoration: "none" }}
						>
							Enterprise
						</Link>
						<Link
							variant="button"
							href="#"
							sx={{ my: 1, mx: 1.5, color: "white", textDecoration: "none" }}
						>
							Support
						</Link>
					</nav>
					<Button href="#" variant="contained" sx={{ my: 1, mx: 1.5 }}>
						Login
					</Button>
				</Toolbar>
			</AppBar>
			{/* Hero unit */}
			<Container
				disableGutters
				maxWidth="sm"
				component="main"
				sx={{ pt: 8, pb: 6 }}
			></Container>
		</Box>
	);
}
