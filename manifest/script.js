import { TemplateEngine } from "./templateEngine.js";
import { JsonToHtml } from "./jsonToHtml.js";

let docpageData = {};

const docPageTemplate = {
	tag: "div",
	children: [
		{
			tag: "div",
			attributes: {
				class: "overlay",
			},
		},
		{
			tag: "div",
			attributes: {
				class: "navbar-container",
			},
			children: [
				{
					tag: "div",
					attributes: {
						class: "navbar-cont-1",
					},
					children: [
						{
							tag: "nav",
							attributes: {
								id: "nav1",
								class: "container is-fullhd",
							},
							children: [
								{
									tag: "header",
									children: [
										{
											tag: "h2",
											content: "",
										},
									],
								},
								{
									tag: "ul",
									children: [
										{
											tag: "li",
											children: [
												{
													tag: "a",
													attributes: {
														href: "#",
													},
													content: "Resources",
												},
											],
										},
										{
											tag: "li",
											children: [
												{
													tag: "a",
													attributes: {
														href: "#",
													},
													content: "Simplilearn for Business",
												},
											],
										},
										{
											tag: "li",
											children: [
												{
													tag: "a",
													attributes: {
														href: "#",
													},
													content: "Become an Instructor",
												},
											],
										},
										{
											tag: "li",
											children: [
												{
													tag: "a",
													attributes: {
														href: "#",
													},
													content: "Hire From Us",
												},
											],
										},
										{
											tag: "li",
											children: [
												{
													tag: "a",
													attributes: {
														href: "#",
													},
													content: "Reviews",
												},
											],
										},
									],
								},
							],
						},
					],
				},
				{
					tag: "div",
					attributes: {
						class: "navbar-cont-2",
					},
					children: [
						{
							tag: "nav",
							attributes: {
								id: "nav2",
								class: "container is-fullhd",
							},
							children: [
								{
									tag: "header",
									children: [
										{
											tag: "div",
											attributes: {
												class: "hamburger-icon",
											},
											children: [
												{
													tag: "span",
													content: "",
												},
												{
													tag: "span",
													content: "",
												},
												{
													tag: "span",
													content: "",
												},
											],
										},
										{
											tag: "img",
											attributes: {
												src: "./assets/company_logo.svg",
												alt: "Company logo",
											},
										},
										{
											tag: "button",
											attributes: {
												class: "primary-btn",
											},
											children: [
												{
													tag: "div",
													attributes: {
														class: "grids-decoration",
													},
													children: [
														{
															tag: "span",
															content: "",
														},
														{
															tag: "span",
															content: "",
														},
														{
															tag: "span",
															content: "",
														},
														{
															tag: "span",
															content: "",
														},
														{
															tag: "span",
															content: "",
														},
														{
															tag: "span",
															content: "",
														},
														{
															tag: "span",
															content: "",
														},
														{
															tag: "span",
															content: "",
														},
														{
															tag: "span",
															content: "",
														},
													],
												},
												{
													tag: "content",
													content: "All Courses",
												},
											],
										},
										{
											tag: "div",
											attributes: {
												class: "input-container",
											},
											children: [
												{
													tag: "span",
													attributes: {
														class: "header-search",
													},
													children: [
														{
															tag: "i",
															attributes: {
																class: "fa-solid fa-magnifying-glass",
															},
														},
													],
												},
												{
													tag: "input",
													attributes: {
														type: "text",
														placeholder: "What do you want to learn?",
														class: "header-input",
													},
												},
											],
										},
									],
								},
								{
									tag: "input",
									attributes: {
										type: "checkbox",
										id: "nav-check",
									},
								},
								{
									tag: "ul",
									children: [
										{
											tag: "li",
											children: [
												{
													tag: "button",
													attributes: {
														class: "outlined-btn",
													},
													content: "Log in",
												},
											],
										},
									],
								},
							],
						},
					],
				},
			],
		},
		{
			tag: "div",
			attributes: {
				class: "sidebar-container",
			},
			children: [
				{
					tag: "aside",
					children: [
						{
							tag: "header",
							children: [
								{
									tag: "h5",
									content: "Menu",
								},
							],
						},
						{
							tag: "nav",
							children: [
								{
									tag: "ul",
									children: [
										{
											tag: "li",
											children: [
												{
													tag: "a",
													attributes: {
														href: "#",
													},
													content: "All Courses",
												},
											],
										},
										{
											tag: "li",
											children: [
												{
													tag: "a",
													attributes: {
														href: "#",
													},
													content: "Resources",
												},
											],
										},
										{
											tag: "li",
											children: [
												{
													tag: "a",
													attributes: {
														href: "#",
													},
													content: "Simplilearn for Business",
												},
											],
										},
										{
											tag: "li",
											children: [
												{
													tag: "a",
													attributes: {
														href: "#",
													},
													content: "Become an Instructor",
												},
											],
										},
										{
											tag: "li",
											children: [
												{
													tag: "a",
													attributes: {
														href: "#",
													},
													content: "Hire From Us",
												},
											],
										},
										{
											tag: "li",
											children: [
												{
													tag: "a",
													attributes: {
														href: "#",
													},
													content: "Digital transformation",
												},
											],
										},
										{
											tag: "li",
											children: [
												{
													tag: "a",
													attributes: {
														href: "#",
													},
													content: "Reviews",
												},
											],
										},
									],
								},
							],
						},
					],
				},
			],
		},
		{
			tag: "header",
			attributes: {
				id: "header",
				class: "header",
			},
			children: [
				{
					tag: "div",
					attributes: {
						class: "hero-container container is-fullhd",
					},
					children: [
						{
							tag: "div",
							attributes: {
								class: "hero-section stars",
							},
							children: [
								{
									tag: "h1",
									attributes: {
										class: "hero-title",
									},
									content: "World's #1 <br> Online Bootcamp",
								},
								{
									tag: "p",
									attributes: {
										class: "hero-subtitle",
									},
									content: "<span>500, 000</span> careers advanced",
								},
								{
									tag: "p",
									attributes: {
										class: "hero-subtitle",
									},
									content: "<span>1,500</span> careers advanced",
								},
								{
									tag: "p",
									attributes: {
										class: "hero-subtitle",
									},
									content:
										"<span>85%</span> report career benifits including promotion or a new job",
								},
								{
									tag: "button",
									attributes: {
										class: "primary-btn",
									},
									content: "Explore Programs",
								},
							],
						},
						{
							tag: "div",
							attributes: {
								class: "right",
							},
							children: [
								{
									tag: "img",
									attributes: {
										src: "./assets/laptop_3.avif",
										alt: "Laptop",
									},
								},
								{
									tag: "span",
									attributes: {
										class: "play",
									},
									children: [
										{
											tag: "i",
											attributes: {
												class: "fa-solid fa-play",
											},
										},
									],
								},
							],
						},
					],
				},
			],
		},
		{
			tag: "div",
			attributes: {
				class: "logo-container container is-fullhd",
			},
			children: [
				{
					tag: "section",
					attributes: {
						id: "logo",
						class: "",
					},
					children: [
						{
							tag: "div",
							attributes: {
								class: "logo-heading",
							},
							children: [
								{
									tag: "p",
									content: "Partnering with world's leading universities and companies",
								},
							],
						},
						{
							tag: "div",
							attributes: {
								class: "logos",
							},
							children: [
								{
									tag: "div",
									attributes: {
										class: "logo logo-1",
									},
									children: [
										{
											tag: "img",
											attributes: {
												src: "./assets/aws.svg",
												alt: "AWS",
											},
										},
									],
								},
								{
									tag: "div",
									attributes: {
										class: "logo logo-2",
									},
									children: [
										{
											tag: "img",
											attributes: {
												src: "./assets/IBM.svg",
												alt: "",
											},
										},
									],
								},
								{
									tag: "div",
									attributes: {
										class: "logo logo-3",
									},
									children: [
										{
											tag: "img",
											attributes: {
												src: "./assets/Microsoft.svg",
												alt: "",
											},
										},
									],
								},
								{
									tag: "div",
									attributes: {
										class: "logo logo-4",
									},
									children: [
										{
											tag: "img",
											attributes: {
												src: "./assets/Electronics & ICT.svg",
												alt: "",
											},
										},
									],
								},
								{
									tag: "div",
									attributes: {
										class: "logo logo-5",
									},
									children: [
										{
											tag: "img",
											attributes: {
												src: "./assets/Purdue.svg",
												alt: "",
											},
										},
									],
								},
								{
									tag: "div",
									attributes: {
										class: "logo logo-5",
									},
									children: [
										{
											tag: "img",
											attributes: {
												src: "./assets/IIT.svg",
												alt: "",
											},
										},
									],
								},
								{
									tag: "div",
									attributes: {
										class: "logo logo-5",
									},
									children: [
										{
											tag: "img",
											attributes: {
												src: "./assets/Roorkee.svg",
												alt: "",
											},
										},
									],
								},
								{
									tag: "div",
									attributes: {
										class: "logo logo-5",
									},
									children: [
										{
											tag: "img",
											attributes: {
												src: "./assets/SP-Jain.svg",
												alt: "",
											},
										},
									],
								},
							],
						},
					],
				},
			],
		},
		{
			tag: "div",
			attributes: {
				class: "get-certified-container",
			},
			children: [
				{
					tag: "section",
					attributes: {
						id: "get-certified",
						class: "container is-fullhd",
					},
					children: [
						{
							tag: "div",
							attributes: {
								class: "get-certified-heading",
							},
							children: [
								{
									tag: "h4",
									content: "Get Certified, Get Ahead with Our Programs",
								},
								{
									tag: "p",
									content:
										"Learn from global experts and get certified by the world's leading universities",
								},
							],
						},
						{
							tag: "div",
							attributes: {
								class: "prev-button",
							},
							children: [
								{
									tag: "span",
									children: [
										{
											tag: "i",
											attributes: {
												class: "fa-solid fa-circle-chevron-left",
											},
										},
									],
								},
							],
						},
						{
							tag: "div",
							attributes: {
								class: "get-certified-grid",
							},
							children: [
								{
									tag: "div",
									attributes: {
										class: "get-grid get-grid-1",
									},
									children: [
										{
											tag: "h5",
											content: "Categories",
										},
										{
											tag: "ul",
											children: [
												{
													tag: "li",
													attributes: {
														class: "active",
													},
													content: "Most Popular",
												},
												{
													tag: "li",
													content: "Generative AI",
												},
												{
													tag: "li",
													content: "Data Science & Business Analytics",
												},
												{
													tag: "li",
													content: "AI & Machine Learning",
												},
												{
													tag: "li",
													content: "Project Management",
												},
												{
													tag: "li",
													content: "Cyber Security",
												},
												{
													tag: "li",
													content: "DevOps",
												},
												{
													tag: "li",
													content: "Business and Leadership",
												},
												{
													tag: "li",
													content: "Quality Management",
												},
												{
													tag: "li",
													content: "Software Development",
												},
												{
													tag: "li",
													content: "Agile and Scrum",
												},
												{
													tag: "li",
													content: "IT Service and Architecture",
												},
												{
													tag: "li",
													content: "Digital Marketing",
												},
											],
										},
									],
								},
								{
									tag: "div",
									attributes: {
										class: "get-grid get-card-grid-1 certified-card-2",
									},
									children: [
										{
											tag: "div",
											attributes: {
												class: "card-img-cont",
											},
											children: [
												{
													tag: "img",
													attributes: {
														src: "./assets/card-2.avif",
														alt: "",
													},
												},
												{
													tag: "div",
													attributes: {
														class: "card-abs",
													},
													children: [
														{
															tag: "img",
															attributes: {
																src: "./assets/card-2-abs.svg",
																alt: "",
															},
														},
													],
												},
											],
										},
										{
											tag: "div",
											attributes: {
												class: "middle",
											},
											children: [
												{
													tag: "h5",
													content: "PMP Certification Training",
												},
												{
													tag: "p",
													content:
														"<span><i class='fa-solid fa-check'></i></span>35 contact hours",
												},
												{
													tag: "p",
													content:
														"<span><i class='fa-solid fa-check'></i></span>8 industry case studies, 20 industry-based scenarios",
												},
											],
										},
										{
											tag: "div",
											attributes: {
												class: "bottom",
											},
											children: [
												{
													tag: "p",
													content: "110.5k Learners",
												},
												{
													tag: "div",
													attributes: {
														class: "know-more",
													},
													children: [
														{
															tag: "div",
															attributes: {
																class: "know-left",
															},
															children: [
																{
																	tag: "span",
																},
																{
																	tag: "p",
																	content: "4.40 (37413 Ratings)",
																},
															],
														},
														{
															tag: "div",
															attributes: {
																class: "know-right",
															},
															content: "Know more",
														},
													],
												},
											],
										},
									],
								},
								{
									tag: "div",
									attributes: {
										class: "get-grid get-card-grid-1 certified-card-2",
									},
									children: [
										{
											tag: "div",
											attributes: {
												class: "card-img-cont",
											},
											children: [
												{
													tag: "img",
													attributes: {
														src: "./assets/card-2.avif",
														alt: "",
													},
												},
												{
													tag: "div",
													attributes: {
														class: "card-abs",
													},
													children: [
														{
															tag: "img",
															attributes: {
																src: "./assets/card-2-abs.svg",
																alt: "",
															},
														},
													],
												},
											],
										},
										{
											tag: "div",
											attributes: {
												class: "middle",
											},
											children: [
												{
													tag: "h5",
													content: "PMP Certification Training",
												},
												{
													tag: "p",
													content:
														"<span><i class='fa-solid fa-check'></i></span>35 contact hours",
												},
												{
													tag: "p",
													content:
														"<span><i class='fa-solid fa-check'></i></span>8 industry case studies, 20 industry-based scenarios",
												},
											],
										},
										{
											tag: "div",
											attributes: {
												class: "bottom",
											},
											children: [
												{
													tag: "p",
													content: "110.5k Learners",
												},
												{
													tag: "div",
													attributes: {
														class: "know-more",
													},
													children: [
														{
															tag: "div",
															attributes: {
																class: "know-left",
															},
															children: [
																{
																	tag: "span",
																},
																{
																	tag: "p",
																	content: "4.40 (37413 Ratings)",
																},
															],
														},
														{
															tag: "div",
															attributes: {
																class: "know-right",
															},
															content: "Know more",
														},
													],
												},
											],
										},
									],
								},
								{
									tag: "div",
									attributes: {
										class: "get-grid get-card-grid-1",
									},
									children: [
										{
											tag: "div",
											attributes: {
												class: "card-img-cont",
											},
											children: [
												{
													tag: "img",
													attributes: {
														src: "./assets/card-2.avif",
														alt: "",
													},
												},
												{
													tag: "div",
													attributes: {
														class: "card-abs",
													},
													children: [
														{
															tag: "img",
															attributes: {
																src: "./assets/card-2-abs.svg",
																alt: "",
															},
														},
													],
												},
											],
										},
										{
											tag: "div",
											attributes: {
												class: "middle",
											},
											children: [
												{
													tag: "h5",
													content: "PMP Certification Training",
												},
												{
													tag: "p",
													content:
														"<span><i class='fa-solid fa-check'></i></span>35 contact hours",
												},
												{
													tag: "p",
													content:
														"<span><i class='fa-solid fa-check'></i></span>8 industry case studies, 20 industry-based scenarios",
												},
											],
										},
										{
											tag: "div",
											attributes: {
												class: "bottom",
											},
											children: [
												{
													tag: "p",
													content: "110.5k Learners",
												},
												{
													tag: "div",
													attributes: {
														class: "know-more",
													},
													children: [
														{
															tag: "div",
															attributes: {
																class: "know-left",
															},
															children: [
																{
																	tag: "span",
																},
																{
																	tag: "p",
																	content: "4.40 (37413 Ratings)",
																},
															],
														},
														{
															tag: "div",
															attributes: {
																class: "know-right",
															},
															content: "Know more",
														},
													],
												},
											],
										},
									],
								},
								{
									tag: "div",
									attributes: {
										class: "get-grid get-card-grid-1 certified-card-2",
									},
									children: [
										{
											tag: "div",
											attributes: {
												class: "card-img-cont",
											},
											children: [
												{
													tag: "img",
													attributes: {
														src: "./assets/card-2.avif",
														alt: "",
													},
												},
												{
													tag: "div",
													attributes: {
														class: "card-abs",
													},
													children: [
														{
															tag: "img",
															attributes: {
																src: "./assets/card-2-abs.svg",
																alt: "",
															},
														},
													],
												},
											],
										},
										{
											tag: "div",
											attributes: {
												class: "middle",
											},
											children: [
												{
													tag: "h5",
													content: "PMP Certification Training",
												},
												{
													tag: "p",
													content:
														"<span><i class='fa-solid fa-check'></i></span>35 contact hours",
												},
												{
													tag: "p",
													content:
														"<span><i class='fa-solid fa-check'></i></span>8 industry case studies, 20 industry-based scenarios",
												},
											],
										},
										{
											tag: "div",
											attributes: {
												class: "bottom",
											},
											children: [
												{
													tag: "p",
													content: "110.5k Learners",
												},
												{
													tag: "div",
													attributes: {
														class: "know-more",
													},
													children: [
														{
															tag: "div",
															attributes: {
																class: "know-left",
															},
															children: [
																{
																	tag: "span",
																},
																{
																	tag: "p",
																	content: "4.40 (37413 Ratings)",
																},
															],
														},
														{
															tag: "div",
															attributes: {
																class: "know-right",
															},
															content: "Know more",
														},
													],
												},
											],
										},
									],
								},
								{
									tag: "div",
									attributes: {
										class: "get-grid get-card-grid-1 certified-card-2",
									},
									children: [
										{
											tag: "div",
											attributes: {
												class: "card-img-cont",
											},
											children: [
												{
													tag: "img",
													attributes: {
														src: "./assets/card-2.avif",
														alt: "",
													},
												},
												{
													tag: "div",
													attributes: {
														class: "card-abs",
													},
													children: [
														{
															tag: "img",
															attributes: {
																src: "./assets/card-2-abs.svg",
																alt: "",
															},
														},
													],
												},
											],
										},
										{
											tag: "div",
											attributes: {
												class: "middle",
											},
											children: [
												{
													tag: "h5",
													content: "PMP Certification Training",
												},
												{
													tag: "p",
													content:
														"<span><i class='fa-solid fa-check'></i></span>35 contact hours",
												},
												{
													tag: "p",
													content:
														"<span><i class='fa-solid fa-check'></i></span>8 industry case studies, 20 industry-based scenarios",
												},
											],
										},
										{
											tag: "div",
											attributes: {
												class: "bottom",
											},
											children: [
												{
													tag: "p",
													content: "110.5k Learners",
												},
												{
													tag: "div",
													attributes: {
														class: "know-more",
													},
													children: [
														{
															tag: "div",
															attributes: {
																class: "know-left",
															},
															children: [
																{
																	tag: "span",
																},
																{
																	tag: "p",
																	content: "4.40 (37413 Ratings)",
																},
															],
														},
														{
															tag: "div",
															attributes: {
																class: "know-right",
															},
															content: "Know more",
														},
													],
												},
											],
										},
									],
								},
								{
									tag: "div",
									attributes: {
										class: "get-grid get-card-grid-1 certified-card-2",
									},
									children: [
										{
											tag: "div",
											attributes: {
												class: "card-img-cont",
											},
											children: [
												{
													tag: "img",
													attributes: {
														src: "./assets/card-2.avif",
														alt: "",
													},
												},
												{
													tag: "div",
													attributes: {
														class: "card-abs",
													},
													children: [
														{
															tag: "img",
															attributes: {
																src: "./assets/card-2-abs.svg",
																alt: "",
															},
														},
													],
												},
											],
										},
										{
											tag: "div",
											attributes: {
												class: "middle",
											},
											children: [
												{
													tag: "h5",
													content: "PMP Certification Training",
												},
												{
													tag: "p",
													content:
														"<span><i class='fa-solid fa-check'></i></span>35 contact hours",
												},
												{
													tag: "p",
													content:
														"<span><i class='fa-solid fa-check'></i></span>8 industry case studies, 20 industry-based scenarios",
												},
											],
										},
										{
											tag: "div",
											attributes: {
												class: "bottom",
											},
											children: [
												{
													tag: "p",
													content: "110.5k Learners",
												},
												{
													tag: "div",
													attributes: {
														class: "know-more",
													},
													children: [
														{
															tag: "div",
															attributes: {
																class: "know-left",
															},
															children: [
																{
																	tag: "span",
																},
																{
																	tag: "p",
																	content: "4.40 (37413 Ratings)",
																},
															],
														},
														{
															tag: "div",
															attributes: {
																class: "know-right",
															},
															content: "Know more",
														},
													],
												},
											],
										},
									],
								},
								{
									tag: "div",
									attributes: {
										class: "get-grid get-card-grid-1 certified-card-2",
									},
									children: [
										{
											tag: "div",
											attributes: {
												class: "card-img-cont",
											},
											children: [
												{
													tag: "img",
													attributes: {
														src: "./assets/card-2.avif",
														alt: "",
													},
												},
												{
													tag: "div",
													attributes: {
														class: "card-abs",
													},
													children: [
														{
															tag: "img",
															attributes: {
																src: "./assets/card-2-abs.svg",
																alt: "",
															},
														},
													],
												},
											],
										},
										{
											tag: "div",
											attributes: {
												class: "middle",
											},
											children: [
												{
													tag: "h5",
													content: "PMP Certification Training",
												},
												{
													tag: "p",
													content:
														"<span><i class='fa-solid fa-check'></i></span>35 contact hours",
												},
												{
													tag: "p",
													content:
														"<span><i class='fa-solid fa-check'></i></span>8 industry case studies, 20 industry-based scenarios",
												},
											],
										},
										{
											tag: "div",
											attributes: {
												class: "bottom",
											},
											children: [
												{
													tag: "p",
													content: "110.5k Learners",
												},
												{
													tag: "div",
													attributes: {
														class: "know-more",
													},
													children: [
														{
															tag: "div",
															attributes: {
																class: "know-left",
															},
															children: [
																{
																	tag: "span",
																},
																{
																	tag: "p",
																	content: "4.40 (37413 Ratings)",
																},
															],
														},
														{
															tag: "div",
															attributes: {
																class: "know-right",
															},
															content: "Know more",
														},
													],
												},
											],
										},
									],
								},
								{
									tag: "div",
									attributes: {
										class: "get-grid get-card-grid-1 certified-card-2",
									},
									children: [
										{
											tag: "div",
											attributes: {
												class: "card-img-cont",
											},
											children: [
												{
													tag: "img",
													attributes: {
														src: "./assets/card-2.avif",
														alt: "",
													},
												},
												{
													tag: "div",
													attributes: {
														class: "card-abs",
													},
													children: [
														{
															tag: "img",
															attributes: {
																src: "./assets/card-2-abs.svg",
																alt: "",
															},
														},
													],
												},
											],
										},
										{
											tag: "div",
											attributes: {
												class: "middle",
											},
											children: [
												{
													tag: "h5",
													content: "PMP Certification Training",
												},
												{
													tag: "p",
													content:
														"<span><i class='fa-solid fa-check'></i></span>35 contact hours",
												},
												{
													tag: "p",
													content:
														"<span><i class='fa-solid fa-check'></i></span>8 industry case studies, 20 industry-based scenarios",
												},
											],
										},
										{
											tag: "div",
											attributes: {
												class: "bottom",
											},
											children: [
												{
													tag: "p",
													content: "110.5k Learners",
												},
												{
													tag: "div",
													attributes: {
														class: "know-more",
													},
													children: [
														{
															tag: "div",
															attributes: {
																class: "know-left",
															},
															children: [
																{
																	tag: "span",
																},
																{
																	tag: "p",
																	content: "4.40 (37413 Ratings)",
																},
															],
														},
														{
															tag: "div",
															attributes: {
																class: "know-right",
															},
															content: "Know more",
														},
													],
												},
											],
										},
									],
								},
								{
									tag: "div",
									attributes: {
										class: "get-grid get-card-grid-1 certified-card-2",
									},
									children: [
										{
											tag: "div",
											attributes: {
												class: "card-img-cont",
											},
											children: [
												{
													tag: "img",
													attributes: {
														src: "./assets/card-2.avif",
														alt: "",
													},
												},
												{
													tag: "div",
													attributes: {
														class: "card-abs",
													},
													children: [
														{
															tag: "img",
															attributes: {
																src: "./assets/card-2-abs.svg",
																alt: "",
															},
														},
													],
												},
											],
										},
										{
											tag: "div",
											attributes: {
												class: "middle",
											},
											children: [
												{
													tag: "h5",
													content: "PMP Certification Training",
												},
												{
													tag: "p",
													content:
														"<span><i class='fa-solid fa-check'></i></span>35 contact hours",
												},
												{
													tag: "p",
													content:
														"<span><i class='fa-solid fa-check'></i></span>8 industry case studies, 20 industry-based scenarios",
												},
											],
										},
										{
											tag: "div",
											attributes: {
												class: "bottom",
											},
											children: [
												{
													tag: "p",
													content: "110.5k Learners",
												},
												{
													tag: "div",
													attributes: {
														class: "know-more",
													},
													children: [
														{
															tag: "div",
															attributes: {
																class: "know-left",
															},
															children: [
																{
																	tag: "span",
																},
																{
																	tag: "p",
																	content: "4.40 (37413 Ratings)",
																},
															],
														},
														{
															tag: "div",
															attributes: {
																class: "know-right",
															},
															content: "Know more",
														},
													],
												},
											],
										},
									],
								},
								{
									tag: "div",
									attributes: {
										class: "get-grid get-card-grid-1 certified-card-2",
									},
									children: [
										{
											tag: "div",
											attributes: {
												class: "card-img-cont",
											},
											children: [
												{
													tag: "img",
													attributes: {
														src: "./assets/card-2.avif",
														alt: "",
													},
												},
												{
													tag: "div",
													attributes: {
														class: "card-abs",
													},
													children: [
														{
															tag: "img",
															attributes: {
																src: "./assets/card-2-abs.svg",
																alt: "",
															},
														},
													],
												},
											],
										},
										{
											tag: "div",
											attributes: {
												class: "middle",
											},
											children: [
												{
													tag: "h5",
													content: "PMP Certification Training",
												},
												{
													tag: "p",
													content:
														"<span><i class='fa-solid fa-check'></i></span>35 contact hours",
												},
												{
													tag: "p",
													content:
														"<span><i class='fa-solid fa-check'></i></span>8 industry case studies, 20 industry-based scenarios",
												},
											],
										},
										{
											tag: "div",
											attributes: {
												class: "bottom",
											},
											children: [
												{
													tag: "p",
													content: "110.5k Learners",
												},
												{
													tag: "div",
													attributes: {
														class: "know-more",
													},
													children: [
														{
															tag: "div",
															attributes: {
																class: "know-left",
															},
															children: [
																{
																	tag: "span",
																},
																{
																	tag: "p",
																	content: "4.40 (37413 Ratings)",
																},
															],
														},
														{
															tag: "div",
															attributes: {
																class: "know-right",
															},
															content: "Know more",
														},
													],
												},
											],
										},
									],
								},
								{
									tag: "div",
									attributes: {
										class: "get-grid get-card-grid-1 certified-card-2",
									},
									children: [
										{
											tag: "div",
											attributes: {
												class: "card-img-cont",
											},
											children: [
												{
													tag: "img",
													attributes: {
														src: "./assets/card-2.avif",
														alt: "",
													},
												},
												{
													tag: "div",
													attributes: {
														class: "card-abs",
													},
													children: [
														{
															tag: "img",
															attributes: {
																src: "./assets/card-2-abs.svg",
																alt: "",
															},
														},
													],
												},
											],
										},
										{
											tag: "div",
											attributes: {
												class: "middle",
											},
											children: [
												{
													tag: "h5",
													content: "PMP Certification Training",
												},
												{
													tag: "p",
													content:
														"<span><i class='fa-solid fa-check'></i></span>35 contact hours",
												},
												{
													tag: "p",
													content:
														"<span><i class='fa-solid fa-check'></i></span>8 industry case studies, 20 industry-based scenarios",
												},
											],
										},
										{
											tag: "div",
											attributes: {
												class: "bottom",
											},
											children: [
												{
													tag: "p",
													content: "110.5k Learners",
												},
												{
													tag: "div",
													attributes: {
														class: "know-more",
													},
													children: [
														{
															tag: "div",
															attributes: {
																class: "know-left",
															},
															children: [
																{
																	tag: "span",
																},
																{
																	tag: "p",
																	content: "4.40 (37413 Ratings)",
																},
															],
														},
														{
															tag: "div",
															attributes: {
																class: "know-right",
															},
															content: "Know more",
														},
													],
												},
											],
										},
									],
								},
								{
									tag: "div",
									attributes: {
										class: "get-grid get-card-grid-1 certified-card-2",
									},
									children: [
										{
											tag: "div",
											attributes: {
												class: "card-img-cont",
											},
											children: [
												{
													tag: "img",
													attributes: {
														src: "./assets/card-2.avif",
														alt: "",
													},
												},
												{
													tag: "div",
													attributes: {
														class: "card-abs",
													},
													children: [
														{
															tag: "img",
															attributes: {
																src: "./assets/card-2-abs.svg",
																alt: "",
															},
														},
													],
												},
											],
										},
										{
											tag: "div",
											attributes: {
												class: "middle",
											},
											children: [
												{
													tag: "h5",
													content: "PMP Certification Training",
												},
												{
													tag: "p",
													content:
														"<span><i class='fa-solid fa-check'></i></span>35 contact hours",
												},
												{
													tag: "p",
													content:
														"<span><i class='fa-solid fa-check'></i></span>8 industry case studies, 20 industry-based scenarios",
												},
											],
										},
										{
											tag: "div",
											attributes: {
												class: "bottom",
											},
											children: [
												{
													tag: "p",
													content: "110.5k Learners",
												},
												{
													tag: "div",
													attributes: {
														class: "know-more",
													},
													children: [
														{
															tag: "div",
															attributes: {
																class: "know-left",
															},
															children: [
																{
																	tag: "span",
																},
																{
																	tag: "p",
																	content: "4.40 (37413 Ratings)",
																},
															],
														},
														{
															tag: "div",
															attributes: {
																class: "know-right",
															},
															content: "Know more",
														},
													],
												},
											],
										},
									],
								},
								{
									tag: "div",
									attributes: {
										class: "get-grid get-card-grid-1 certified-card-2",
									},
									children: [
										{
											tag: "div",
											attributes: {
												class: "card-img-cont",
											},
											children: [
												{
													tag: "img",
													attributes: {
														src: "./assets/card-2.avif",
														alt: "",
													},
												},
												{
													tag: "div",
													attributes: {
														class: "card-abs",
													},
													children: [
														{
															tag: "img",
															attributes: {
																src: "./assets/card-2-abs.svg",
																alt: "",
															},
														},
													],
												},
											],
										},
										{
											tag: "div",
											attributes: {
												class: "middle",
											},
											children: [
												{
													tag: "h5",
													content: "PMP Certification Training",
												},
												{
													tag: "p",
													content:
														"<span><i class='fa-solid fa-check'></i></span>35 contact hours",
												},
												{
													tag: "p",
													content:
														"<span><i class='fa-solid fa-check'></i></span>8 industry case studies, 20 industry-based scenarios",
												},
											],
										},
										{
											tag: "div",
											attributes: {
												class: "bottom",
											},
											children: [
												{
													tag: "p",
													content: "110.5k Learners",
												},
												{
													tag: "div",
													attributes: {
														class: "know-more",
													},
													children: [
														{
															tag: "div",
															attributes: {
																class: "know-left",
															},
															children: [
																{
																	tag: "span",
																},
																{
																	tag: "p",
																	content: "4.40 (37413 Ratings)",
																},
															],
														},
														{
															tag: "div",
															attributes: {
																class: "know-right",
															},
															content: "Know more",
														},
													],
												},
											],
										},
									],
								},
								{
									tag: "div",
									attributes: {
										class: "get-grid get-card-grid-1 certified-card-2",
									},
									children: [
										{
											tag: "div",
											attributes: {
												class: "card-img-cont",
											},
											children: [
												{
													tag: "img",
													attributes: {
														src: "./assets/card-2.avif",
														alt: "",
													},
												},
												{
													tag: "div",
													attributes: {
														class: "card-abs",
													},
													children: [
														{
															tag: "img",
															attributes: {
																src: "./assets/card-2-abs.svg",
																alt: "",
															},
														},
													],
												},
											],
										},
										{
											tag: "div",
											attributes: {
												class: "middle",
											},
											children: [
												{
													tag: "h5",
													content: "PMP Certification Training",
												},
												{
													tag: "p",
													content:
														"<span><i class='fa-solid fa-check'></i></span>35 contact hours",
												},
												{
													tag: "p",
													content:
														"<span><i class='fa-solid fa-check'></i></span>8 industry case studies, 20 industry-based scenarios",
												},
											],
										},
										{
											tag: "div",
											attributes: {
												class: "bottom",
											},
											children: [
												{
													tag: "p",
													content: "110.5k Learners",
												},
												{
													tag: "div",
													attributes: {
														class: "know-more",
													},
													children: [
														{
															tag: "div",
															attributes: {
																class: "know-left",
															},
															children: [
																{
																	tag: "span",
																},
																{
																	tag: "p",
																	content: "4.40 (37413 Ratings)",
																},
															],
														},
														{
															tag: "div",
															attributes: {
																class: "know-right",
															},
															content: "Know more",
														},
													],
												},
											],
										},
									],
								},
								{
									tag: "div",
									attributes: {
										class: "get-grid get-card-grid-1 certified-card-2",
									},
									children: [
										{
											tag: "div",
											attributes: {
												class: "card-img-cont",
											},
											children: [
												{
													tag: "img",
													attributes: {
														src: "./assets/card-2.avif",
														alt: "",
													},
												},
												{
													tag: "div",
													attributes: {
														class: "card-abs",
													},
													children: [
														{
															tag: "img",
															attributes: {
																src: "./assets/card-2-abs.svg",
																alt: "",
															},
														},
													],
												},
											],
										},
										{
											tag: "div",
											attributes: {
												class: "middle",
											},
											children: [
												{
													tag: "h5",
													content: "PMP Certification Training",
												},
												{
													tag: "p",
													content:
														"<span><i class='fa-solid fa-check'></i></span>35 contact hours",
												},
												{
													tag: "p",
													content:
														"<span><i class='fa-solid fa-check'></i></span>8 industry case studies, 20 industry-based scenarios",
												},
											],
										},
										{
											tag: "div",
											attributes: {
												class: "bottom",
											},
											children: [
												{
													tag: "p",
													content: "110.5k Learners",
												},
												{
													tag: "div",
													attributes: {
														class: "know-more",
													},
													children: [
														{
															tag: "div",
															attributes: {
																class: "know-left",
															},
															children: [
																{
																	tag: "span",
																},
																{
																	tag: "p",
																	content: "4.40 (37413 Ratings)",
																},
															],
														},
														{
															tag: "div",
															attributes: {
																class: "know-right",
															},
															content: "Know more",
														},
													],
												},
											],
										},
									],
								},
							],
						},
						{
							tag: "div",
							attributes: {
								class: "next-button",
							},
							children: [
								{
									tag: "span",
									children: [
										{
											tag: "i",
											attributes: {
												class: "fa-solid fa-circle-chevron-right",
											},
										},
									],
								},
							],
						},
						{
							tag: "div",
							attributes: {
								class: "get-grid-hidden",
							},
							children: [
								{
									tag: "ul",
									children: [
										{
											tag: "li",
											attributes: {
												class: "active",
											},
											content:
												"Most Popular <span><i class='fa-solid fa-chevron-down'></i></span>",
										},
										{
											tag: "li",
											content:
												"Generative AI  <span><i class='fa-solid fa-chevron-down'></i></span>",
										},
										{
											tag: "li",
											content:
												"Data Science & Business Analytics <span><i class='fa-solid fa-chevron-down'></i></span>",
										},
										{
											tag: "li",
											content:
												"AI & Machine Learning <span><i class='fa-solid fa-chevron-down'></i></span>",
										},
										{
											tag: "li",
											content:
												"Project Management <span><i class='fa-solid fa-chevron-down'></i></span>",
										},
										{
											tag: "li",
											content:
												"Cyber Security <span><i class='fa-solid fa-chevron-down'></i></span>",
										},
										{
											tag: "li",
											content:
												"DevOps <span><i class='fa-solid fa-chevron-down'></i></span>",
										},
										{
											tag: "li",
											content:
												"Business and Leadership <span><i class='fa-solid fa-chevron-down'></i></span>",
										},
										{
											tag: "li",
											content:
												"Quality Management <span><i class='fa-solid fa-chevron-down'></i></span>",
										},
										{
											tag: "li",
											content:
												"Software Development <span><i class='fa-solid fa-chevron-down'></i></span>",
										},
										{
											tag: "li",
											content:
												"Agile and Scrum <span><i class='fa-solid fa-chevron-down'></i></span>",
										},
										{
											tag: "li",
											content:
												"IT Service and Architecture <span><i class='fa-solid fa-chevron-down'></i></span>",
										},
										{
											tag: "li",
											content:
												"Digital Marketing <span><i class='fa-solid fa-chevron-down'></i></span>",
										},
									],
								},
							],
						},
					],
				},
			],
		},
		{
			tag: "div",
			attributes: {
				class: "online-bootcamp-container",
			},
			children: [
				{
					tag: "section",
					attributes: {
						id: "online-bootcamp",
						class: "container is-fullhd",
					},
					children: [
						{
							tag: "div",
							attributes: {
								class: "heading-bootcamp",
							},
							children: [
								{
									tag: "p",
									content: "Our Online Bootcamp",
								},
								{
									tag: "h4",
									content: "An immersive learning experience",
								},
							],
						},
						{
							tag: "div",
							attributes: {
								class: "grid-bootcamp",
							},
							children: [
								{
									tag: "div",
									attributes: {
										class: "grid grid-1",
									},
									children: [
										{
											tag: "div",
											attributes: {
												class: "icon-holder",
											},
											children: [
												{
													tag: "span",
													children: [
														{
															tag: "img",
															attributes: {
																src: "./assets/boot-1.webp",
																alt: "",
															},
														},
													],
												},
											],
										},
										{
											tag: "div",
											attributes: {
												class: "bootcamp-features",
											},
											children: [
												{
													tag: "div",
													attributes: {
														class: "title",
													},
													children: [
														{
															tag: "p",
															content: "Develop skills for real career growth",
														},
													],
												},
												{
													tag: "div",
													attributes: {
														class: "desc",
													},
													children: [
														{
															tag: "p",
															content:
																"Cutting-edge curriculum designed in guidance with industry and academia to develop job-ready skills",
														},
													],
												},
											],
										},
									],
								},
								{
									tag: "div",
									attributes: {
										class: "grid grid-2",
									},
									children: [
										{
											tag: "div",
											attributes: {
												class: "icon-holder",
											},
											children: [
												{
													tag: "span",
													children: [
														{
															tag: "img",
															attributes: {
																src: "./assets/boot-2.webp",
																alt: "",
															},
														},
													],
												},
											],
										},
										{
											tag: "div",
											attributes: {
												class: "bootcamp-features",
											},
											children: [
												{
													tag: "div",
													attributes: {
														class: "title",
													},
													children: [
														{
															tag: "p",
															content: "Develop skills for real career growth",
														},
													],
												},
												{
													tag: "div",
													attributes: {
														class: "desc",
													},
													children: [
														{
															tag: "p",
															content:
																"Cutting-edge curriculum designed in guidance with industry and academia to develop job-ready skills",
														},
													],
												},
											],
										},
									],
								},
								{
									tag: "div",
									attributes: {
										class: "grid grid-3",
									},
									children: [
										{
											tag: "div",
											attributes: {
												class: "icon-holder",
											},
											children: [
												{
													tag: "span",
													children: [
														{
															tag: "img",
															attributes: {
																src: "./assets/boot-3.webp",
																alt: "",
															},
														},
													],
												},
											],
										},
										{
											tag: "div",
											attributes: {
												class: "bootcamp-features",
											},
											children: [
												{
													tag: "div",
													attributes: {
														class: "title",
													},
													children: [
														{
															tag: "p",
															content: "Develop skills for real career growth",
														},
													],
												},
												{
													tag: "div",
													attributes: {
														class: "desc",
													},
													children: [
														{
															tag: "p",
															content:
																"Cutting-edge curriculum designed in guidance with industry and academia to develop job-ready skills",
														},
													],
												},
											],
										},
									],
								},
								{
									tag: "div",
									attributes: {
										class: "grid grid-4",
									},
									children: [
										{
											tag: "div",
											attributes: {
												class: "icon-holder",
											},
											children: [
												{
													tag: "span",
													children: [
														{
															tag: "img",
															attributes: {
																src: "./assets/boot-4.webp",
																alt: "",
															},
														},
													],
												},
											],
										},
										{
											tag: "div",
											attributes: {
												class: "bootcamp-features",
											},
											children: [
												{
													tag: "div",
													attributes: {
														class: "title",
													},
													children: [
														{
															tag: "p",
															content: "Develop skills for real career growth",
														},
													],
												},
												{
													tag: "div",
													attributes: {
														class: "desc",
													},
													children: [
														{
															tag: "p",
															content:
																"Cutting-edge curriculum designed in guidance with industry and academia to develop job-ready skills",
														},
													],
												},
											],
										},
									],
								},
							],
						},
					],
				},
			],
		},
		{
			tag: "div",
			attributes: {
				class: "hear-it-container",
			},
			children: [
				{
					tag: "section",
					attributes: {
						id: "hear",
						class: "container is-fullhd",
					},
					children: [
						{
							tag: "div",
							attributes: {
								class: "hear-left",
							},
							children: [
								{
									tag: "div",
									attributes: {
										class: "hear-heading",
									},
									children: [
										{
											tag: "h4",
											content: "Hear it <br> from our Alumni",
										},
									],
								},
								{
									tag: "div",
									attributes: {
										class: "hear-content-cont",
									},
									children: [
										{
											tag: "div",
											attributes: {
												class: "hear-content",
											},
											children: [
												{
													tag: "div",
													attributes: {
														class: "stars",
													},
													children: [
														{
															tag: "strong",
															content: "4.5 ",
														},
														{
															tag: "span",
															children: [
																{
																	tag: "i",
																	attributes: {
																		class: "fa-solid fa-star",
																	},
																},
															],
														},
													],
												},
												{
													tag: "div",
													attributes: {
														class: "hear-logo",
													},
													children: [
														{
															tag: "img",
															attributes: {
																src: "./assets/hear-1.avif",
																alt: "",
															},
														},
													],
												},
											],
										},
										{
											tag: "div",
											attributes: {
												class: "hear-content",
											},
											children: [
												{
													tag: "div",
													attributes: {
														class: "stars",
													},
													children: [
														{
															tag: "strong",
															content: "4.5 ",
														},
														{
															tag: "span",
															children: [
																{
																	tag: "i",
																	attributes: {
																		class: "fa-solid fa-star",
																	},
																},
															],
														},
													],
												},
												{
													tag: "div",
													attributes: {
														class: "hear-logo",
													},
													children: [
														{
															tag: "img",
															attributes: {
																src: "./assets/hear-2.avif",
																alt: "",
															},
														},
													],
												},
											],
										},
										{
											tag: "div",
											attributes: {
												class: "hear-content",
											},
											children: [
												{
													tag: "div",
													attributes: {
														class: "stars",
													},
													children: [
														{
															tag: "strong",
															content: "4.4 ",
														},
														{
															tag: "span",
															children: [
																{
																	tag: "i",
																	attributes: {
																		class: "fa-solid fa-star",
																	},
																},
															],
														},
													],
												},
												{
													tag: "div",
													attributes: {
														class: "hear-logo",
													},
													children: [
														{
															tag: "img",
															attributes: {
																src: "./assets/hear-3.avif",
																alt: "",
															},
														},
													],
												},
											],
										},
									],
								},
							],
						},
						{
							tag: "div",
							attributes: {
								class: "hear-right",
							},
							children: [
								{
									tag: "div",
									attributes: {
										class: "img-container",
									},
									children: [
										{
											tag: "img",
											attributes: {
												src: "./assets/hear-it.avif",
												alt: "",
											},
										},
										{
											tag: "div",
											attributes: {
												class: "play-right",
											},
											children: [
												{
													tag: "span",
													children: [
														{
															tag: "i",
															attributes: {
																class: "fa-solid fa-play",
															},
														},
													],
												},
											],
										},
									],
								},
							],
						},
					],
				},
			],
		},
		{
			tag: "div",
			attributes: {
				class: "testimonials-cont",
			},
			children: [
				{
					tag: "div",
					attributes: {
						class: "testimonials-container",
					},
					children: [
						{
							tag: "section",
							attributes: {
								id: "testimonials",
								class: "container is-fullhd",
							},
							children: [
								{
									tag: "article",
									attributes: {
										class: "testimonial testimonial-1",
									},
									children: [
										{
											tag: "div",
											attributes: {
												class: "profile-info",
											},
											children: [
												{
													tag: "div",
													attributes: {
														class: "img-container",
													},
													children: [
														{
															tag: "img",
															attributes: {
																src: "./assets/profile-1.avif",
																alt: "Profile 1 image",
															},
														},
													],
												},
												{
													tag: "div",
													attributes: {
														class: "info",
													},
													children: [
														{
															tag: "p",
															attributes: {
																class: "name",
															},
															content: "Sameer Marathe",
														},
														{
															tag: "p",
															content: "Project Manager, ",
															children: [
																{
																	tag: "strong",
																	content: "Atos",
																},
															],
														},
													],
												},
											],
										},
										{
											tag: "div",
											attributes: {
												class: "testi",
											},
											children: [
												{
													tag: "p",
													content:
														"The certification took me from a Project Manager to a Senior Position with a good hike. All credit to the informative and easy-to-understand online study material!",
												},
											],
										},
									],
								},
								{
									tag: "article",
									attributes: {
										class: "testimonial testimonial-2",
									},
									children: [
										{
											tag: "div",
											attributes: {
												class: "profile-info",
											},
											children: [
												{
													tag: "div",
													attributes: {
														class: "img-container",
													},
													children: [
														{
															tag: "img",
															attributes: {
																src: "./assets/profile-2.avif",
																alt: "Profile 2",
															},
														},
													],
												},
												{
													tag: "div",
													attributes: {
														class: "info",
													},
													children: [
														{
															tag: "p",
															attributes: {
																class: "name",
															},
															content: "Rajendra Prabhu Sivasamy",
														},
														{
															tag: "p",
															content: "Principal Software Engineer, ",
															children: [
																{
																	tag: "strong",
																	content: "TESCO",
																},
															],
														},
													],
												},
											],
										},
										{
											tag: "div",
											attributes: {
												class: "testi",
											},
											children: [
												{
													tag: "p",
													content:
														"Simplilearn's Certified Scrum Master course helped me rise in my career from Principle Software Engineer to Senior Manager. Thank you.",
												},
											],
										},
									],
								},
							],
						},
					],
				},
			],
		},
		{
			tag: "div",
			attributes: {
				class: "employee-container",
			},
			children: [
				{
					tag: "section",
					attributes: {
						id: "employee",
						class: "container is-fullhd",
					},
					children: [
						{
							tag: "div",
							attributes: {
								class: "grid-employee",
							},
							children: [
								{
									tag: "div",
									attributes: {
										class: "employee-left",
									},
									children: [
										{
											tag: "h4",
											content: "Employee and Team <br/> Training Solutions",
										},
										{
											tag: "p",
											content:
												"Curriculum tailored to your organization, delivered <br/> with white-glove service and support",
										},
										{
											tag: "button",
											attributes: {
												class: "primary-btn",
											},
											content: "Request A Free Demo",
										},
									],
								},
								{
									tag: "div",
									attributes: {
										class: "employee-right",
									},
									children: [
										{
											tag: "p",
											content: "Supporting Enterprises Around the Globe",
										},
										{
											tag: "div",
											attributes: {
												class: "right-grid",
											},
											children: [
												{
													tag: "div",
													attributes: {
														class: "grid grid-1",
													},
													children: [
														{
															tag: "img",
															attributes: {
																src: "./assets/employee&team_1.avif",
																alt: "",
															},
														},
													],
												},
												{
													tag: "div",
													attributes: {
														class: "grid grid-1",
													},
													children: [
														{
															tag: "img",
															attributes: {
																src: "./assets/employee&team_2.avif",
																alt: "",
															},
														},
													],
												},
												{
													tag: "div",
													attributes: {
														class: "grid grid-1",
													},
													children: [
														{
															tag: "img",
															attributes: {
																src: "./assets/employee&team_3.avif",
																alt: "",
															},
														},
													],
												},
												{
													tag: "div",
													attributes: {
														class: "grid grid-1",
													},
													children: [
														{
															tag: "img",
															attributes: {
																src: "./assets/employee&team_4.avif",
																alt: "",
															},
														},
													],
												},
												{
													tag: "div",
													attributes: {
														class: "grid grid-1",
													},
													children: [
														{
															tag: "img",
															attributes: {
																src: "./assets/employee&team_5.avif",
																alt: "",
															},
														},
													],
												},
												{
													tag: "div",
													attributes: {
														class: "grid grid-1",
													},
													children: [
														{
															tag: "img",
															attributes: {
																src: "./assets/employee&team_6.avif",
																alt: "",
															},
														},
													],
												},
												{
													tag: "div",
													attributes: {
														class: "grid grid-1",
													},
													children: [
														{
															tag: "img",
															attributes: {
																src: "./assets/employee&team_7.avif",
																alt: "",
															},
														},
													],
												},
												{
													tag: "div",
													attributes: {
														class: "grid grid-1",
													},
													children: [
														{
															tag: "img",
															attributes: {
																src: "./assets/employee&team_8.avif",
																alt: "",
															},
														},
													],
												},
												{
													tag: "div",
													attributes: {
														class: "grid grid-1",
													},
													children: [
														{
															tag: "img",
															attributes: {
																src: "./assets/employee&team_9.avif",
																alt: "",
															},
														},
													],
												},
											],
										},
									],
								},
							],
						},
					],
				},
			],
		},
		{
			tag: "div",
			attributes: {
				class: "awards-container",
			},
			children: [
				{
					tag: "section",
					attributes: {
						id: "awards",
						class: "container is-fullhd",
					},
					children: [
						{
							tag: "div",
							attributes: {
								class: "awards-title",
							},
							children: [
								{
									tag: "h5",
									content: "Awards and Accolades",
								},
							],
						},
						{
							tag: "div",
							attributes: {
								class: "grid-awards",
							},
							children: [
								{
									tag: "div",
									attributes: {
										class: "grid grid-1",
									},
									children: [
										{
											tag: "div",
											attributes: {
												class: "award-img",
											},
											children: [
												{
													tag: "img",
													attributes: {
														src: "./assets/award-1.avif",
														alt: "",
													},
												},
											],
										},
										{
											tag: "p",
											attributes: {
												class: "winner",
											},
											children: [
												{
													tag: "strong",
													content: "2023 Winner",
												},
											],
										},
										{
											tag: "p",
											content: "For IT & Technical Training",
										},
									],
								},
								{
									tag: "div",
									attributes: {
										class: "grid grid-2",
									},
									children: [
										{
											tag: "div",
											attributes: {
												class: "award-img",
											},
											children: [
												{
													tag: "img",
													attributes: {
														src: "./assets/award-2.avif",
														alt: "",
													},
												},
											],
										},
										{
											tag: "p",
											attributes: {
												class: "winner",
											},
											children: [
												{
													tag: "strong",
													content: "2022 Gold Winner",
												},
											],
										},
										{
											tag: "p",
											content: "For IT & Technical Training",
										},
									],
								},
								{
									tag: "div",
									attributes: {
										class: "grid grid-3",
									},
									children: [
										{
											tag: "div",
											attributes: {
												class: "award-img",
											},
											children: [
												{
													tag: "img",
													attributes: {
														src: "./assets/award-3.avif",
														alt: "",
													},
												},
											],
										},
										{
											tag: "p",
											attributes: {
												class: "winner",
											},
											children: [
												{
													tag: "strong",
													content: "2021 Silver Winner",
												},
											],
										},
										{
											tag: "p",
											content: "For Customer Service",
										},
									],
								},
								{
									tag: "div",
									attributes: {
										class: "grid grid-4",
									},
									children: [
										{
											tag: "div",
											attributes: {
												class: "award-img",
											},
											children: [
												{
													tag: "img",
													attributes: {
														src: "./assets/award-4.avif",
														alt: "",
													},
												},
											],
										},
										{
											tag: "p",
											attributes: {
												class: "winner",
											},
											children: [
												{
													tag: "strong",
													content: "2023 Winner",
												},
											],
										},
										{
											tag: "p",
											content: "For Learning Delivery",
										},
									],
								},
								{
									tag: "div",
									attributes: {
										class: "grid grid-1",
									},
									children: [
										{
											tag: "div",
											attributes: {
												class: "award-img",
											},
											children: [
												{
													tag: "img",
													attributes: {
														src: "./assets/award-5.avif",
														alt: "",
													},
												},
											],
										},
										{
											tag: "p",
											attributes: {
												class: "winner",
											},
											children: [
												{
													tag: "strong",
													content: "2023 Winner",
												},
											],
										},
										{
											tag: "p",
											content: "For Customer Service",
										},
									],
								},
							],
						},
					],
				},
			],
		},
		{
			tag: "div",
			attributes: {
				class: "learn-free-cont",
			},
			children: [
				{
					tag: "div",
					attributes: {
						class: "learn-free-container container is-fullhd",
					},
					children: [
						{
							tag: "section",
							attributes: {
								id: "learn-free",
								class: "",
							},
							children: [
								{
									tag: "div",
									attributes: {
										class: "learn-right",
									},
									children: [
										{
											tag: "div",
											attributes: {
												class: "learn-free-heading",
											},
											children: [
												{
													tag: "h4",
													content: "Learn free on the App",
												},
												{
													tag: "p",
													content:
														"Download the lessons and learn anytime, anywhere from the free courses available on our app",
												},
											],
										},
										{
											tag: "img",
											attributes: {
												src: "./assets/free-app.avif",
												alt: "",
											},
										},
									],
								},
								{
									tag: "div",
									attributes: {
										class: "learn-left",
									},
									children: [
										{
											tag: "p",
											content:
												"Scan this QR code on your camera <br/> app to download the app",
										},
										{
											tag: "img",
											attributes: {
												src: "./assets/qr-code.avif",
												alt: "QR Code",
											},
										},
										{
											tag: "div",
											attributes: {
												class: "app",
											},
											children: [
												{
													tag: "div",
													attributes: {
														class: "google-play",
													},
													children: [
														{
															tag: "img",
															attributes: {
																src: "./assets/google-play.png",
																alt: "Google playstore",
															},
														},
													],
												},
												{
													tag: "div",
													attributes: {
														class: "app-store",
													},
													children: [
														{
															tag: "img",
															attributes: {
																src: "./assets/apple-store.png",
																alt: "Apple store",
															},
														},
													],
												},
											],
										},
									],
								},
							],
						},
					],
				},
			],
		},
		{
			tag: "div",
			attributes: {
				class: "footer-cont",
			},
			children: [
				{
					tag: "div",
					attributes: {
						class: "footer-container container is-fullhd",
					},
					children: [
						{
							tag: "footer",
							attributes: {
								id: "footer",
							},
							children: [
								{
									tag: "div",
									attributes: {
										class: "grid-footer",
									},
									children: [
										{
											tag: "div",
											attributes: {
												class: "grid-foot grid-foot-1",
											},
											children: [
												{
													tag: "h5",
													attributes: {
														class: "follow-us",
													},
													content: "Follow us!",
												},
												{
													tag: "p",
													attributes: {
														class: "refer",
													},
													content: "Refer and Earn",
												},
												{
													tag: "div",
													attributes: {
														class: "s-medias",
													},
													children: [
														{
															tag: "div",
															attributes: {
																class: "s-media-1",
															},
															children: [
																{
																	tag: "span",
																	children: [
																		{
																			tag: "i",
																			attributes: {
																				class: "fa-brands fa-facebook",
																			},
																		},
																	],
																},
																{
																	tag: "span",
																	children: [
																		{
																			tag: "i",
																			attributes: {
																				class: "fa-brands fa-square-twitter",
																			},
																		},
																	],
																},
																{
																	tag: "span",
																	children: [
																		{
																			tag: "i",
																			attributes: {
																				class: "fa-brands fa-youtube",
																			},
																		},
																	],
																},
															],
														},
														{
															tag: "div",
															attributes: {
																class: "s-media-2",
															},
															children: [
																{
																	tag: "span",
																	children: [
																		{
																			tag: "i",
																			attributes: {
																				class: "fa-brands fa-linkedin",
																			},
																		},
																	],
																},
																{
																	tag: "span",
																	children: [
																		{
																			tag: "i",
																			attributes: {
																				class: "fa-brands fa-telegram",
																			},
																		},
																	],
																},
																{
																	tag: "span",
																	children: [
																		{
																			tag: "i",
																			attributes: {
																				class: "fa-brands fa-square-instagram",
																			},
																		},
																	],
																},
															],
														},
													],
												},
											],
										},
										{
											tag: "div",
											attributes: {
												class: "grid-foot grid-foot-2",
											},
											children: [
												{
													tag: "ul",
													children: [
														{
															tag: "li",
															attributes: {
																class: "title",
															},
															content: "Company",
														},
														{
															tag: "li",
															content: "About us",
														},
														{
															tag: "li",
															content: "Careers",
														},
														{
															tag: "li",
															content: "Newsroom",
														},
														{
															tag: "li",
															content: "Alumni speak",
														},
														{
															tag: "li",
															content: "Grievance redressal",
														},
														{
															tag: "li",
															content: "Contact us",
														},
													],
												},
											],
										},
										{
											tag: "div",
											attributes: {
												class: "grid-foot grid-foot-3",
											},
											children: [
												{
													tag: "ul",
													children: [
														{
															tag: "li",
															attributes: {
																class: "title",
															},
															content: "Work with us",
														},
														{
															tag: "li",
															content: "Become an instructor",
														},
														{
															tag: "li",
															content: "Become a guest",
														},
													],
												},
											],
										},
										{
											tag: "div",
											attributes: {
												class: "grid-foot grid-foot-4",
											},
											children: [
												{
													tag: "ul",
													children: [
														{
															tag: "li",
															attributes: {
																class: "title",
															},
															content: "Discover",
														},
														{
															tag: "li",
															content: "Skillup",
														},
														{
															tag: "li",
															content: "Skillup Sitemap",
														},
														{
															tag: "li",
															content: "Resources",
														},
														{
															tag: "li",
															content: "RSS feed",
														},
														{
															tag: "li",
															content: "City Sitemap",
														},
													],
												},
											],
										},
										{
											tag: "div",
											attributes: {
												class: "grid-foot grid-foot-5",
											},
											children: [
												{
													tag: "ul",
													children: [
														{
															tag: "li",
															attributes: {
																class: "title",
															},
															content: "For Business",
														},
														{
															tag: "li",
															content: "Corporate Training",
														},
														{
															tag: "li",
															content: "Partners",
														},
														{
															tag: "li",
															content: "Digital Transformation",
														},
													],
												},
											],
										},
										{
											tag: "div",
											attributes: {
												class: "grid-foot grid-foot-6",
											},
											children: [
												{
													tag: "ul",
													children: [
														{
															tag: "li",
															attributes: {
																class: "title",
															},
															content: "Learn On the Go!",
														},
														{
															tag: "li",
															content:
																"<span><i class='fa-brands fa-android'></i></span> Get the Android App",
														},
														{
															tag: "li",
															content:
																"<span><i class='fa-brands fa-apple'></i></span> Get the iOS App",
														},
													],
												},
											],
										},
									],
								},
								{
									tag: "div",
									attributes: {
										class: "trending trending-post",
									},
									children: [
										{
											tag: "p",
											attributes: {
												class: "title",
											},
											content: "Trending Post Graduate Programs",
										},
										{
											tag: "p",
											content:
												"Artificial Intelligence Course | Cloud Computing Certification Course | Full Stack Web Development Course | PG in Data Science | Product Management Certification Course | Blockchain Course | Machine Learning Course | Cyber Security Course in India | Project Management Certification Course | Lean Six Sigma Certification Course | Data Analytics Program | AI and ML Course | Business Analysis Certification Course | Data Engineering Certification Courses | Digital Marketing Certification Program",
										},
									],
								},
								{
									tag: "div",
									attributes: {
										class: "trending trending-master",
									},
									children: [
										{
											tag: "p",
											attributes: {
												class: "title",
											},
											content: "Trending Master Programs",
										},
										{
											tag: "p",
											content:
												"PMP Plus Certification Training Course | Data Science Certification Course | Data Analyst Course | Masters in Artificial Intelligence | Cloud Architect Certification Training Course | DevOps Engineer Certification Training Course | Digital Marketing Course | Cyber Security Expert Course | Business Analyst Course",
										},
									],
								},
								{
									tag: "div",
									attributes: {
										class: "trending trending-categories",
									},
									children: [
										{
											tag: "p",
											attributes: {
												class: "title",
											},
											content: "Trending Categories",
										},
										{
											tag: "p",
											content:
												"Project Management Courses | AWS Courses | IT Service and Architecture | Digital Marketing | Cyber Security Certification Courses | DevOps | AI & Machine Learning | Big Data | Business and Leadership | Software Engineering Certifications | Job Oriented Courses | MBA Courses | Technical Courses | Computer Courses | Web Development Courses | Online Certifications | Software Engineering Bootcamps | Generative AI Courses | Quality Management Courses | Agile Certifications | Cloud Computing Courses",
										},
									],
								},
								{
									tag: "div",
									attributes: {
										class: "trending trending-resources",
									},
									children: [
										{
											tag: "p",
											attributes: {
												class: "title",
											},
											content: "Trending Resources",
										},
										{
											tag: "p",
											content:
												"Python Tutorial | JavaScript Tutorial | Java Tutorial | Angular Tutorial | Node.js Tutorial | Docker Tutorial | Git Tutorial | Kubernetes Tutorial | Power BI Tutorial | CSS Tutorial",
										},
									],
								},
							],
						},
					],
				},
			],
		},
	],
};

