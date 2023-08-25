"use client";
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
import RootLayout from "./layout";
import Layout from "./layouts/layout";

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
const defaultTheme = createTheme();

export default function Home() {
	return (
		<ThemeProvider theme={defaultTheme}>
			<GlobalStyles
				styles={{ ul: { margin: 0, padding: 0, listStyle: "none" } }}
			/>
			<CssBaseline />
			<AppBar
				position="static"
				color="default"
				elevation={0}
				sx={{
					borderBottom: (theme) => `1px solid ${theme.palette.divider}`,
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
			>
				<Typography
					component="h1"
					variant="h2"
					align="center"
					color="text.primary"
					gutterBottom
				>
					Dock Nearby
				</Typography>
				<Typography
					variant="h5"
					align="center"
					color="text.secondary"
					component="p"
				>
					List of dock near you, click on any dock to check out its information
					and current status
				</Typography>
			</Container>
			{/* End hero unit */}
			<Container maxWidth="lg" component="main">
				<Grid container>
					{dockList.map((dock, index) => (
						<Grid item xs={6} key={index} sx={{ mb: 2, pr: 2 }}>
							<Link href={`/dock/${index}`}>
								<Card>
									<Box sx={{ flexWrap: "wrap", display: "flex" }}>
										<CardMedia
											component="img"
											image="https://live.mrf.io/statics/i/ps/cleantechnica.com/files/2021/02/BCycle-3-0-biksharing-docking-station-e1613701557754.png?width=1200&enable=upscale"
											alt="dock"
											sx={{ width: 200 }}
										/>
										<Box
											sx={{ display: "flex", flexDirection: "row", width: 360 }}
										>
											<CardContent>
												<Typography variant="h5">{dock.name}</Typography>
												<Typography>Location: {dock.location}</Typography>
												<Typography>Available: {dock.available}</Typography>
											</CardContent>
										</Box>
									</Box>
								</Card>
							</Link>
						</Grid>
					))}
				</Grid>
			</Container>
			{/* Footer */}
			<Container
				maxWidth="md"
				component="footer"
				sx={{
					borderTop: (theme) => `1px solid ${theme.palette.divider}`,
					mt: 8,
					py: [3, 6],
				}}
			></Container>
			{/* End footer */}
		</ThemeProvider>
	);
}

Home.getLayout = function getLayout(page: any) {
	<RootLayout>
		<Layout>{page}</Layout>
	</RootLayout>;
};
