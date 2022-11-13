<template>
	<aside :class="`${is_expanded ? 'is-expanded' : ''}`">
		<div class="logo">
			<img src="../../public/images/Vector-logo.png?t=3" alt="Vue" /> 
		</div>

		<div class="menu-toggle-wrap">
			<button class="menu-toggle" @click="ToggleMenu">
				<span class="material-icons">keyboard_double_arrow_right</span>
			</button>
		</div>

		<h3>Menu</h3>
		<div class="menu">
			<router-link to="/user" class="button">
				<span class="material-icons">home</span>
				<span class="text">Home</span>
			</router-link>
			<router-link to="/about" class="button">
				<span class="material-icons">description</span>
				<span class="text">About</span>
			</router-link>
			<router-link to="/team" class="button">
				<span class="material-icons">group</span>
				<span class="text">Team</span>
			</router-link>
			<router-link to="/contact" class="button">
				<span class="material-icons">email</span>
				<span class="text">Contact</span>
			</router-link>
		</div>

		<div class="flex"></div>
		
		<div class="menu">
			<router-link to="/settings" class="button">
				<span class="material-icons">settings</span>
				<span class="text">Settings</span>
			</router-link>
		</div>
	</aside>
</template>

<script setup>
import { ref } from 'vue'

const is_expanded = ref(localStorage.getItem("is_expanded") === "true")
const ToggleMenu = () => {
	is_expanded.value = !is_expanded.value
	localStorage.setItem("is_expanded", is_expanded.value)
}
</script>

<style lang="scss" scoped>
aside {
	display: flex;
	flex-direction: column;
	background-color: #000000;
	color: #ffffff;
	width: calc(2rem + 32px);
	overflow: hidden;
	min-height: 100vh;
	padding: 1rem;
	transition: 0.2s ease-in-out;
	.flex {
		flex: 1 1 0%;
	}
	.logo {
		margin-bottom: 1rem;
		img {
			width: 2rem;
		}
	}
	.menu-toggle-wrap {
		display: flex;
		justify-content: flex-end;
		margin-bottom: 1rem;
		position: relative;
		top: 0;
		transition: 0.2s ease-in-out;
        outline:none;
		.menu-toggle {
			transition: 0.2s ease-in-out;
            border: none;
            background-color: #000000;
            cursor: pointer;
            outline: none;
			.material-icons {
				font-size: 2rem;
				color: #ffffff;
				transition: 0.2s ease-out;
                border: none;
                background-color: #000000;
                outline: none;
			}
			
			&:hover {
				.material-icons {
					color: #C8EE44;
					transform: translateX(0.5rem);
                    outline: none;
				}
			}
            
		}
        .menu-toggle:focus-visible {
            border: none;
            outline:none;
        }

	}
    .menu-toggle-wrap:focus-visible {
        border: none;
    }

	h3, .button .text {
		opacity: 0;
		transition: opacity 0.3s ease-in-out;
        font-family: Open Sans;
	}
	h3 {
		color: #f1f5f9;
		font-size: 0.875rem;
		margin-bottom: 0.5rem;
		text-transform: uppercase;
	}
	.menu {
		margin: 0 -1rem;
        font-family: Open Sans;
		.button {
			display: flex;
			align-items: center;
			text-decoration: none;
			transition: 0.2s ease-in-out;
			padding: 0.5rem 1rem;
			.material-icons {
				font-size: 2rem;
				color: #f1f5f9;
				transition: 0.2s ease-in-out;
			}
			.text {
				color: #f1f5f9;
				transition: 0.2s ease-in-out;
			}
			&:hover {
				background-color: #c8ee4414;
				.material-icons, .text {
					color: #C8EE44;
				}
			}
			&.router-link-exact-active {
				background-color: #c8ee4414;
				border-right: 5px solid #C8EE44;
				.material-icons, .text {
					color: #C8EE44;
				}
			}
		}
	}
	.footer {
		opacity: 0;
		transition: opacity 0.3s ease-in-out;
		p {
			font-size: 0.875rem;
			color: #64748b;
		}
	}
	&.is-expanded {
		width: 300px;
		.menu-toggle-wrap {
			top: -3rem;
			
			.menu-toggle {
				transform: rotate(-180deg);
			}
		}
		h3, .button .text {
			opacity: 1;
		}
		.button {
			.material-icons {
				margin-right: 1rem;
			}
		}
		.footer {
			opacity: 0;
		}
	}
	@media (max-width: 1024px) {
		position: absolute;
		z-index: 99;
	}
}
</style>