let temp = TemplateEngine.populate(docPageTemplate, docpageData);
console.log(temp);

let html = JsonToHtml.convert(temp);
console.log(html);
document.getElementById("app").innerHTML = html;

////////////////////////////////////////////////////////////////////////

// const inputContainer = document.querySelector(
//   "#nav .nav-container .middle-nav .input-container"
// );
// const inputEl = document.querySelector(
//   "#nav .nav-container .middle-nav .input-container input"
// );
// const modal = document.querySelector(".modal");
// const overlay = document.querySelector(".overlay");

// inputContainer.addEventListener("click", () => {
//   modal.classList.add("active");
//   overlay.classList.add("active");
//   inputEl.blur();
// });

// document.addEventListener(
//   "click",
//   (e) => {
//     if (e.target.matches(".modal")) return;
//   },
//   { once: true }
// );

// overlay.addEventListener("click", (e) => {
//   modal.classList.remove("active");
//   overlay.classList.remove("active");
// });

// // Active toggle
// const firstToggleBtnEls = document.querySelectorAll(
//   ".toggle-btn-container .first-toggle .toggle-first"
// );
// const firstToggleContasiner = document.querySelector(
//   ".toggle-btn-container .first-toggle"
// );

// const secondToggleBtnEls = document.querySelectorAll(
//   ".toggle-btn-container .second-toggle .toggle-first"
// );
// const secondToggleContasiner = document.querySelector(
//   ".toggle-btn-container .second-toggle"
// );

