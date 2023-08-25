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

function Copyright(props: any) {
	return (
		<Typography
			variant="body2"
			color="text.secondary"
			align="center"
			{...props}
		>
			{"Copyright © "}
			<Link color="inherit" href="https://mui.com/">
				Your Website
			</Link>{" "}
			{new Date().getFullYear()}
			{"."}
		</Typography>
	);
}

const tiers = [
	{
		title: "Free",
		price: "0",
		description: [
			"10 users included",
			"2 GB of storage",
			"Help center access",
			"Email support",
		],
		buttonText: "Sign up for free",
		buttonVariant: "outlined",
	},
	{
		title: "Pro",
		subheader: "Most popular",
		price: "15",
		description: [
			"20 users included",
			"10 GB of storage",
			"Help center access",
			"Priority email support",
		],
		buttonText: "Get started",
		buttonVariant: "contained",
	},
	{
		title: "Enterprise",
		price: "30",
		description: [
			"50 users included",
			"30 GB of storage",
			"Help center access",
			"Phone & email support",
		],
		buttonText: "Contact us",
		buttonVariant: "outlined",
	},
];
const dockList = [
	{
		name: "Hoan Kiem Dock",
		location: "69 Hai Ba Trung, Hoan Kiem, Hanoi",
		available: 2,
	},
	{
		name: "Hoan Kiem Dock",
		location: "69 Hai Ba Trung, Hoan Kiem, Hanoi",
		available: 2,
	},
	{
		name: "Hoan Kiem Dock",
		location: "69 Hai Ba Trung, Hoan Kiem, Hanoi",
		available: 2,
	},
	{
		name: "Hoan Kiem Dock",
		location: "69 Hai Ba Trung, Hoan Kiem, Hanoi",
		available: 2,
	},
	{
		name: "Hoan Kiem Dock",
		location: "69 Hai Ba Trung, Hoan Kiem, Hanoi",
		available: 2,
	},
];

// TODO remove, this demo shouldn't need to reset the theme.

export default function Layout({ children }: { children: React.ReactNode }) {
	return (
		<>
			<GlobalStyles
				styles={{ ul: { margin: 0, padding: 0, listStyle: "none" } }}
			/>
			<CssBaseline />
			<AppBar
				position="static"
				color="default"
				elevation={0}
				sx={{
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
			<Container maxWidth="lg" component="main">
				{children}
			</Container>
			{/* Footer */}
			<Container
				maxWidth="md"
				component="footer"
				sx={{
					mt: 8,
					py: [3, 6],
				}}
			></Container>
		</>
	);
}
