const files = [
	"https://steamuserimages-a.akamaihd.net/ugc/2502382292979659440/4EEA9F50CAE2CBDACB5A71CDFDE0381FB3155F13/",
	"https://steamuserimages-a.akamaihd.net/ugc/2502382292979659420/E25EA5FBE68DB6291A41300BABB1FEC5059EEE56/",
	"https://steamuserimages-a.akamaihd.net/ugc/2502382292979659426/9BA70D7AEEED8FA05A5CC3E8DC934CF55B873577/",
	"https://steamuserimages-a.akamaihd.net/ugc/2502382293003354057/BA8DE43C9F2A2F57114255A74E0BC6EC9C4B48BE/",
	"https://steamuserimages-a.akamaihd.net/ugc/2502382292979658912/C6780E7E3EF7725A861DDE7CA287564876789993/",
	"https://steamuserimages-a.akamaihd.net/ugc/2502382292979658924/8888483F30AD90726D014C6E0E774EE322D232A3/",
	"https://steamuserimages-a.akamaihd.net/ugc/2502382292979658933/5352BA36BA7C15E10D376781BA911E2CBF4FE80C/",
	"https://steamuserimages-a.akamaihd.net/ugc/2502382292979658992/454F51D73C804EF6B87865C8B1933933EC9B605F/",
	"https://steamuserimages-a.akamaihd.net/ugc/2502382292979659006/A43070B0E37ADFA3A3E7A34DF80917E2094E145F/",
	"https://steamuserimages-a.akamaihd.net/ugc/2502382292979659011/7030C0E9571495003AC159A48B8DF07798A643DB/",
	"https://steamuserimages-a.akamaihd.net/ugc/2502382292979659029/341513D4FEB5B6C494A08E6B97D04705E491A386/",
	"https://steamuserimages-a.akamaihd.net/ugc/2502382292979659035/544CD7C5B04599AAE86B14916E2A845AC41A0B67/",
	"https://steamuserimages-a.akamaihd.net/ugc/2502382292979659042/FC6AFA2B95A26C22DD9776EF8F71CD84F9973272/",
	"https://steamuserimages-a.akamaihd.net/ugc/2502382292979659060/C048CE42DB5A0F96185C94A12CEE725E88DF296E/",
	"https://steamuserimages-a.akamaihd.net/ugc/2502382292979659064/14CADBDA8707CDD1A24C7A28873123769CC3FC0F/",
	"https://steamuserimages-a.akamaihd.net/ugc/2502382292979659069/894A03566E9E187580A30125C4C1718B88158733/",
	"https://steamuserimages-a.akamaihd.net/ugc/2502382292979659078/0C48AEE76E67F599BACAD669F620E1E646D0D2FD/",
	"https://steamuserimages-a.akamaihd.net/ugc/2502382292979659099/AA8917EEA49E2F930C41DCA48D162D2EE2AD6F6A/",
	"https://steamuserimages-a.akamaihd.net/ugc/2502382292979659108/BD3C20A2D34D40A6BEB6A49D1E174517771D8293/",
	"https://steamuserimages-a.akamaihd.net/ugc/2502382292979659126/31514EE89DD636825D58B64F5EE982E146040004/",
	"https://steamuserimages-a.akamaihd.net/ugc/2502382292979659139/9106102211F5E3B12663B5632062B7CCF54D556D/",
	"https://steamuserimages-a.akamaihd.net/ugc/2502382292979659150/A113428F9B062B96925BDFF125C838C5432DE508/",
	"https://steamuserimages-a.akamaihd.net/ugc/2502382292979659154/C6C8186A827E5EAE0484C141C35F5ACE8D626897/",
	"https://steamuserimages-a.akamaihd.net/ugc/2502382292979659167/29AEE6F7F7BD5432DEF3C93BC81B729D1B1D1195/",
	"https://steamuserimages-a.akamaihd.net/ugc/2502382292979659175/B0AA61F297ECA1FE24AF0200A5AB2D275235172A/",
	"https://steamuserimages-a.akamaihd.net/ugc/2502382292979659179/03D4E880E6BF7D415FBC647096885B54F3560D06/",
	"https://steamuserimages-a.akamaihd.net/ugc/2502382292979659190/B079900C49E017289EFB70E38B8EAD7DCFF461A4/",
	"https://steamuserimages-a.akamaihd.net/ugc/2502382292979659198/67B74365421CEA30557BD1BC457CB7D25374B207/",
	"https://steamuserimages-a.akamaihd.net/ugc/2502382293010746633/72BE0A12AC4E8F3885443B2CFA6609655AF4BBA2/",
	"https://steamuserimages-a.akamaihd.net/ugc/2502382292979659228/CDC385D48A1018F8BC96DF2BABEAE948257DB523/",
	"https://steamuserimages-a.akamaihd.net/ugc/2502382292979659242/7696FD8F981D7D7E56AA7ADB4494897180B83427/",
	"https://steamuserimages-a.akamaihd.net/ugc/2502382292979659256/7669B324456C754AD3DB2067E77EA67E8E5423C0/",
	"https://steamuserimages-a.akamaihd.net/ugc/2502382292979659262/1869F61BB24898CC057B53C4CB84ABF7E3093C58/",
	"https://steamuserimages-a.akamaihd.net/ugc/2502382292979659268/C44FCC3B7BF91EE9D1464AA77F0CB50F7CCACD2F/",
	"https://steamuserimages-a.akamaihd.net/ugc/2502382292979659274/EAD49892D8BF6B73C3ECCDA028C66EE1581B6F12/",
	"https://steamuserimages-a.akamaihd.net/ugc/2502382292979659283/6B9AF006D9062E7907F8E8DB9EA048DEF1DF57E7/",
	"https://steamuserimages-a.akamaihd.net/ugc/2502382292979659295/D119A16C330A2B44E9B5E728FF2950E3FC0C3A0D/",
	"https://steamuserimages-a.akamaihd.net/ugc/2502382292979659307/1CB69C49DA55797DAEFA494BF55A431D1126B4FB/",
	"https://steamuserimages-a.akamaihd.net/ugc/2502382292979659316/B762ED55372B8CC933C7977A60501AFCB5C5685D/",
	"https://steamuserimages-a.akamaihd.net/ugc/2502382292979659319/4609132E03AC8FCC13B8C356265A6E9F8211920A/",
	"https://steamuserimages-a.akamaihd.net/ugc/2502382292979659326/A3FACD043040310A797DF50A7548DC3EDA6EEE72/",
	"https://steamuserimages-a.akamaihd.net/ugc/2502382292979659334/5F792F26C1BC3F17C2F9F45462EA83CDEFFEBC73/",
	"https://steamuserimages-a.akamaihd.net/ugc/2502382292979659343/39B041C552917393A33CEE32BB7E4BCFD67194D9/",
	"https://steamuserimages-a.akamaihd.net/ugc/2502382292979659363/D976855B0BCDC623FFDA249490C24C9EE634F6CB/",
	"https://steamuserimages-a.akamaihd.net/ugc/2502382292979659370/760DE8B213BBE61259CE194FD3997B6D1AB22CD4/",
	"https://steamuserimages-a.akamaihd.net/ugc/2502382292979659375/ABAA3025BBB48E814A19237AA447A17DEB1C98AB/",
	"https://steamuserimages-a.akamaihd.net/ugc/2502382292979659380/3B5B532E8F3E5C75C1602452B898EC1937D19E54/",
	"https://steamuserimages-a.akamaihd.net/ugc/2502382292979659416/F28CE48798376AA722380E3A184C0C4952956943/",
	"https://steamuserimages-a.akamaihd.net/ugc/2502382292979659389/D098656018679A46BF1069A0F6AA761DC23D83D6/",
	"https://steamuserimages-a.akamaihd.net/ugc/2502382292979659399/6EB483D6C35F11EE9B4C5DC36CC75C0D6C74F67D/",
	"https://steamuserimages-a.akamaihd.net/ugc/2502382292979659408/922D90F493CB8C03FE8607A393A41C9B1C68ED83/",
	"https://steamuserimages-a.akamaihd.net/ugc/2502382292979659416/F28CE48798376AA722380E3A184C0C4952956943/",

]

import axios from 'axios';
import fs from 'fs';
import path from 'path';

// Function to download image and save locally
const downloadImage = async (url, imagePath) => {
	try {
		const response = await axios({
			method: 'GET',
			url: url,
			responseType: 'stream',
		});

		const writer = fs.createWriteStream(imagePath);

		response.data.pipe(writer);

		return new Promise((resolve, reject) => {
			writer.on('finish', resolve);
			writer.on('error', reject);
		});
	} catch (error) {
		console.error('Error downloading the image: ', error);
	}
};
const saveDirectory = './static/icons';

files.forEach((url, index) => {
	// const imageName = url.split("/")[5];

	// Extracting image name from URL or you can create your own naming convention
	const imageName = path.basename(url);
	const imagePath = "./static/icons/" + imageName + ".png";
	console.log(imagePath)
	downloadImage(url, imagePath)
		.then(() => console.log(`Image downloaded and saved as ${imagePath}`))
		.catch(error => console.error(`Failed to download image ${url}`, error));
});