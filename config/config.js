/* MagicMirror² Config Sample
 *
 * By Michael Teeuw https://michaelteeuw.nl
 * MIT Licensed.
 *
 * For more information on how you can configure this file
 * see https://docs.magicmirror.builders/configuration/introduction.html
 * and https://docs.magicmirror.builders/modules/configuration.html
 */
let config = {
	//address: "localhost", 	// Address to listen on, can be:
	address: "0.0.0.0",
							// - "localhost", "127.0.0.1", "::1" to listen on loopback interface
							// - another specific IPv4/6 to listen on a specific interface
							// - "0.0.0.0", "::" to listen on any interface
							// Default, when address config is left out or empty, is "localhost"
	port: 8090,
	basePath: "/", 	// The URL path where MagicMirror² is hosted. If you are using a Reverse proxy
					// you must set the sub path here. basePath must end with a /
	ipWhitelist: ["127.0.0.1", "::ffff:127.0.0.1", "::1", "::ffff:172.18.14.0/24", "172.18.14.0/24"], 	// Set [] to allow all IP addresses
															// or add a specific IPv4 of 192.168.1.5 :
															// ["127.0.0.1", "::ffff:127.0.0.1", "::1", "::ffff:192.168.1.5"],
															// or IPv4 range of 192.168.3.0 --> 192.168.3.15 use CIDR format :
															// ["127.0.0.1", "::ffff:127.0.0.1", "::1", "::ffff:192.168.3.0/28"],

	useHttps: false, 		// Support HTTPS or not, default "false" will use HTTP
	httpsPrivateKey: "", 	// HTTPS private key path, only require when useHttps is true
	httpsCertificate: "", 	// HTTPS Certificate path, only require when useHttps is true

	language: "en",
	locale: "en-US",
	logLevel: ["INFO", "LOG", "WARN", "ERROR"], // Add "DEBUG" for even more logging
	timeFormat: 12,
	units: "imperial",
	// serverOnly:  true/false/"local" ,
	serverOnly: true,
	// local for armv6l processors, default
	//   starts serveronly and then starts chrome browser
	// false, default for all NON-armv6l devices
	// true, force serveronly mode, because you want to.. no UI on this device

	modules: [
		{
			module: "alert",
		},
		{
			module: "updatenotification",
			position: "top_bar"
		},
		{
                        module: "clock",
                        position: "top_left",
                        config: {
                                displayType: "digital",
                                showDate: true,
                                showTime: true,
                                showWeek: false,
                                showSunTimes: true,
                                showMoonTimes: true,
                                lat: 41.760653306851374,
                                lon: -71.33139524134553,
                        }
                },
		{
                        module: "weather",
                        position: "top_left",
                        config: {
                                weatherProvider: "weathergov",
                                apiBase: "https://api.weather.gov/points/",
                                type: "current",
                                updateInterval: 600000, //10 minutes (default)
                                lat: 41.760653306851374,
                                lon: -71.33139524134553,
                                degreeLabel: true,
                                showWindDirection: true,
                                showHumidity: true,
                                showFeelsLike: true,
                                showPrecipitationAmount: false,
                                windUnits: "mph",

                        }
                },
		{
                        module: "clock",
                        position: "top_left",
			disabled: true,
                        config: {
                                displayType: "digital",
                                showDate: true,
                                showTime: false,
                                showWeek: false,
                                showSunTimes: true,
                                showMoonTimes: true,
                                lat: 41.760653306851374,
                                lon: -71.33139524134553,
                        }
                },
		{
			module: "calendar",
			header: "Cozi Family Planner",
			position: "top_right",
			disabled: false,
			config: {
				tableClass: "medium",
				timeFormat: "dateheaders",
				dateFormat: "ddd - MMM Do",
				maximumEntries: 40,
				maximumNumberOfDays: 21,
				sliceMultiDayEvents: true,
				//maxTitleLength: 0,
				maxTitleLength: 27,
				coloredSymbol: true,
				coloredText: false,
				fade: false,
				calendars: [
					{
						symbol: "calendar",
						url: "https://rest.cozi.com/api/ext/1103/3e85cbf5-f90a-409e-b7a1-32c68966c60c/icalendar/feed/feed.ics"
					},
					{
                                                symbol: "calendar-day",
						color: "red",
                                                url: "webcal://www.calendarlabs.com/ical-calendar/ics/76/US_Holidays.ics"
                                        },
				],
				titleReplace: {
					"Cassara": "<div class='dot cap'>M</div>",
					"Timothy": "<div class='dot tim'>D</div>",
					"Genevieve": "<div class='dot gg'>G</div>",
					"Theodore": "<div class='dot ted'>T</div>", 
					"Tallulah": "<div class='dot lulu'>L</div>",

				},
				customEvents: [
					{ keyword: "All:", color: "orange" },
				]
			}
		},
		/*{
			module: "compliments",
			position: "lower_third"
		},*/
		
		/*{
			module: "weather",
			position: "top_right",
			config: {
				weatherProvider: "openweathermap",
				type: "current",
				location: "New York",
				locationID: "5128581", //ID from http://bulk.openweathermap.org/sample/city.list.json.gz; unzip the gz file and find your city
				apiKey: "YOUR_OPENWEATHER_API_KEY"
			}
		},
		{
			module: "weather",
			position: "top_right",
			header: "Weather Forecast",
			config: {
				weatherProvider: "openweathermap",
				type: "forecast",
				location: "New York",
				locationID: "5128581", //ID from http://bulk.openweathermap.org/sample/city.list.json.gz; unzip the gz file and find your city
				apiKey: "YOUR_OPENWEATHER_API_KEY"
			}
		},*/
		{
                        module: "weather",
                        position: "top_center",
			disabled: true,
			header: "Right Now",
                        config: {
                                weatherProvider: "weathergov",
				apiBase: "https://api.weather.gov/points/",
                                type: "current",
				updateInterval: 600000, //10 minutes (default)
				lat: 41.760653306851374,
                                lon: -71.33139524134553,
				degreeLabel: true,
				showWindDirection: true,
				showHumidity: true,
				showFeelsLike: true,
				showPrecipitationAmount: true,
				//showPrecipitationProbability: true,
				windUnits: "mph",

                        }
                },
		{
                        module: "weather",
                        position: "top_left",
			header: "Hourly",
			disabled: false,
                        config: {
                                weatherProvider: "weathergov",
                                apiBase: "https://api.weather.gov/points/",
                                type: "hourly",
				maxEntries: 16,
				lat: 41.760653306851374,
                                lon: -71.33139524134553,
				fade: false,
				colored: true,
				degreeLabel: true,
				showHumidity: true,
				showFeelsLike: true,
			//	showPrecipitationAmount: true,
				showPrecipitationProbability: true,
                        }
                },
                {
                        module: "weather",
                        position: "top_left",
                        header: "Forecast",
                        config: {
                                weatherProvider: "weathergov",
				apiBase: "https://api.weather.gov/points/",
                                type: "forecast",
				lat: 41.760653306851374,
                                lon: -71.33139524134553,
				fade: false,
				colored: true,
				maxNumberOfDays: 7,
				degreeLabel: true,
				windUnits: "mph",
				//showPrecipitationAmount: true,
				//showPrecipitationProbability: true,
				ignoreToday: true,


				
                        }
                },
		{
                        module: "calendar",
                        header: "School Lunch Schedule",
                        position: "top_left",
                        disabled: false,
                        config: {
				timeFormat: "dateheaders",
                                dateFormat: "ddd - MMM Do",
                                urgency: 0,
                                //maximumEntries: 5,
                                maximumNumberOfDays: 5,
                                maxTitleLength: 40,
				wrapEvents: true,
                                coloredSymbol: true,
				coloredText: false,
                                fade: false,
                                calendars: [
                                        {
                                                symbol: "calendar",
                                                url: "https://calendar.google.com/calendar/ical/s460s61q5pqiatemrn01id0ugs%40group.calendar.google.com/public/basic.ics",
                                        },
                                ],
                        }
                },
		/*{
			module: "newsfeed",
			position: "bottom_bar",
			config: {
				feeds: [
					{
						title: "New York Times",
						url: "https://rss.nytimes.com/services/xml/rss/nyt/HomePage.xml"
					}
				],
				showSourceTitle: true,
				showPublishDate: true,
				broadcastNewsFeeds: true,
				broadcastNewsUpdates: true
			}
		},*/
	]
};

/*************** DO NOT EDIT THE LINE BELOW ***************/
if (typeof module !== "undefined") {module.exports = config;}
