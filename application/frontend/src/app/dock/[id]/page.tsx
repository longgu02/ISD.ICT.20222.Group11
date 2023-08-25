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
import Stack from "@mui/material/Stack/Stack";
import { CardMedia } from "@mui/material";
import { useAppDispatch } from "@/app/redux/hooks";
import { update } from "@/app/redux/rental/bike";
import Layout from "@/app/layouts/layout";

const dockInfo = {
	id: 1,
	name: "Hoan Kiem Dock",
	location: "69 Hai Ba Trung, Hoan Kiem, Hanoi",
	available: 2,
	bikes: [
		{
			image:
				"https://www.reidcycles.com.au/cdn/shop/products/reid-cycles-australia-express-road-bike-gunmetal-grey-s-333.jpg?v=1627437366&width=1946",
			name: "Xe dap bth",
			type: "standard",
			id: "1sdf2134ohjh",
		},
		{
			image:
				"https://blixbike.com/cdn/shop/products/Blix_Dubbel_NuCream_WheelGuards_1200x.png?v=1688189192",
			name: "Xe dap dien",
			type: "standard e-bike",
			id: "3sdf21asdjh",
		},
		{
			image:
				"https://activesport.co/WebRoot/Store5/Shops/80c85f8f-7a95-4b1c-9c30-e64b314f3f2e/5E21/AD77/8AB6/C59E/B7E6/0A48/3508/0A1D/1a.jpg",
			name: "Xe dap doi",
			type: "twin bike",
			id: "1asdwer134ohjh",
		},
	],
};

export default function DockDetail() {
	// const dispatch = useAppDispatch();
	return (
		<Layout>
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
					maxWidth="lg"
					component="main"
					sx={{ pt: 8, pb: 6 }}
				>
					<Grid container>
						<Grid item xs={4}>
							<Image
								alt="logo"
								width={350}
								height={250}
								src="https://live.mrf.io/statics/i/ps/cleantechnica.com/files/2021/02/BCycle-3-0-biksharing-docking-station-e1613701557754.png?width=1200&enable=upscale"
							/>
						</Grid>
						<Grid item xs={4}>
							<Typography variant="h5">{dockInfo.name}</Typography>
							<Typography>Location: {dockInfo.location}</Typography>
							<Typography>Available: {dockInfo.available}</Typography>
						</Grid>
						<Grid item xs={4}>
							{dockInfo.bikes.map((bike, index) => (
								<Link
									key={index}
									href={`/bike/${bike.id}`}
									// onClick={() => {
									// 	dispatch(
									// 		update({
									// 			name: bike.name,
									// 			type: bike.type,
									// 			id: bike.id,
									// 		})
									// 	);
									// }}
									sx={{ mb: 2 }}
								>
									<Card>
										<Box sx={{ flexWrap: "wrap", display: "flex" }}>
											<CardMedia
												component="img"
												image={bike.image}
												alt="dock"
												sx={{ width: 170, height: 100, margin: "auto" }}
											/>
											<Box
												sx={{
													display: "flex",
													flexDirection: "row",
													width: 200,
												}}
											>
												<CardContent>
													<Typography variant="h5">{bike.name}</Typography>
													<Typography>Type: {bike.type}</Typography>
													<Typography>ID: {bike.id}</Typography>
												</CardContent>
											</Box>
										</Box>
									</Card>
								</Link>
							))}
						</Grid>
					</Grid>
				</Container>
			</Box>
		</Layout>
	);
}

DockDetail.getLayout = function getLayout(page: any) {
	return <Layout>{page}</Layout>;
};
