AmCharts.makeChart("map",{
					"type": "map",
					"pathToImages": "http://www.amcharts.com/lib/3/images/",
					"addClassNames": true,
					"fontSize": 15,
					"color": "#FFFFFF",
					"projection": "mercator",
					"backgroundAlpha": 1,
					"backgroundColor": "rgba(80,80,80,0)",
					"dataProvider": {
						"map": "canadaLow",
						"getAreasFromMap": true,
						"images": [
							{
								"top": 40,
								"left": 60,
								"width": 80,
								"height": 40,
								"pixelMapperLogo": true,
								"imageURL": "http://pixelmap.amcharts.com/static/img/logo.svg",
								"url": "http://www.amcharts.com"
							}
						],
						"areas": [
							{
								"id": "CA-AB",
								"title": "Alberta",
								"color": "rgba(152,175,133,1)",
								"description": "<a href='http://www.albertacanada.com/opportunity/programs-and-forms/ainp.aspx' target='_blank'>Skilled Worker Category and International Graduate Category (under Employer-Driven Stream)</a>"
							},
							{
								"id": "CA-BC",
								"title": "British Columbia",
								"color": "rgba(68,146,132,1)",
								"description": "<a href='http://www.welcomebc.ca/pnp' target='_blank'>Skilled Worker Category and International Graduate Category (under Skills Immigration Stream)</a>"
							},
							{
								"id": "CA-MB",
								"title": "Manitoba",
								"color": "rgba(184,218,107,1)",
								"description": "<a href='http://www.immigratemanitoba.com/immigrate-to-manitoba/' target='_blank'>Skilled worker in Manitoba (under Skilled Worker Stream)</a>"
							},
							{
								"id": "CA-NB",
								"title": "New Brunswick",
								"color": "rgba(235,137,144,1)",
								"description": "<a href='http://www.welcomenb.ca/content/wel-bien/en/immigrating/content/HowToImmigrate/NBProvincialNomineeProgram.html' target='_blank'>Express Entry Labour Market Stream and Skilled Workers with Employer Support Stream</a>"
							},
							{
								"id": "CA-NL",
								"title": "Newfoundland and Labrador",
								"color": "rgba(247,197,180,1)",
								"description": "<a href='http://www.nlpnp.ca/' target='_blank'>Newfoundland & Labrador Express Entry Skilled Worker, International Graduate Category and Skill Worker Category</a>"
							},
							{
								"id": "CA-NS",
								"title": "Nova Scotia",
								"color": "rgba(219,33,76,1)",
								"description": "<a href='http://www.novascotiaimmigration.com/' target='_blank'>Skilled worker in Manitoba (under Skilled Worker Stream)</a>"
							},
							{
								"id": "CA-NT",
								"title": "Northwest Territories",
								"color": "rgba(150,174,190,1)",
								"description": "<a href='http://www.immigratenwt.ca/northwest-territories-living-here' target='_blank'>Northwest Territories Express Entry and Skilled Worker Stream (under Employer Driven Program)</a>"
							},
							{
								"id": "CA-NU",
								"title": "Nunavut",
								"color": "rgba(117,197,240,1)",
								"description":"No provincial process available for international students"
							},
							{
								"id": "CA-ON",
								"title": "Ontario",
								"color": "rgba(248,195,0,1)",
								"description": "<a href='http://www.ontarioimmigration.ca/en/pnp/index.htm' target='_blank'>International Students with a Job Offer Stream</a>"
							},
							{
								"id": "CA-QC",
								"title": "Quebec",
								"color": "rgba(244,185,127,1)",
								"description":"No provincial process available for international students"
								
							},
							{
								"id": "CA-SK",
								"title": "Saskatchewan",
								"color": "rgba(156,206,89,1)",
								"description": "<a href='http://www.saskatchewan.ca/residents/moving-to-saskatchewan/immigrating-to-saskatchewan/saskatchewan-immigrant-nominee-program/apply-to-the-sinp/' target='_blank'>International Skilled Worker - Saskatchewan Express Entry</a>"
							},
							{
								"id": "CA-YT",
								"title": "Yukon",
								"color": "rgba(121,137,146,1)",
								"description": "<a href='http://www.education.gov.yk.ca/YNP.html' target='_blank'>Skilled Worker Stream and Yukon Express Entry Stream</a>"
							}
						]
					},
					"balloon": {
						"horizontalPadding": 15,
						"borderAlpha": 0,
						"borderThickness": 1,
						"verticalPadding": 15
					},
					"areasSettings": {
						"color": "rgba(129,129,129,1)",
						"outlineColor": "rgba(80,80,80,0)",
						"rollOverOutlineColor": "rgba(80,80,80,0)",
						"rollOverBrightness": 20,
						"selectedBrightness": 20,
						"selectable": true,
						"unlistedAreasAlpha": 0,
						"unlistedAreasOutlineAlpha": 0
					},
					"imagesSettings": {
						"alpha": 1,
						"color": "rgba(129,129,129,1)",
						"outlineAlpha": 0,
						"rollOverOutlineAlpha": 0,
						"outlineColor": "rgba(80,80,80,0)",
						"rollOverBrightness": 20,
						"selectedBrightness": 20,
						"selectable": true
					},
					"linesSettings": {
						"color": "rgba(129,129,129,1)",
						"selectable": true,
						"rollOverBrightness": 20,
						"selectedBrightness": 20
					},
					"zoomControl": {
						"zoomControlEnabled": true,
						"homeButtonEnabled": false,
						"panControlEnabled": false,
						"right": 38,
						"bottom": 30,
						"minZoomLevel": 0.25,
						"gridHeight": 100,
						"gridAlpha": 1,
						"gridBackgroundAlpha": 1,
						"gridColor": "#F6F6CD",
						"draggerAlpha": 1,
						"buttonCornerRadius": 2
					}
				});