// firstToggleBtnEls.forEach((firstToggleBtnEl) => {
//   firstToggleBtnEl.addEventListener("click", () => {
//     document
//       .querySelector(".toggle-btn-container .first-toggle .toggle-first.active")
//       ?.classList.remove("active");
//     firstToggleBtnEl.classList.add("active");
//   });
// });

// secondToggleBtnEls.forEach((secondToggleBtnEl) => {
//   secondToggleBtnEl.addEventListener("click", () => {
//     document
//       .querySelector(
//         ".toggle-btn-container .second-toggle .toggle-first.active"
//       )
//       ?.classList.remove("active");
//     secondToggleBtnEl.classList.add("active");
//   });
// });

// // Dropdown popup
// const dropdownBtn = document.querySelector(".dropdown-attribute");
// const dropdownContainer = document.querySelector(".toggle-dropdown-container");

// dropdownBtn.addEventListener("click", (e) => {
//   dropdownContainer.classList.toggle("active");
// });

// const dropDown1 = document.querySelector(".dropd-1");
// const dropDown2 = document.querySelector(".dropd-2");
// const darkModeDropDown = document.querySelector(".darkmode-droppdown-popup");
// const versionModeDropDown = document.querySelector(".version-droppdown-popup");

// dropDown1.addEventListener("click", () => {
//   versionModeDropDown.classList.toggle("active");
// });

// dropDown2.addEventListener("click", () => {
//   darkModeDropDown.classList.toggle("active");
// });
