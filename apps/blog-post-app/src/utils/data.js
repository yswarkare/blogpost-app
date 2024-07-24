const articles = [
	{
		source: {
			id: 'bbc-news',
			name: 'BBC News',
		},
		author: 'BBC News',
		title: "Jack Black cancels Tenacious D tour after Kyle Gass's comments about Donald Trump",
		description: 'Kyle Gass sparked an outcry with a comment on stage about the assassination attempt on Donald Trump.',
		url: 'https://www.bbc.co.uk/news/articles/c0dmx4p4m0lo',
		urlToImage: 'https://ichef.bbci.co.uk/news/1024/branded_news/8e01/live/9be68a30-4370-11ef-9011-89bda6c8bbd4.jpg',
		publishedAt: '2024-07-18T12:07:17.5515034Z',
		content:
			'Jack Black has said hes cancelled the rest of the Tenacious D world tour after his bandmate Kyle Gass sparked an outcry with a comment about the assassination attempt on Donald Trump.\r\nThe comedy roc… [+818 chars]',
	},
	{
		source: {
			id: 'bbc-news',
			name: 'BBC News',
		},
		author: 'BBC News',
		title: 'Trump family: a guide to an American dynasty',
		description: 'Here is what you need to know about the Trump family.',
		url: 'https://www.bbc.co.uk/news/articles/ckmgly0mlz1o',
		urlToImage: 'https://ichef.bbci.co.uk/news/1024/branded_news/24c1/live/31519550-4499-11ef-b781-99a72a91e752.jpg',
		publishedAt: '2024-07-18T11:37:21.5355929Z',
		content:
			"Donald Trump Jr, the eldest of the Trump children, has taken on a larger role in the years since his father left the White House. \r\nHe was prominent in the media during the selection of Trump's runni… [+344 chars]",
	},
	{
		source: {
			id: 'bbc-news',
			name: 'BBC News',
		},
		author: 'BBC News',
		title: "'A changed community': Fear and anger spread after Trump shooting",
		description: "Many of those who attended Trump's rally in Pennsylvania have turned their anger on the Secret Service.",
		url: 'https://www.bbc.co.uk/news/articles/cpv34zw51ppo',
		urlToImage: 'https://ichef.bbci.co.uk/news/1024/branded_news/bc79/live/7eb394f0-4477-11ef-a050-6b9b8186e437.jpg',
		publishedAt: '2024-07-18T10:52:10.6326563Z',
		content:
			'Residents of Butler and its surrounding county describe the largely rural area as friendly and neighbourly, a quiet place. The kind of town in which people know and help each other despite political … [+1391 chars]',
	},
	{
		source: {
			id: 'bbc-news',
			name: 'BBC News',
		},
		author: 'BBC News',
		title: 'Germany plans to halve military aid for Ukraine',
		description: 'Berlin says a G7 scheme to raise $50bn from interest on frozen Russian assets will ensure other funding.',
		url: 'https://www.bbc.co.uk/news/articles/c0kr91zqp0lo',
		urlToImage: 'https://ichef.bbci.co.uk/news/1024/branded_news/f8ba/live/b76f65a0-449d-11ef-80ab-5dca1a4193cb.png',
		publishedAt: '2024-07-18T10:37:23.288599Z',
		content:
			'Germany is planning to nearly halve military aid for Ukraine next year, from around 8bn (£6.7bn; $8.7bn) to around 4bn, according to a draft budget approved by the government. \r\nFinance Minister Chri… [+579 chars]',
	},
	{
		source: {
			id: 'bbc-news',
			name: 'BBC News',
		},
		author: 'BBC News',
		title: "Lara Trump's meteoric rise as the family tries to build a political dynasty",
		description: "The former president's daughter-in-law has emerged as one of his most powerful political operatives.",
		url: 'https://www.bbc.co.uk/news/articles/crgl9x70x41o',
		urlToImage: 'https://ichef.bbci.co.uk/news/1024/branded_news/8914/live/84d6cbe0-4495-11ef-8f61-59143325c728.jpg',
		publishedAt: '2024-07-18T10:07:20.5541614Z',
		content:
			'As Lara Trump strode on to centre stage at the Republican National Convention on Tuesday night, it was a moment that symbolised a change of guard in the Trump family that has taken place since his de… [+2489 chars]',
	},
	{
		source: {
			id: 'bbc-news',
			name: 'BBC News',
		},
		author: 'BBC News',
		title: 'Near-extinct Siamese crocs make comeback in Cambodia',
		description: 'The hatching of 60 eggs is a record for the endangered species in this century.',
		url: 'https://www.bbc.co.uk/news/articles/c87r3ygzljdo',
		urlToImage: 'https://ichef.bbci.co.uk/news/1024/branded_news/f835/live/cc3819a0-44b6-11ef-9a3d-a716bc0795d5.jpg',
		publishedAt: '2024-07-18T07:07:17.4292078Z',
		content:
			'Siamese crocodiles were once widespread throughout much of South East Asia. \r\nBut decades of hunting and habitat loss have tuned them into what conservations classify as "critically endangered" speci… [+1314 chars]',
	},
	{
		source: {
			id: 'bbc-news',
			name: 'BBC News',
		},
		author: 'BBC News',
		title: 'Instagram account of Dubai princess announces divorce',
		description:
			'A post addressed "dear husband" says Sheikha Mahra wants a divorce, after a lavish 2023 wedding to Sheikh Mana.',
		url: 'https://www.bbc.co.uk/news/articles/cx92pl0q8evo',
		urlToImage: 'https://ichef.bbci.co.uk/news/1024/branded_news/0f6b/live/859afa80-447a-11ef-b74c-bb483a802c97.png',
		publishedAt: '2024-07-18T06:52:16.8714089Z',
		content:
			'The post, which begins "Dear Husband", concluded - "I divorce you, I divorce you, and I divorce you," seemingly using the Islamic practice known as triple talaq.\r\nThe practice has been banned in many… [+762 chars]',
	},
	{
		source: {
			id: 'bbc-news',
			name: 'BBC News',
		},
		author: 'BBC News',
		title: "Vance: Trump running mate vows to fight for 'forgotten' America",
		description:
			'The young vice-presidential pick channelled his working-class roots as he assailed “career politicians” like President Biden.',
		url: 'https://www.bbc.co.uk/news/articles/crgl9dgjgkxo',
		urlToImage: 'https://ichef.bbci.co.uk/news/1024/branded_news/bead/live/cc9dd8f0-44b9-11ef-9e1c-3b4a473456a6.jpg',
		publishedAt: '2024-07-18T05:07:14.0548119Z',
		content:
			'Donald Trumps vice-presidential pick JD Vance vowed in a primetime speech to fight for working-class Americans that he argued had been cast aside and forgotten by the Democrats.\r\nIntroducing himself … [+827 chars]',
	},
	{
		source: {
			id: 'bbc-news',
			name: 'BBC News',
		},
		author: 'BBC News',
		title: 'Trump shooter seen as threat before attack, was lost in crowd',
		description:
			'The killer had also searched for pictures of Donald Trump and President Joe Biden before the shooting, law enforcement told lawmakers Wednesday.',
		url: 'https://www.bbc.co.uk/news/articles/c51ydg792ggo',
		urlToImage: 'https://ichef.bbci.co.uk/news/1024/branded_news/a8a9/live/9e9a5450-4488-11ef-b568-1bce71e46479.jpg',
		publishedAt: '2024-07-18T00:37:16.460942Z',
		content:
			"Donald Trump's would-be assassin was flagged as \"suspicious\" up to an hour before he began shooting and his phone's history showed he'd searched for images of the Republican, senators have heard amid… [+1318 chars]",
	},
	{
		source: {
			id: 'bbc-news',
			name: 'BBC News',
		},
		author: 'BBC News',
		title: 'Joe Biden suffering Covid infection, White House says',
		description: 'This is the third time the president has tested positive for the disease.',
		url: 'https://www.bbc.co.uk/news/articles/cv2gj8314nqo',
		urlToImage: 'https://ichef.bbci.co.uk/news/1024/branded_news/fabe/live/4e296a00-4489-11ef-b568-1bce71e46479.jpg',
		publishedAt: '2024-07-17T22:52:15.4524372Z',
		content:
			'Ms Jean-Pierre said the president planned to isolate at his home in Delaware while he carries out "all of his duties fully during that time". \r\nThe president\'s doctor, Kevin O\'Connor, said Mr Biden p… [+925 chars]',
	},
	{
		source: {
			id: 'google-news',
			name: 'Google News',
		},
		author: 'Yahoo Sports',
		title:
			'British Open second round leaderboard, live updates: Daniel Brown leads Shane Lowry, Justin Thomas early at Royal Troon - Yahoo Sports',
		description: null,
		url: 'https://news.google.com/rss/articles/CBMisQFodHRwczovL3Nwb3J0cy55YWhvby5jb20vbGl2ZS9icml0aXNoLW9wZW4tY2hhbXBpb25zaGlwLXNlY29uZC1yb3VuZC1sZWFkZXJib2FyZC1saXZlLXVwZGF0ZXMtaG93LXRvLXdhdGNoLWZvbGxvdy10aWdlci13b29kcy1zaGFuZS1sb3dyeS1kYW5pZWwtYnJvd24tcm95YWwtdHJvb24tMDUwMDUwMzU3Lmh0bWzSAQA?oc=5',
		urlToImage: null,
		publishedAt: '2024-07-19T10:30:00Z',
		content: null,
	},
	{
		source: {
			id: 'google-news',
			name: 'Google News',
		},
		author: null,
		title: 'Trump tramples on Republican Party effort to give him image makeover - Reuters',
		description: null,
		url: 'https://consent.google.com/m',
		urlToImage: null,
		publishedAt: '2024-07-19T09:55:00Z',
		content:
			'We use cookies and data to\r\n<ul><li>Deliver and maintain Google services</li><li>Track outages and protect against spam, fraud, and abuse</li><li>Measure audience engagement and site statistics to un… [+1139 chars]',
	},
	{
		source: {
			id: 'google-news',
			name: 'Google News',
		},
		author: 'Reuters',
		title: 'Tel Aviv hit by drone attack claimed by Iranian-backed Houthis - Reuters',
		description: null,
		url: 'https://news.google.com/rss/articles/CBMidWh0dHBzOi8vd3d3LnJldXRlcnMuY29tL3dvcmxkL21pZGRsZS1lYXN0L2lzcmFlbGktbWlsaXRhcnktc2F5cy10ZWwtYXZpdi1ibGFzdC1hcHBhcmVudGx5LWNhdXNlZC1ieS1kcm9uZS0yMDI0LTA3LTE5L9IBAA?oc=5',
		urlToImage: null,
		publishedAt: '2024-07-19T09:36:00Z',
		content: null,
	},
	{
		source: {
			id: 'google-news',
			name: 'Google News',
		},
		author: 'CoinDesk',
		title: 'Bitcoin, SHIB Trade at 30% Haircut on WazirX as Exploiter Converts Stolen Loot to Ether - CoinDesk',
		description: null,
		url: 'https://news.google.com/rss/articles/CBMiggFodHRwczovL3d3dy5jb2luZGVzay5jb20vbWFya2V0cy8yMDI0LzA3LzE5L2JpdGNvaW4tc2hpYi10cmFkZS1hdC0zMC1oYWlyY3V0LW9uLXdhemlyeC1hcy1leHBsb2l0ZXItY29udmVydHMtc3RvbGVuLWxvb3QtdG8tZXRoZXIv0gGGAWh0dHBzOi8vd3d3LmNvaW5kZXNrLmNvbS9tYXJrZXRzLzIwMjQvMDcvMTkvYml0Y29pbi1zaGliLXRyYWRlLWF0LTMwLWhhaXJjdXQtb24td2F6aXJ4LWFzLWV4cGxvaXRlci1jb252ZXJ0cy1zdG9sZW4tbG9vdC10by1ldGhlci9hbXAv?oc=5',
		urlToImage: null,
		publishedAt: '2024-07-19T07:39:00Z',
		content: null,
	},
	{
		source: {
			id: 'google-news',
			name: 'Google News',
		},
		author: 'CNBC',
		title: 'Cybersecurity giant CrowdStrike suffers major outage affecting businesses around the world - CNBC',
		description: null,
		url: 'https://news.google.com/rss/articles/CBMia2h0dHBzOi8vd3d3LmNuYmMuY29tLzIwMjQvMDcvMTkvY3Jvd2RzdHJpa2Utc3VmZmVycy1tYWpvci1vdXRhZ2UtYWZmZWN0aW5nLWJ1c2luZXNzZXMtYXJvdW5kLXRoZS13b3JsZC5odG1s0gFvaHR0cHM6Ly93d3cuY25iYy5jb20vYW1wLzIwMjQvMDcvMTkvY3Jvd2RzdHJpa2Utc3VmZmVycy1tYWpvci1vdXRhZ2UtYWZmZWN0aW5nLWJ1c2luZXNzZXMtYXJvdW5kLXRoZS13b3JsZC5odG1s?oc=5',
		urlToImage: null,
		publishedAt: '2024-07-19T07:14:59Z',
		content: null,
	},
	{
		source: {
			id: null,
			name: 'Daily Beast',
		},
		author: 'AJ McDougall',
		title: 'Donald Trump Blows a Kiss as Hulk Hogan Rips His Shirt Onstage in Surreal RNC Scene - The Daily Beast',
		description:
			"“Over my career, I've been in the ring with some of the biggest, some of the baddest dudes on the planet. Donald Trump is the toughest of them all.”",
		url: 'https://www.thedailybeast.com/donald-trump-blows-a-kiss-as-hulk-hogan-rips-his-shirt-onstage-in-surreal-rnc-scene',
		urlToImage:
			'https://img.thedailybeast.com/image/upload/c_crop,d_placeholder_euli9k,h_576,w_1024,x_0,y_48/dpr_2.0/c_limit,w_740/fl_lossy,q_auto/v1721356626/GettyImages-2162606960_qcyvrr',
		publishedAt: '2024-07-19T06:55:58Z',
		content:
			'A grinning Donald Trump clapped and blew a kiss at Hulk Hogan as the mustachioed wrestling legend ripped off his shirt while speaking at the Republican National Convention on Thursday night. \r\nHogan,… [+1112 chars]',
	},
	{
		source: {
			id: null,
			name: 'ScienceAlert',
		},
		author: 'Michelle Starr',
		title: 'Curiosity Cracked Open a Rock on Mars And Found a Huge Surprise - ScienceAlert',
		description:
			'A rock on Mars has just spilled a surprising yellow treasure after Curiosity accidentally cracked through its unremarkable exterior.',
		url: 'https://www.sciencealert.com/curiosity-cracked-open-a-rock-on-mars-and-found-a-huge-surprise',
		urlToImage: 'https://www.sciencealert.com/images/2024/07/sulfur-mars.jpg',
		publishedAt: '2024-07-19T06:09:35Z',
		content:
			'A rock on Mars has just spilled a surprising yellow treasure after Curiosity accidentally cracked through its unremarkable exterior.\r\nWhen the rover rolled its 899-kilogram (1,982-pound) body over th… [+3311 chars]',
	},
	{
		source: {
			id: 'google-news',
			name: 'Google News',
		},
		author: 'The Associated Press',
		title:
			"Obama's dilemma: Balancing Democrats' worry about Biden and maintaining influence with president - The Associated Press",
		description: null,
		url: 'https://news.google.com/rss/articles/CBMiYmh0dHBzOi8vYXBuZXdzLmNvbS9hcnRpY2xlL29iYW1hLWJpZGVuLXByZXNpZGVudGlhbC1yYWNlLWRyb3Atb3V0LWIxMTcwNThjMTk1MGJiYTlhN2NjNTEzMTdkMDU1OTU50gEA?oc=5',
		urlToImage: null,
		publishedAt: '2024-07-19T05:38:00Z',
		content: null,
	},
	{
		source: {
			id: 'google-news',
			name: 'Google News',
		},
		author: 'CNN',
		title: 'Fact check: Trump makes more than 20 false claims in RNC acceptance speech - CNN',
		description: null,
		url: 'https://news.google.com/rss/articles/CBMibWh0dHBzOi8vd3d3LmNubi5jb20vMjAyNC8wNy8xOC9wb2xpdGljcy9mYWN0LWNoZWNraW5nLW5pZ2h0LTQtcmVwdWJsaWNhbi1uYXRpb25hbC1jb252ZW50aW9uLXRydW1wL2luZGV4Lmh0bWzSAWZodHRwczovL2FtcC5jbm4uY29tL2Nubi8yMDI0LzA3LzE4L3BvbGl0aWNzL2ZhY3QtY2hlY2tpbmctbmlnaHQtNC1yZXB1YmxpY2FuLW5hdGlvbmFsLWNvbnZlbnRpb24tdHJ1bXA?oc=5',
		urlToImage: null,
		publishedAt: '2024-07-19T05:01:00Z',
		content: null,
	},
	{
		source: {
			id: 'google-news',
			name: 'Google News',
		},
		author: 'Financial Times',
		title: 'Donald Trump pledges tax cuts, trade wars and border crackdown - Financial Times',
		description: null,
		url: 'https://news.google.com/rss/articles/CBMiP2h0dHBzOi8vd3d3LmZ0LmNvbS9jb250ZW50L2NkOTUzMjA2LWMxODktNGI4Yi04MjIzLTMxMmJiYmZmMWZlYdIBAA?oc=5',
		urlToImage: null,
		publishedAt: '2024-07-19T04:44:54Z',
		content: null,
	},
	{
		source: {
			id: 'google-news',
			name: 'Google News',
		},
		author: 'The New York Times',
		title:
			'Russell Westbrook expected to be bought out by Jazz after Clippers trade; Nuggets a front-runner: Sources - The New York Times',
		description: null,
		url: 'https://news.google.com/rss/articles/CBMiWmh0dHBzOi8vd3d3Lm55dGltZXMuY29tL2F0aGxldGljLzU2NDU5NzUvMjAyNC8wNy8xOC9ydXNzZWxsLXdlc3Ricm9vay10cmFkZS1qYXp6LWNsaXBwZXJzL9IBAA?oc=5',
		urlToImage: null,
		publishedAt: '2024-07-19T04:44:45Z',
		content: null,
	},
	{
		source: {
			id: null,
			name: 'New York Post',
		},
		author: 'Associated Press',
		title: 'Bronny James puts on another stellar Lakers show at NBA Summer League - New York Post ',
		description:
			'Rookie Bronny James put together his second promising Summer League performance in a row Thursday night, scoring 13 points in the Lakers’ 93-89 win.',
		url: 'https://nypost.com/2024/07/19/sports/bronny-james-scores-13-points-in-lakers-nba-summer-league-win/',
		urlToImage:
			'https://nypost.com/wp-content/uploads/sites/2/2024/07/newspress-collage-6xljj0abv-1721361250885.jpg?quality=75&strip=all&1721346882&w=1024',
		publishedAt: '2024-07-19T04:07:00Z',
		content:
			'These cookies are necessary for the website to function and cannot be switched off in our systems. They are usually only set in response to actions made by you which amount to a request for services,… [+2751 chars]',
	},
	{
		source: {
			id: 'google-news',
			name: 'Google News',
		},
		author: 'BBC.com',
		title: "Five big takeaways from Trump's convention speech - BBC.com",
		description: null,
		url: 'https://news.google.com/rss/articles/CBMiLmh0dHBzOi8vd3d3LmJiYy5jb20vbmV3cy9hcnRpY2xlcy9jNzI5eDJ6NHk0ZG_SATJodHRwczovL3d3dy5iYmMuY29tL25ld3MvYXJ0aWNsZXMvYzcyOXgyejR5NGRvLmFtcA?oc=5',
		urlToImage: null,
		publishedAt: '2024-07-19T03:39:00Z',
		content: null,
	},
	{
		source: {
			id: 'google-news',
			name: 'Google News',
		},
		author: 'The New York Times',
		title: 'Ben Sasse Will Step Down as President of University of Florida - The New York Times',
		description: null,
		url: 'https://news.google.com/rss/articles/CBMiSmh0dHBzOi8vd3d3Lm55dGltZXMuY29tLzIwMjQvMDcvMTgvdXMvYmVuLXNhc3NlLXVuaXZlcnNpdHktb2YtZmxvcmlkYS5odG1s0gEA?oc=5',
		urlToImage: null,
		publishedAt: '2024-07-19T03:37:00Z',
		content: null,
	},
	{
		source: {
			id: 'google-news',
			name: 'Google News',
		},
		author: 'PBS NewsHour',
		title:
			"Illinois sheriff's deputy charged with murder shot Black woman in face after she called police for help - PBS NewsHour",
		description: null,
		url: 'https://news.google.com/rss/articles/CBMiigFodHRwczovL3d3dy5wYnMub3JnL25ld3Nob3VyL25hdGlvbi9pbGxpbm9pcy1zaGVyaWZmcy1kZXB1dHktY2hhcmdlZC13aXRoLW11cmRlci1zaG90LWJsYWNrLXdvbWFuLWluLWZhY2UtYWZ0ZXItc2hlLWNhbGxlZC1wb2xpY2UtZm9yLWhlbHDSAQA?oc=5',
		urlToImage: null,
		publishedAt: '2024-07-19T03:28:35Z',
		content: null,
	},
	{
		source: {
			id: null,
			name: '[Removed]',
		},
		author: null,
		title: '[Removed]',
		description: '[Removed]',
		url: 'https://removed.com',
		urlToImage: null,
		publishedAt: '1970-01-01T00:00:00Z',
		content: '[Removed]',
	},
	{
		source: {
			id: 'google-news',
			name: 'Google News',
		},
		author: 'Investopedia',
		title: 'Watch These Netflix Stock Price Levels After Streamer Issues Soft Outlook - Investopedia',
		description: null,
		url: 'https://news.google.com/rss/articles/CBMiTmh0dHBzOi8vd3d3LmludmVzdG9wZWRpYS5jb20vd2F0Y2gtdGhlc2UtbmV0ZmxpeC1wcmljZS1sZXZlbHMtZWFybmluZ3MtODY4MDU2M9IBAA?oc=5',
		urlToImage: null,
		publishedAt: '2024-07-19T02:25:55Z',
		content: null,
	},
	{
		source: {
			id: 'google-news',
			name: 'Google News',
		},
		author: 'ABC News',
		title: 'Trump shooter signed up online to attend rally a week before shooting: Source - ABC News',
		description: null,
		url: 'https://news.google.com/rss/articles/CBMiY2h0dHBzOi8vYWJjbmV3cy5nby5jb20vVVMvdHJ1bXAtc2hvb3Rlci1zaWduZWQtb25saW5lLWF0dGVuZC1yYWxseS13ZWVrLXNob290aW5nL3N0b3J5P2lkPTExMjAxMjMwMdIBAA?oc=5',
		urlToImage: null,
		publishedAt: '2024-07-19T02:13:14Z',
		content: null,
	},
	{
		source: {
			id: 'google-news',
			name: 'Google News',
		},
		author: 'The Associated Press',
		title: 'Here’s what to know about the violent protests over government jobs roiling Bangladesh - The Associated Press',
		description: null,
		url: 'https://news.google.com/rss/articles/CBMiamh0dHBzOi8vYXBuZXdzLmNvbS9hcnRpY2xlL2JhbmdsYWRlc2gtZGhha2Etc3R1ZGVudC1wcm90ZXN0cy13aGF0LXRvLWtub3ctZDUwMDdiMzEzMmU5Y2NmMGEwN2Y1ZGRjODMyYjM2ZWbSAQA?oc=5',
		urlToImage: null,
		publishedAt: '2024-07-19T02:02:00Z',
		content: null,
	},
	{
		source: {
			id: 'google-news',
			name: 'Google News',
		},
		author: 'SpaceNews',
		title: 'Enhanced Dragon spacecraft to deorbit the ISS at the end of its life - SpaceNews',
		description: null,
		url: 'https://news.google.com/rss/articles/CBMiW2h0dHBzOi8vc3BhY2VuZXdzLmNvbS9lbmhhbmNlZC1kcmFnb24tc3BhY2VjcmFmdC10by1kZW9yYml0LXRoZS1pc3MtYXQtdGhlLWVuZC1vZi1pdHMtbGlmZS_SAQA?oc=5',
		urlToImage: null,
		publishedAt: '2024-07-19T01:07:56Z',
		content: null,
	},
];

const blogPosts = {
	status: 'ok',
	totalResults: 48,
	articles: [...articles, ...articles],
};

export default blogPosts;
