import { artistsArray } from "../../../api/api";

export interface ArtistItemList {
	id?: number | string;
	image: string;
	name: string;
	banner: string;
}

export { artistsArray };

// DADOS FAKE PARA TESTE DO FRONT-END
// export const artistsArray: ArtistItemList[] = [
// 	{
// 		id: "6XyY86QOPPrYVGvF9ch6wz",
// 		image: "https://i.scdn.co/image/ab67616d0000b273e2f039481babe23658fc719a",
// 		name: "Linkin Park",
// 		banner: "https://i.scdn.co/image/ab67616d00004851e2f039481babe23658fc719a",
// 	},
// 	{
// 		id: "6mdiAmATAx73kdxrNrnlao",
// 		image: "https://i.scdn.co/image/ab67616d0000b27302bcbe32fdde4d12455e0005",
// 		name: "Iron Maiden",
// 		banner: "https://i.scdn.co/image/ab67616d0000485102bcbe32fdde4d12455e0005",
// 	},
// 	{
// 		id: "2ye2Wgw4gimLv2eAKyk1NB",
// 		image: "https://i.scdn.co/image/ab67616d0000b27308b71692cde48ccddf36737a",
// 		name: "Metallica",
// 		banner: "https://i.scdn.co/image/ab67616d0000485108b71692cde48ccddf36737a",
// 	},
// 	{
// 		id: "5M52tdBnJaKSvOpJGz8mfZ",
// 		image: "https://i.scdn.co/image/ab67616d0000b273d07e207ce654bec0813d028d",
// 		name: "Black Sabbath",
// 		banner: "https://i.scdn.co/image/ab67616d00004851d07e207ce654bec0813d028d",
// 	},
// 	{
// 		id: "0nmQIMXWTXfhgOBdNzhGOs",
// 		image: "https://i.scdn.co/image/ab67616d0000b273f996112a93f587975046dc42",
// 		name: "Avenged Sevenfold",
// 		banner: "https://i.scdn.co/image/ab67616d00004851f996112a93f587975046dc42",
// 	},
// 	{
// 		id: "1IQ2e1buppatiN1bxUVkrk",
// 		image: "https://i.scdn.co/image/ab67616d0000b273fd833375c806981a61bb82ec",
// 		name: "Slayer",
// 		banner: "https://i.scdn.co/image/ab67616d00004851fd833375c806981a61bb82ec",
// 	},
// 	{
// 		id: "1DFr97A9HnbV3SKTJFu62M",
// 		image: "https://i.scdn.co/image/ab67616d0000b273f2fca6e64d8944d8e623ec93",
// 		name: "Motörhead",
// 		banner: "https://i.scdn.co/image/ab67616d00004851f2fca6e64d8944d8e623ec93",
// 	},
// 	{
// 		id: "3IjLXN4eSksdGj8uDE4Jm1",
// 		image: "https://i.scdn.co/image/ab67616d0000b273270979e6670f9153697a1b3c",
// 		name: "Rhapsody Of Fire",
// 		banner: "https://i.scdn.co/image/ab67616d00004851270979e6670f9153697a1b3c",
// 	},
// 	{
// 		id: "0zQfrabOFYf36Ikb6PXcCY",
// 		image: "https://i.scdn.co/image/53ba72ccba70f050ad3fa0eb89dd5a1e2fab33a7",
// 		name: "Rhapsody",
// 		banner: "https://i.scdn.co/image/b30389b5a3d6d180163cf60cc5e98d80ff249162",
// 	},
// 	{
// 		id: "2pH3wEn4eYlMMIIQyKPbVR",
// 		image: "https://i.scdn.co/image/ab67616d0000b273476e78643a786e3cf46c649c",
// 		name: "DragonForce",
// 		banner: "https://i.scdn.co/image/ab67616d00004851476e78643a786e3cf46c649c",
// 	},
// 	{
// 		id: "3hE8S8ohRErocpkY7uJW4a",
// 		image: "https://i.scdn.co/image/ab67616d0000b2735cc82e0f902c1d7958e0e1a9",
// 		name: "Within Temptation",
// 		banner: "https://i.scdn.co/image/ab67616d000048515cc82e0f902c1d7958e0e1a9",
// 	},
// 	{
// 		id: "5NGO30tJxFlKixkPSgXcFE",
// 		image: "https://i.scdn.co/image/ab67616d0000b273032ecf340e696eeb51b0e7a3",
// 		name: "The Police",
// 		banner: "https://i.scdn.co/image/ab67616d00004851032ecf340e696eeb51b0e7a3",
// 	},
// 	{
// 		id: "3qm84nBOXUEQ2vnTfUTTFC",
// 		image: "https://i.scdn.co/image/ab67616d0000b27368384dd85fd5e95831252f60",
// 		name: "Guns N' Roses",
// 		banner: "https://i.scdn.co/image/ab67616d0000485168384dd85fd5e95831252f60",
// 	},
// 	{
// 		id: "2d0hyoQ5ynDBnkvAbJKORj",
// 		image: "https://i.scdn.co/image/ab67616d0000b27354ab617bc2d4974ab6ffbece",
// 		name: "Rage Against The Machine",
// 		banner: "https://i.scdn.co/image/ab67616d0000485154ab617bc2d4974ab6ffbece",
// 	},
// 	{
// 		id: "05fG473iIaoy82BF1aGhL8",
// 		image: "https://i.scdn.co/image/ab67616d0000b273adaf765a94cd25c569a37f0a",
// 		name: "Slipknot",
// 		banner: "https://i.scdn.co/image/ab67616d00004851adaf765a94cd25c569a37f0a",
// 	},
// 	{
// 		id: "5eAWCfyUhZtHHtBdNk56l1",
// 		image: "https://i.scdn.co/image/ab67616d0000b273c65f8d04502eeddbdd61fa71",
// 		name: "System Of A Down",
// 		banner: "https://i.scdn.co/image/ab67616d00004851c65f8d04502eeddbdd61fa71",
// 	},
// 	{
// 		id: "5nGIFgo0shDenQYSE0Sn7c",
// 		image: "https://i.scdn.co/image/ab67616d0000b273f3302494cdc2c9f2eef99a18",
// 		name: "Evanescence",
// 		banner: "https://i.scdn.co/image/ab67616d00004851f3302494cdc2c9f2eef99a18",
// 	},
// 	{
// 		id: "6wWVKhxIU2cEi0K81v7HvP",
// 		image: "https://i.scdn.co/image/ab67616d0000b27354cd52e1249f6a97d8f2ddc9",
// 		name: "Rammstein",
// 		banner: "https://i.scdn.co/image/ab67616d0000485154cd52e1249f6a97d8f2ddc9",
// 	},
// 	{
// 		id: "3TOqt5oJwL9BE2NG9MEwDa",
// 		image: "https://i.scdn.co/image/ab67616d0000b2732b9a2ff2575349c9fe833af2",
// 		name: "Disturbed",
// 		banner: "https://i.scdn.co/image/ab67616d000048512b9a2ff2575349c9fe833af2",
// 	},
// 	{
// 		id: "0spHbv2fw49lDMkbOAdaqX",
// 		image: "https://i.scdn.co/image/ab67616d0000b273be44a0f283a6c43c04c53d2d",
// 		name: "WWE",
// 		banner: "https://i.scdn.co/image/ab67616d00004851be44a0f283a6c43c04c53d2d",
// 	},
// 	{
// 		id: "14pVkFUHDL207LzLHtSA18",
// 		image: "https://i.scdn.co/image/ab67616d0000b2730ce52f4ba340a1e459e6a978",
// 		name: "Pantera",
// 		banner: "https://i.scdn.co/image/ab67616d000048510ce52f4ba340a1e459e6a978",
// 	},
// 	{
// 		id: "711MCceyCBcFnzjGY4Q7Un",
// 		image: "https://i.scdn.co/image/ab67616d0000b273b56115c0e231fbf69d3205c6",
// 		name: "AC/DC",
// 		banner: "https://i.scdn.co/image/ab67616d00004851b56115c0e231fbf69d3205c6",
// 	},
// 	{
// 		id: "6JW8wliOEwaDZ231ZY7cf4",
// 		image: "https://i.scdn.co/image/ab67616d0000b2736ee5427674e1b32a79f7567a",
// 		name: "Sepultura",
// 		banner: "https://i.scdn.co/image/ab67616d000048516ee5427674e1b32a79f7567a",
// 	},
// 	{
// 		id: "0L8ExT028jH3ddEcZwqJJ5",
// 		image: "https://i.scdn.co/image/ab67616d0000b27394d08ab63e57b0cae74e8595",
// 		name: "Red Hot Chili Peppers",
// 		banner: "https://i.scdn.co/image/ab67616d0000485194d08ab63e57b0cae74e8595",
// 	},
// 	{
// 		id: "70eVjtsWclbYHphLeGQG3D",
// 		image: "https://i.scdn.co/image/ab67616d0000b273f7eba3475c9c1e4f013e2b58",
// 		name: "Detonator",
// 		banner: "https://i.scdn.co/image/ab67616d00004851f7eba3475c9c1e4f013e2b58",
// 	},
// 	{
// 		id: "1Dvfqq39HxvCJ3GvfeIFuT",
// 		image: "https://i.scdn.co/image/ab67616d0000b2736faddf21400e22f617bcd2e4",
// 		name: "Mastodon",
// 		banner: "https://i.scdn.co/image/ab67616d000048516faddf21400e22f617bcd2e4",
// 	},
// ];
