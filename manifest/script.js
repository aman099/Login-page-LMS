import { TemplateEngine } from "./templateEngine.js";
import { JsonToHtml } from "./jsonToHtml.js";

let docpageData = {};

const docPageTemplate = {
	tag: "div",
	children: [
		{
			tag: "main",
			attributes: {
				id: "main",
			},
			children: [
				{
					tag: "div",
					attributes: {
						class: "main-container container is-fullhd",
					},
					children: [
						{
							tag: "div",
							attributes: {
								class: "main-left",
							},
							children: [
								{
									tag: "div",
									attributes: {
										class: "main-left-cont",
									},
									children: [
										{
											tag: "div",
											attributes: {
												class: "title-left",
											},
											children: [
												{
													tag: "img",
													attributes: {
														src: "./assets/simplilearn-logo.png",
														alt: "",
													},
												},
											],
										},
										{
											tag: "form",
											children: [
												{
													tag: "h2",
													content: "Welcome back!",
												},
												{
													tag: "p",
													content: "Log in to continue learning",
												},
												{
													tag: "div",
													children: [
														{
															tag: "input",
															attributes: {
																type: "text",
																id: "username",
																name: "username",
																placeholder: "Email Address*",
															},
														},
													],
												},
												{
													tag: "div",
													children: [
														{
															tag: "input",
															attributes: {
																type: "password",
																id: "password",
																name: "password",
																placeholder: "Password*",
															},
														},
													],
												},
												{
													tag: "div",
													attributes: {
														class: "fg-container",
													},
													children: [
														{
															tag: "div",
															attributes: {
																class: "input-cont",
															},
															children: [
																{
																	tag: "input",
																	attributes: {
																		type: "checkbox",
																		id: "remember-me",
																	},
																},
																{
																	tag: "label",
																	attributes: {
																		for: "remember-me",
																	},
																	content: "Remember me",
																},
															],
														},
														{
															tag: "div",
															children: [
																{
																	tag: "a",
																	attributes: {
																		href: "#",
																	},
																	content: "Forgot password?",
																},
															],
														},
													],
												},
												{
													tag: "div",
													attributes: {
														class: "login-cont",
													},
													children: [
														{
															tag: "button",
															attributes: {
																class: "primary-btn",
															},
															content: "Login",
														},
													],
												},
												{
													tag: "div",
													attributes: {
														class: "or-login-with",
													},
													children: [
														{
															tag: "p",
															content: "or login with",
														},
													],
												},
												{
													tag: "div",
													attributes: {
														class: "alternate-login-cont",
													},
													children: [
														{
															tag: "span",
															attributes: {
																class: "parent-span",
															},
															children: [
																{
																	tag: "i",
																	attributes: {
																		class: "fa-brands fa-google",
																	},
																},
																{
																	tag: "span",
																	attributes: {
																		class: "hidden",
																	},
																	content: "Google",
																},
															],
														},
														{
															tag: "span",
															attributes: {
																class: "parent-span",
															},
															children: [
																{
																	tag: "i",
																	attributes: {
																		class: "fa-brands fa-facebook-f",
																	},
																},
																{
																	tag: "span",
																	attributes: {
																		class: "hidden",
																	},
																	content: "Facebook",
																},
															],
														},
														{
															tag: "span",
															attributes: {
																class: "parent-span",
															},
															children: [
																{
																	tag: "i",
																	attributes: {
																		class: "fa-brands fa-linkedin-in",
																	},
																},
																{
																	tag: "span",
																	attributes: {
																		class: "hidden",
																	},
																	content: "LinkedIn",
																},
															],
														},
														{
															tag: "span",
															attributes: {
																class: "parent-span",
															},
															children: [
																{
																	tag: "i",
																	attributes: {
																		class: "fa-brands fa-apple",
																	},
																},
																{
																	tag: "span",
																	attributes: {
																		class: "hidden",
																	},
																	content: "Apple",
																},
															],
														},
													],
												},
												{
													tag: "div",
													attributes: {
														class: "dont-have-acc-cont",
													},
													children: [
														{
															tag: "p",
															content: "Don't have an account? ",
															children: [
																{
																	tag: "a",
																	attributes: {
																		href: "https://signup-lms.netlify.app/",
																	},
																	content: "Sign Up",
																},
															],
														},
													],
												},
												{
													tag: "div",
													attributes: {
														class: "privacy-policy",
													},
													children: [
														{
															tag: "p",
															content: "© 2009-2024 - Simplilearn Solutions. ",
															children: [
																{
																	tag: "span",
																	content: "All Rights Reserved.",
																},
																{
																	tag: "a",
																	attributes: {
																		href: "#",
																	},
																	content: "| Privacy Policy",
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
								class: "main-right",
							},
							children: [
								{
									tag: "div",
									attributes: {
										class: "main-right-cont",
									},
									children: [
										{
											tag: "div",
											attributes: {
												class: "text-container",
											},
											children: [
												{
													tag: "div",
													attributes: {
														class: "text-title",
													},
													children: [
														{
															tag: "h2",
															content: "World's #1 online bootcamp",
														},
														{
															tag: "h5",
															content: "Get started with your immersive learning experience",
														},
													],
												},
												{
													tag: "div",
													attributes: {
														class: "text-desc",
													},
													children: [
														{
															tag: "p",
															content: "<strong>2M</strong> careers advanced",
														},
														{
															tag: "p",
															content: "<strong>1500</strong> live classes every month",
														},
														{
															tag: "p",
															content: "<strong>85%</strong> reported promotion or a new job",
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
