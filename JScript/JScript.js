// JavaScript Document
//Empezamos dejando que el DOM inicie para correr el programa atraves de la libreria JQuery


$(document).ready(function () {

	var pinterest="<img class='pinterest red_social' alt='Compartir En Pinterest' title='Compartir Con Pinterest'  src='data:image/svg+xml;utf8;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iaXNvLTg4NTktMSI/Pgo8IS0tIEdlbmVyYXRvcjogQWRvYmUgSWxsdXN0cmF0b3IgMTguMC4wLCBTVkcgRXhwb3J0IFBsdWctSW4gLiBTVkcgVmVyc2lvbjogNi4wMCBCdWlsZCAwKSAgLS0+CjwhRE9DVFlQRSBzdmcgUFVCTElDICItLy9XM0MvL0RURCBTVkcgMS4xLy9FTiIgImh0dHA6Ly93d3cudzMub3JnL0dyYXBoaWNzL1NWRy8xLjEvRFREL3N2ZzExLmR0ZCI+CjxzdmcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgdmVyc2lvbj0iMS4xIiBpZD0iQ2FwYV8xIiB4PSIwcHgiIHk9IjBweCIgdmlld0JveD0iMCAwIDQ1NS43MzEgNDU1LjczMSIgc3R5bGU9ImVuYWJsZS1iYWNrZ3JvdW5kOm5ldyAwIDAgNDU1LjczMSA0NTUuNzMxOyIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSIgd2lkdGg9IjUxMnB4IiBoZWlnaHQ9IjUxMnB4Ij4KPGc+Cgk8cmVjdCB4PSIwIiB5PSIwIiBzdHlsZT0iZmlsbDojQzkzNTNEOyIgd2lkdGg9IjQ1NS43MzEiIGhlaWdodD0iNDU1LjczMSIvPgoJPHBhdGggc3R5bGU9ImZpbGw6I0ZGRkZGRjsiIGQ9Ik0xNjAuNjAxLDM4MkM4Ni4yMjMsMzUwLjkxOSwzNy44MDcsMjYyLjM0Myw2OC41OTgsMTcyLjM4MiAgIEM5OS4wNTcsODMuMzkxLDE5Ny41ODksMzYuNzg4LDI4Ni4zMDksNjkuNzM0Yzg4Ljk3MiwzMy4wNCwxMzIuOTc4LDEzMS4yMTMsOTguNDg2LDIxOS4yMiAgIGMtMzUuNzA5LDkxLjExMi0xMzEuNDQyLDEyMy4zNDgtMjAzLjIyLDEwMC42MTdjNS4zNjYtMTMuMjUzLDExLjQ3Mi0yNi4zMywxNS45NDUtMzkuOTQzYzQuNDkyLTEzLjY3Miw3LjM1Ni0yNy44NzgsMTAuNzI1LTQxLjAzNyAgIGMyLjksMi40NCw1LjgxNCw1LjAyNyw4Ljg2Niw3LjQzOWMxNS44NjEsMTIuNTM1LDMzLjgwNSwxMy43NTIsNTIuNjA1LDkuMjMyYzE5Ljk3Ny00LjgwMywzNS43NjQtMTYuMTMsNDcuNDU1LTMyLjc4ICAgYzE5Ljc3My0yOC4xNiwyNi43NTEtNjAuMDE5LDIxLjk3Mi05My41NDZjLTQuOTQyLTM0LjY2OC0yNS40NjktNTkuNzU2LTU3LjY1LTcyLjM4OWMtNDguNDg3LTE5LjAzNC05NC40NTMtMTIuNjI2LTEzNC4yNjksMjIuMjU5ICAgYy0zMC42MjIsMjYuODMtNDAuOTE2LDcyLjMxNC0yNi4xODcsMTA3LjcyNGM1LjEwNSwxMi4yNzQsMTMuMTczLDIxLjkwNywyNS4zNzksMjcuNjk1YzYuMTg2LDIuOTMzLDguODEyLDEuNzM3LDEwLjYwMi00LjcyNCAgIGMwLjEzMy0wLjQ4MSwwLjI5NS0wLjk1NSwwLjQ3MS0xLjQyMmMzLjQyOC05LjA0LDIuNjI4LTE2LjQ3Mi0zLjQ3My0yNS4xOTljLTExLjExOC0xNS45MDYtOS4xMzUtMzQuMzE5LTMuNzcxLTUxLjk2MSAgIGMxMC4xNzItMzMuNDU1LDQwLjA2Mi01NS43NzcsNzUuMTE2LTU2LjEwMWM5LjM5LTAuMDg3LDE5LjA1NiwwLjcxOCwyOC4xNSwyLjkzN2MyNy4wNDksNi41OTksNDQuNTE0LDI3LjUxOCw0Ni4yNjQsNTUuMjUzICAgYzEuNDA0LDIyLjI0Mi0yLjA3Miw0My44NDktMTEuNzQyLDY0LjE1OWMtNC43ODgsMTAuMDU1LTExLjEwNywxOC45OTYtMjAuNTEyLDI1LjMyNWMtOC44MzUsNS45NDUtMTguNDk2LDguMzQxLTI4Ljk3OSw1LjYwMiAgIGMtMTQuNDQzLTMuNzc0LTIyLjY0Mi0xNi45NS0xOC45ODktMzEuNDA3YzMuNzg2LTE0Ljk4NSw4LjY4NS0yOS42OSwxMi4zOTktNDQuNjljMS41Ny02LjM0NCwyLjM5NS0xMy4yMzQsMS43NTEtMTkuNjk2ICAgYy0xLjc1Ny0xNy42MDEtMTguMzg3LTI1LjgwOS0zMy45MzMtMTcuMjE2Yy0xMC44ODksNi4wMTktMTYuMTMyLDE2LjA3OS0xOC41NjQsMjcuNzE5Yy0yLjUwNSwxMS45OTItMS4yOTIsMjMuODExLDIuNjEsMzUuNDM5ICAgYzAuNzg0LDIuMzM3LDAuOSw1LjIyNCwwLjM0Nyw3LjYzNGMtNy4wNjMsMzAuNzk5LTE0LjYxNyw2MS40OS0yMS4zMDYsOTIuMzY5Yy0xLjk1Miw5LjAxMS0xLjU5LDE4LjUyNy0yLjIzOSwyNy44MTUgICBDMTYwLjQ5NSwzNzcuODM5LDE2MC42MDEsMzc5LjYzNSwxNjAuNjAxLDM4MnoiLz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8L3N2Zz4K' />"
	var google= "<img class='google red_social' alt='Compartir En Google+' title='Compartir Con Google+'  src='data:image/svg+xml;utf8;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iaXNvLTg4NTktMSI/Pgo8IS0tIEdlbmVyYXRvcjogQWRvYmUgSWxsdXN0cmF0b3IgMTguMC4wLCBTVkcgRXhwb3J0IFBsdWctSW4gLiBTVkcgVmVyc2lvbjogNi4wMCBCdWlsZCAwKSAgLS0+CjwhRE9DVFlQRSBzdmcgUFVCTElDICItLy9XM0MvL0RURCBTVkcgMS4xLy9FTiIgImh0dHA6Ly93d3cudzMub3JnL0dyYXBoaWNzL1NWRy8xLjEvRFREL3N2ZzExLmR0ZCI+CjxzdmcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgdmVyc2lvbj0iMS4xIiBpZD0iQ2FwYV8xIiB4PSIwcHgiIHk9IjBweCIgdmlld0JveD0iMCAwIDQ1NS43MyA0NTUuNzMiIHN0eWxlPSJlbmFibGUtYmFja2dyb3VuZDpuZXcgMCAwIDQ1NS43MyA0NTUuNzM7IiB4bWw6c3BhY2U9InByZXNlcnZlIiB3aWR0aD0iNTEycHgiIGhlaWdodD0iNTEycHgiPgo8cGF0aCBzdHlsZT0iZmlsbDojREQ0QjM5OyIgZD0iTTAsMHY0NTUuNzNoNDU1LjczVjBIMHogTTI2NS42NywyNDcuMDM3Yy03Ljc5Myw1MS4xOTQtNDUuOTYxLDgwLjU0My05NS4zNzYsODAuNTQzICBjLTU1LjUzMSwwLTEwMC41NTItNDUuMDIxLTEwMC41NTItMTAwLjU1MmMwLTU1LjUxNyw0NS4wMjEtMTAwLjUzOCwxMDAuNTUyLTEwMC41MzhjMjYuODYyLDAsNTAuMzk5LDkuNTg2LDY3LjUzMSwyNi4yMjYgIGwtMjguODU3LDI4Ljg1N2MtOS43NzMtOS44NDYtMjMuMTQ3LTE1LjA5NC0zOC42NzQtMTUuMDk0Yy0zMi42ODgsMC01OS4xODksMjcuODc0LTU5LjE4OSw2MC41NDggIGMwLDMyLjcwMywyNi41MDEsNTkuNzY4LDU5LjE4OSw1OS43NjhjMjcuMzk3LDAsNDguMTQ0LTEzLjI0Myw1NC4xMjktMzkuNzU4aC01NC4xMjl2LTQwLjM4aDk1LjEzMSAgYzEuMTQyLDYuNTA2LDEuNzIsMTMuMzE1LDEuNzIsMjAuMzdDMjY3LjE0NCwyMzQuMDI1LDI2Ni42MzgsMjQwLjY5LDI2NS42NywyNDcuMDM3eiBNMzg2LjQxOSwyMzQuNTE3aC0zNS4yMzN2MzUuMjE4SDMyNi4xNiAgdi0zNS4yMThoLTM1LjIzM3YtMjUuMDQxaDM1LjIzM3YtMzUuMjMzaDI1LjAyNnYzNS4yMzNoMzUuMjMzVjIzNC41MTd6Ii8+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+Cjwvc3ZnPgo=' />";
	var twitter = "<img class='twitter red_social' alt='Compartir En Twitter' title='Compartir Con Twitter' src='data:image/svg+xml;utf8;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iaXNvLTg4NTktMSI/Pgo8IS0tIEdlbmVyYXRvcjogQWRvYmUgSWxsdXN0cmF0b3IgMTguMC4wLCBTVkcgRXhwb3J0IFBsdWctSW4gLiBTVkcgVmVyc2lvbjogNi4wMCBCdWlsZCAwKSAgLS0+CjwhRE9DVFlQRSBzdmcgUFVCTElDICItLy9XM0MvL0RURCBTVkcgMS4xLy9FTiIgImh0dHA6Ly93d3cudzMub3JnL0dyYXBoaWNzL1NWRy8xLjEvRFREL3N2ZzExLmR0ZCI+CjxzdmcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgdmVyc2lvbj0iMS4xIiBpZD0iQ2FwYV8xIiB4PSIwcHgiIHk9IjBweCIgdmlld0JveD0iMCAwIDQ1NS43MzEgNDU1LjczMSIgc3R5bGU9ImVuYWJsZS1iYWNrZ3JvdW5kOm5ldyAwIDAgNDU1LjczMSA0NTUuNzMxOyIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSIgd2lkdGg9IjUxMnB4IiBoZWlnaHQ9IjUxMnB4Ij4KPGc+Cgk8cmVjdCB4PSIwIiB5PSIwIiBzdHlsZT0iZmlsbDojNTBBQkYxOyIgd2lkdGg9IjQ1NS43MzEiIGhlaWdodD0iNDU1LjczMSIvPgoJPHBhdGggc3R5bGU9ImZpbGw6I0ZGRkZGRjsiIGQ9Ik02MC4zNzcsMzM3LjgyMmMzMC4zMywxOS4yMzYsNjYuMzA4LDMwLjM2OCwxMDQuODc1LDMwLjM2OGMxMDguMzQ5LDAsMTk2LjE4LTg3Ljg0MSwxOTYuMTgtMTk2LjE4ICAgYzAtMi43MDUtMC4wNTctNS4zOS0wLjE2MS04LjA2N2MzLjkxOS0zLjA4NCwyOC4xNTctMjIuNTExLDM0LjA5OC0zNWMwLDAtMTkuNjgzLDguMTgtMzguOTQ3LDEwLjEwNyAgIGMtMC4wMzgsMC0wLjA4NSwwLjAwOS0wLjEyMywwLjAwOWMwLDAsMC4wMzgtMC4wMTksMC4xMDQtMC4wNjZjMS43NzUtMS4xODYsMjYuNTkxLTE4LjA3OSwyOS45NTEtMzguMjA3ICAgYzAsMC0xMy45MjIsNy40MzEtMzMuNDE1LDEzLjkzMmMtMy4yMjcsMS4wNzItNi42MDUsMi4xMjYtMTAuMDg4LDMuMTAzYy0xMi41NjUtMTMuNDEtMzAuNDI1LTIxLjc4LTUwLjI1LTIxLjc4ICAgYy0zOC4wMjcsMC02OC44NDEsMzAuODA1LTY4Ljg0MSw2OC44MDNjMCw1LjM2MiwwLjYxNywxMC41ODEsMS43ODQsMTUuNTkyYy01LjMxNC0wLjIxOC04Ni4yMzctNC43NTUtMTQxLjI4OS03MS40MjMgICBjMCwwLTMyLjkwMiw0NC45MTcsMTkuNjA3LDkxLjEwNWMwLDAtMTUuOTYyLTAuNjM2LTI5LjczMy04Ljg2NGMwLDAtNS4wNTgsNTQuNDE2LDU0LjQwNyw2OC4zMjljMCwwLTExLjcwMSw0LjQzMi0zMC4zNjgsMS4yNzIgICBjMCwwLDEwLjQzOSw0My45NjgsNjMuMjcxLDQ4LjA3N2MwLDAtNDEuNzc3LDM3Ljc0LTEwMS4wODEsMjguODg1TDYwLjM3NywzMzcuODIyeiIvPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+Cjwvc3ZnPgo=' />";
var facebook = "<img class='facebook red_social' alt='Compartir En Facebook' title='Compartir En Facebook'  src='data:image/svg+xml;utf8;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iaXNvLTg4NTktMSI/Pgo8IS0tIEdlbmVyYXRvcjogQWRvYmUgSWxsdXN0cmF0b3IgMTguMC4wLCBTVkcgRXhwb3J0IFBsdWctSW4gLiBTVkcgVmVyc2lvbjogNi4wMCBCdWlsZCAwKSAgLS0+CjwhRE9DVFlQRSBzdmcgUFVCTElDICItLy9XM0MvL0RURCBTVkcgMS4xLy9FTiIgImh0dHA6Ly93d3cudzMub3JnL0dyYXBoaWNzL1NWRy8xLjEvRFREL3N2ZzExLmR0ZCI+CjxzdmcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgdmVyc2lvbj0iMS4xIiBpZD0iQ2FwYV8xIiB4PSIwcHgiIHk9IjBweCIgdmlld0JveD0iMCAwIDQ1NS43MyA0NTUuNzMiIHN0eWxlPSJlbmFibGUtYmFja2dyb3VuZDpuZXcgMCAwIDQ1NS43MyA0NTUuNzM7IiB4bWw6c3BhY2U9InByZXNlcnZlIiB3aWR0aD0iNTEycHgiIGhlaWdodD0iNTEycHgiPgo8cGF0aCBzdHlsZT0iZmlsbDojM0E1NTlGOyIgZD0iTTAsMHY0NTUuNzNoMjQyLjcwNFYyNzkuNjkxaC01OS4zM3YtNzEuODY0aDU5LjMzdi02MC4zNTNjMC00My44OTMsMzUuNTgyLTc5LjQ3NSw3OS40NzUtNzkuNDc1ICBoNjIuMDI1djY0LjYyMmgtNDQuMzgyYy0xMy45NDcsMC0yNS4yNTQsMTEuMzA3LTI1LjI1NCwyNS4yNTR2NDkuOTUzaDY4LjUyMWwtOS40Nyw3MS44NjRoLTU5LjA1MVY0NTUuNzNINDU1LjczVjBIMHoiLz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPC9zdmc+Cg==' />";
var carrito = "	<img class='carrito' src='data:image/svg+xml;utf8;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iaXNvLTg4NTktMSI/Pgo8IS0tIEdlbmVyYXRvcjogQWRvYmUgSWxsdXN0cmF0b3IgMTkuMC4wLCBTVkcgRXhwb3J0IFBsdWctSW4gLiBTVkcgVmVyc2lvbjogNi4wMCBCdWlsZCAwKSAgLS0+CjxzdmcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgdmVyc2lvbj0iMS4xIiBpZD0iTGF5ZXJfMSIgeD0iMHB4IiB5PSIwcHgiIHZpZXdCb3g9IjAgMCA1MTEuOTk5IDUxMS45OTkiIHN0eWxlPSJlbmFibGUtYmFja2dyb3VuZDpuZXcgMCAwIDUxMS45OTkgNTExLjk5OTsiIHhtbDpzcGFjZT0icHJlc2VydmUiIHdpZHRoPSIzMnB4IiBoZWlnaHQ9IjMycHgiPgo8Zz4KCTxnPgoJCTxwYXRoIGQ9Ik0yMTQuNjg1LDQwMi44MjhjLTI0LjgyOSwwLTQ1LjAyOSwyMC4yLTQ1LjAyOSw0NS4wMjljMCwyNC44MjksMjAuMiw0NS4wMjksNDUuMDI5LDQ1LjAyOXM0NS4wMjktMjAuMiw0NS4wMjktNDUuMDI5ICAgIEMyNTkuNzEzLDQyMy4wMjgsMjM5LjUxMyw0MDIuODI4LDIxNC42ODUsNDAyLjgyOHogTTIxNC42ODUsNDY3Ljc0MmMtMTAuOTY2LDAtMTkuODg3LTguOTIyLTE5Ljg4Ny0xOS44ODcgICAgYzAtMTAuOTY2LDguOTIyLTE5Ljg4NywxOS44ODctMTkuODg3czE5Ljg4Nyw4LjkyMiwxOS44ODcsMTkuODg3QzIzNC41NzIsNDU4LjgyMiwyMjUuNjUsNDY3Ljc0MiwyMTQuNjg1LDQ2Ny43NDJ6IiBmaWxsPSIjRkZGRkZGIi8+Cgk8L2c+CjwvZz4KPGc+Cgk8Zz4KCQk8cGF0aCBkPSJNMzcyLjYzLDQwMi44MjhjLTI0LjgyOSwwLTQ1LjAyOSwyMC4yLTQ1LjAyOSw0NS4wMjljMCwyNC44MjksMjAuMiw0NS4wMjksNDUuMDI5LDQ1LjAyOXM0NS4wMjktMjAuMiw0NS4wMjktNDUuMDI5ICAgIEM0MTcuNjU4LDQyMy4wMjgsMzk3LjQ1OCw0MDIuODI4LDM3Mi42Myw0MDIuODI4eiBNMzcyLjYzLDQ2Ny43NDJjLTEwLjk2NiwwLTE5Ljg4Ny04LjkyMi0xOS44ODctMTkuODg3ICAgIGMwLTEwLjk2Niw4LjkyMi0xOS44ODcsMTkuODg3LTE5Ljg4N2MxMC45NjYsMCwxOS44ODcsOC45MjIsMTkuODg3LDE5Ljg4N0MzOTIuNTE3LDQ1OC44MjIsMzgzLjU5NSw0NjcuNzQyLDM3Mi42Myw0NjcuNzQyeiIgZmlsbD0iI0ZGRkZGRiIvPgoJPC9nPgo8L2c+CjxnPgoJPGc+CgkJPHBhdGggZD0iTTM4My43MTYsMTY1Ljc1NUgyMDMuNTY3Yy02Ljk0MywwLTEyLjU3MSw1LjYyOC0xMi41NzEsMTIuNTcxYzAsNi45NDMsNS42MjksMTIuNTcxLDEyLjU3MSwxMi41NzFoMTgwLjE0OSAgICBjNi45NDMsMCwxMi41NzEtNS42MjgsMTIuNTcxLTEyLjU3MUMzOTYuMjg3LDE3MS4zODIsMzkwLjY1OSwxNjUuNzU1LDM4My43MTYsMTY1Ljc1NXoiIGZpbGw9IiNGRkZGRkYiLz4KCTwvZz4KPC9nPgo8Zz4KCTxnPgoJCTxwYXRoIGQ9Ik0zNzMuOTExLDIzMS4wMzVIMjEzLjM3M2MtNi45NDMsMC0xMi41NzEsNS42MjgtMTIuNTcxLDEyLjU3MXM1LjYyOCwxMi41NzEsMTIuNTcxLDEyLjU3MWgxNjAuNTM3ICAgIGM2Ljk0MywwLDEyLjU3MS01LjYyOCwxMi41NzEtMTIuNTcxQzM4Ni40ODEsMjM2LjY2NCwzODAuODUzLDIzMS4wMzUsMzczLjkxMSwyMzEuMDM1eiIgZmlsbD0iI0ZGRkZGRiIvPgoJPC9nPgo8L2c+CjxnPgoJPGc+CgkJPHBhdGggZD0iTTUwNi4zNDEsMTA5Ljc0NGMtNC43OTQtNS44ODQtMTEuODk4LTkuMjU4LTE5LjQ4OS05LjI1OEg5NS4yNzhMODcuMzcsNjIuMDk3Yy0xLjY1MS04LjAwOC03LjExMy0xNC43MzItMTQuNjE0LTE3Ljk4OSAgICBsLTU1LjE3Ny0yMy45NWMtNi4zNy0yLjc2Ny0xMy43NzMsMC4xNTYtMTYuNTM2LDYuNTI0Yy0yLjc2Niw2LjM3LDAuMTU3LDEzLjc3NCw2LjUyNCwxNi41MzdMNjIuNzQ1LDY3LjE3bDYwLjgyNiwyOTUuMjYxICAgIGMyLjM5NiwxMS42MjgsMTIuNzUyLDIwLjA2OCwyNC42MjUsMjAuMDY4aDMwMS4xNjZjNi45NDMsMCwxMi41NzEtNS42MjgsMTIuNTcxLTEyLjU3MWMwLTYuOTQzLTUuNjI4LTEyLjU3MS0xMi41NzEtMTIuNTcxICAgIEgxNDguMTk3bC03LjM5OS0zNS45MTZINDUxLjY5YzExLjg3MiwwLDIyLjIyOS04LjQ0LDI0LjYyNC0yMC4wNjhsMzUuMTYzLTE3MC42NzUgICAgQzUxMy4wMDgsMTIzLjI2Niw1MTEuMTM2LDExNS42MjcsNTA2LjM0MSwxMDkuNzQ0eiBNNDUxLjY5LDI5Ni4zMDFIMTM1LjYxOWwtMzUuMTYxLTE3MC42NzRsMzg2LjM5MywwLjAwMUw0NTEuNjksMjk2LjMwMXoiIGZpbGw9IiNGRkZGRkYiLz4KCTwvZz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8L3N2Zz4K' />";
$(".imagen1").addClass("mostrar1");
//$(".hover").addClass("mostrar1");	
var hover=	document.querySelectorAll(".hover");
var imagenes=	document.querySelectorAll(".imagen1, .imagen2, .imagen3");    
var productos = document.querySelectorAll(".Productos");
var vermases = document.querySelectorAll(".ver_mas");
var correr;	
var comback;
var contar;
var contado= 0;
var turno = 1;
var produ;	
var capa = document.querySelectorAll(".capa");
	for(var i = 0; i< productos.length; i++){
		var id_prod = i;
		id_prod.toString();
		id_prod = "prod" + id_prod;
		$(productos[i]).attr("id", id_prod);
		var id_vermas = "vermas";
		id_vermas = id_vermas + i;
		$(vermases[i]).attr("id", id_vermas);
		
	}
	
for (var i= 0; i <	hover.length ; i++){
	var id_hover = i;
	id_hover.toString();
	id_hover = "art" + id_hover;
	$(hover[i]).attr("id", id_hover);
	hover[i].addEventListener("mouseover", acceso, false);
	vermases[i].addEventListener("click", desglozar, false);
	//hover[i].addEventListener("mouseout", predeterminado, false);
	//alert(id_hover);
}
for(var i= 0; i < productos.length; i++){
	var id_prod = i;
	id_prod.toString();
	id_prod = "prod" + id_prod;
	$(productos[i]).attr("id", id_prod);
	productos[i].addEventListener("mouseout", predeterminado, false);
}

for(var i = 0; i < imagenes.length; i++){
	var id_imagenes = i;
	id_imagenes.toString();
	id_imagenes= "img" + id_imagenes; 
	$(imagenes[i]).attr("id", id_imagenes);
	
}
	
	function acceso(e) {
		var velocidad = 2000;
		for(var i = 0; i < hover.length; i++){
			var acceso_art =  i;
			acceso_art.toString();
			acceso_art = "art" + acceso_art;
			if(e.target.id == acceso_art){
				
				acceso_art = "#" + acceso_art;
			 comback=  acceso_art;
				//alert(acceso_art);
				break;
			}
		
	}	
		 contar= setInterval(function(){	
			 contado++;
			 if(contado == 1){

				$(acceso_art + " + .imagen1 + .imagen2 + .imagen3 + .esperar1").show(300);
				
				 $(acceso_art + " + .imagen1 + .imagen2 + .imagen3 + .esperar1").hide(300);
			 
			 }else if(contado==2){
				 
			 	$(acceso_art + " + .imagen1 + .imagen2 + .imagen3 + .esperar1 + .esperar2").show(300);
				 
				$(acceso_art + " + .imagen1 + .imagen2 + .imagen3 + .esperar1 + .esperar2").hide(300);
		 	 }else if(contado ==3){
				 
			 $(acceso_art + " + .imagen1 + .imagen2 + .imagen3 + .esperar1 + .esperar2 + .esperar3").show(300);
				 
				 $(acceso_art + " + .imagen1 + .imagen2 + .imagen3 + .esperar1 + .esperar2 + .esperar3").hide(300);

			 }else {
					contado= 0;
				}
			 
		 }, 450);
	correr= setInterval(function(){
			turno++;
			if(turno > 3){
				turno= 0;
			}
			if(turno == 2){
							
				clearInterval(contar);	
				contado= 0;
				$(acceso_art + " + .imagen1").removeClass("mostrar mostrar1");
				$(acceso_art + " + .imagen1 + .imagen2").addClass("mostrar");		
			
			}else if(turno == 3){
					
				$(acceso_art + " + .imagen1 + .imagen2").removeClass("mostrar mostrar1");
				$(acceso_art + " + .imagen1 + .imagen2 + .imagen3").addClass("mostrar");
			
			}else if (turno == 0){
				$(acceso_art + " + .imagen1 + .imagen2 + .imagen3").removeClass("mostrar mostrar1");
				$(acceso_art + " + .imagen1").addClass("mostrar");
			}else if(turno == 1){
				$(acceso_art + " + .imagen1").removeClass("mostrar mostrar1");
				$(acceso_art + " + .imagen1 + .imagen2").addClass("mostrar");		
				turno = 2;
	 		}else{
				alert("Ha ocurrido un problema inesperado, recarge nuestra pagina, sera compensado con mas velocidad");
			}		
			
		
	},velocidad);

		

}
function predeterminado(){
			clearInterval(contar);		
			contado= 0;		

			if (turno == 2 ){
				$(comback + " + .imagen1 + .imagen2").removeClass("mostrar mostrar1");
				//$(comback + " + .imagen1 + .imagen2").addClass("ocultar");
			}else if (turno == 3){
				$(comback + " + .imagen1 + .imagen2 + .imagen3").removeClass("mostrar mostrar1");
				//$(comback + " + .imagen1 + .imagen2 + .imagen3").addClass("ocultar");
				
			}else if (turno == 1){
				$(comback + " + .imagen1 + .imagen2").removeClass("mostrar mostrar1");
			//	$(comback + " + .imagen1 + .imagen2").addClass("ocultar");
				
			}else if (turno == 0){
				turno = 1;
				clearInterval(correr);
			
				return false;
			}
			
			//$(comback + " + .imagen1").removeClass("ocultar");
			$(comback + " + .imagen1").addClass("mostrar");
			clearInterval(correr);
			turno = 1;
			
}
	
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////	
	var atras = document.querySelectorAll(".flecha_atras");
	var siguiente = document.querySelectorAll(".flecha_siguiente");
	for( var i = 0; i < atras.length; i++){
		atras[i].addEventListener("click", atrasado, false);
	}
	for(var i =0; i< siguiente.length ; i++){
		siguiente[i].addEventListener("click", seguir, false);
	//	siguiente[i].addEventListener("mouseout", borrar, false);
		//siguiente[i].addEventListener("mouseover", statico, false);
	}

		
	function atrasado(){
	//	alert("hola");
		clearInterval(correr);
	
		
			turno--;
			if(turno < 0){
				turno= 3;
			}
			if(turno == 1){
			
					
				$(comback + " + .imagen1").addClass("mostrar1");
				$(comback + " + .imagen1 + .imagen2").removeClass("mostrar1 mostrar");		
			
			}else if(turno == 2){
					
				$(comback + " + .imagen1 + .imagen2").addClass("mostrar1");
				$(comback + " + .imagen1 + .imagen2 + .imagen3").removeClass("mostrar1 mostrar");
			
			}else if (turno == 3){
				$(comback + " + .imagen1 + .imagen2 + .imagen3").addClass("mostrar1");
				$(comback + " + .imagen1").removeClass("mostrar1 mostrar");
			}else if(turno == 0){
				$(comback + " + .imagen1").removeClass("mostrar1 mostrar");
				$(comback + " + .imagen1 + .imagen2 + .imagen3").addClass("mostrar1");		
				turno = 3;
	 		}else{
				alert("Ha ocurrido un problema inesperado, recarge nuestra pagina, sera compensado con mas velocidad");
			}		
		
		
	}
	function seguir(){
	
		clearInterval(correr);
	
		
			turno++;
			if(turno > 3){
				turno= 0;
			}
			if(turno == 2){
			
					
				$(comback + " + .imagen1").removeClass("mostrar mostrar1");
				$(comback + " + .imagen1 + .imagen2").addClass("mostrar1");		
			
			}else if(turno == 3){
					
				$(comback + " + .imagen1 + .imagen2").removeClass("mostrar1 mostrar");
				$(comback + " + .imagen1 + .imagen2 + .imagen3").addClass("mostrar1");
			
			}else if (turno == 0){
				$(comback + " + .imagen1 + .imagen2 + .imagen3").removeClass("mostrar1 mostrar");
				$(comback + " + .imagen1").addClass("mostrar1");
			}else if(turno == 1){
				$(comback + " + .imagen1").removeClass("mostrar1 mostrar");
				$(comback + " + .imagen1 + .imagen2").addClass("mostrar1");		
				turno = 2;
	 		}else{
				alert("Ha ocurrido un problema inesperado, recarge nuestra pagina, sera compensado con mas velocidad");
			}		
		
		
}
	
////////////////////Aqui estara el codigo para hacer el "Stiky Menu"//////////////////////////////////////////////
/*	var altura = $("nav").offset().top;

	$(window).on("scroll", function(){
		if($(window).scrollTop() > altura){
			$("nav").addClass("pacha");
			$("li").addClass("text_design");
		}else{
			$("nav").removeClass("pacha");
			$("li").removeClass("text_design");
		}
	});*/
/////////////////////////////////////////sencillo//////////////////////////////////////////////////////////////////

	var inicio = document.getElementById("Inicio");
	var headphones=document.getElementById("HeadPhones");
	var contactos=document.getElementById("COntactos");
	var peticiones = document.getElementById("Peticiones");

	inicio.addEventListener("click", focus, false);
	headphones.addEventListener("click", focus, false);
	contactos.addEventListener("click", focus, false);
	peticiones.addEventListener("click", focus, false);

	function focus(e){
		if(e.target.id == "Inicio"){
			$("#HeadPhones").removeClass("presente");
			$("#Peticiones").removeClass("presente");
			$("#COntactos").removeClass("presente");
			$("#Inicio").addClass("presente");
		}else if(e.target.id == "HeadPhones"){
			$("#HeadPhones").addClass("presente");
			$("#Peticiones").removeClass("presente");
			$("#COntactos").removeClass("presente");
			$("#Inicio").removeClass("presente");
		}else if(e.target.id == "COntactos"){
			$("#HeadPhones").removeClass("presente");
			$("#Peticiones").removeClass("presente");
			$("#COntactos").addClass("presente");
			$("#Inicio").removeClass("presente");
		}else if(e.target.id == "Peticiones"){
			$("#HeadPhones").removeClass("presente");
			$("#Peticiones").addClass("presente");
			$("#COntactos").removeClass("presente");
			$("#Inicio").removeClass("presente");
		}
}
/////////////////////////////////Desglozar/////////////////////////////////////////////////////////////
	//-----------------------------------------------------------------------------------------------///////////////////////-/////////////////////////////////////////////////////////////////////////////////////////////////////////////////	
 
var articulo= $(".main_cont + .main_cont > article").attr("class");
var flecha_atras = $(".main_cont + .main_cont > article a[class*='flecha_atras']").attr("class");
var flecha_siguiente = $(".main_cont + .main_cont > article a[class*='flecha_siguiente']").attr("class");
var hover = $(".main_cont + .main_cont > article div[class*='hover']").attr("class");
var imagen1 = $(".main_cont + .main_cont img[class*='imagen1']").attr("class");
var imagen2 = $(".main_cont + .main_cont img[class*='imagen2']").attr("class");
var imagen3 = $(".main_cont + .main_cont img[class*='imagen3']").attr("class");
var esperar1 = $(".main_cont + .main_cont img[class*='esperar1']").attr("class");
var esperar2 = $(".main_cont + .main_cont img[class*='esperar2']").attr("class");
var esperar3 = $(".main_cont + .main_cont img[class*='esperar3']").attr("class");
var collage = $(".main_cont + .main_cont img[class*='collage']").attr("class");
var ver_mas = $(".main_cont + .main_cont p[class*='ver_mas']").attr("class");
var precio = $(".main_cont + .main_cont p[class*='']");
var imagen11 = $(".main_cont + .main_cont img[class*='imagen1']").attr("src");
var imagen22 = $(".main_cont + .main_cont img[class*='imagen2']").attr("src");
var imagen33 = $(".main_cont + .main_cont img[class*='imagen3']").attr("src");
var esperar11 = $(".main_cont + .main_cont img[class*='esperar1']").attr("src");
var esperar22 = $(".main_cont + .main_cont img[class*='esperar2']").attr("src");
var esperar33 = $(".main_cont + .main_cont img[class*='esperar3']").attr("src");
var collage2 = $(".main_cont + .main_cont img[class*='collage']").attr("src");
	//$(".welcome").after("<img src='"+ imagen1 +"'></img>");
	//alert($(articulo));
	
/*	$(".main_cont").append("<article class='"+ articulo + "'> <a class='" + flecha_atras + "></a><a class='" + flecha_siguiente + "'></a><div class='" + hover + "'></div><img class='" + imagen1 + "' src='" + imagen11 + "'></img><img class='" + imagen2 + "' src='" + imagen22 + "'></img><img src='" + imagen33 + "' class='" + imagen3 + "'><img class='" + esperar1 + "' src='" + esperar11 + "'></img><img src='" + esperar22 + "' class='" + esperar2 + "'></img><img class='" + esperar3 + "' src='" + esperar33 + "'></img><img src='" + collage2 + "' class='" + collage + "'></img><p class='" + ver_mas + "'>Ver m&aacute;s</p><p " + precio + ">$900</p></article>");
	});*/
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

var clicks = 0;
var padre2;	
function desglozar(e){ //// la function del boton ver mas xd
	var altura2;
	var accessTovermas = e.target.id;
	var padre;
	var collage;
	var audifono = "hola";
	var posicion;
	var activo= 1;
	var me_gustas = 0;
	$(".Productos").addClass("fix_trans");
	if(clicks == 1){
		var anterior_descripcion = $(padre2).closest(".main_cont").attr("class");
		
		$("." + anterior_descripcion + " .cont_especial").css("display", "none");
		clicks=0;
		posicion= 0;
		$(".Productos").removeClass("destacar");
	
	}
	clicks++;
		
	accessTovermas= "#" + accessTovermas;
	padre = "#" + $(accessTovermas).parent().attr("id");
	collage = $(padre).children(".collage").attr("src");
	
	padre2= padre;
	
	
		if ($(padre).hasClass("P15")){
		audifono= " <h2 class='nombre_aud'>P15</h2>  <p class='descripcion2'> &#32;Qu&eacute; importa si se seca la tinta de los altaneros diplomas con letras doradas&#33; &#32;Que los quemen todos&#33; Siempre existir&aacute; el f&iacute;sico que aprendi&oacute; en su casa, a costa de muchos errores y tuvo un profesor mejor que Einstein: la experiencia.<p>	<button class='quitar' alt='Quitar'>X</button><button class='comprar'>Comprar" + carrito + "</button> <img src='imagenes/No_Like.png' class='me_gusta'></img>" + facebook + " " + twitter + " " + google + " " + pinterest + "";
	}else if($(padre).hasClass("P15_Azules")){
		audifono= " <h2 class='nombre_aud'>P15_Azules</h2>  <p class='descripcion2'> &#32;Qu&eacute; importa si se seca la tinta de los altaneros diplomas con letras doradas&#33; &#32;Que los quemen todos&#33; Siempre existir&aacute; el f&iacute;sico que aprendi&oacute; en su casa, a costa de muchos errores y tuvo un profesor mejor que Einstein: la experiencia.<p><button class='quitar'>X</button><img src='imagenes/No_Like.png' class='me_gusta'></img><button class='comprar'>Comprar" + carrito + "</button>" + facebook + " " + twitter + " " + google + " " + pinterest + "";
	}else if($(padre).hasClass("P15_Verdes")){
		audifono= " <h2 class='nombre_aud'>P15 Verdes</h2>  <p class='descripcion2'> &#32;Qu&eacute; importa si se seca la tinta de los altaneros diplomas con letras doradas&#33; &#32;Que los quemen todos&#33; Siempre existir&aacute; el f&iacute;sico que aprendi&oacute; en su casa, a costa de muchos errores y tuvo un profesor mejor que Einstein: la experiencia.<p><button class='quitar'>X</button><img src='imagenes/No_Like.png' class='me_gusta'></img><button class='comprar'>Comprar" + carrito + "</button>" + facebook + " " + twitter + " " + google + " " + pinterest + "";
	}else if($(padre).hasClass("BT-Speaker")){
		audifono= " <h2 class='nombre_aud'>BT-Speaker</h2>  <p class='descripcion2'> &#32;Qu&eacute; importa si se seca la tinta de los altaneros diplomas con letras doradas&#33; &#32;Que los quemen todos&#33; Siempre existir&aacute; el f&iacute;sico que aprendi&oacute; en su casa, a costa de muchos errores y tuvo un profesor mejor que Einstein: la experiencia.<p><button class='quitar'>X</button><img src='imagenes/No_Like.png' class='me_gusta'></img><button class='comprar'>Comprar" + carrito + "</button>" + facebook + " " + twitter + " " + google + " " + pinterest + "";
	
	}else if($(padre).hasClass("BocinaBT_Blanca")){
		audifono= " <h2 class='nombre_aud'>BocinaBT Blanca</h2>  <p class='descripcion2'> &#32;Qu&eacute; importa si se seca la tinta de los altaneros diplomas con letras doradas&#33; &#32;Que los quemen todos&#33; Siempre existir&aacute; el f&iacute;sico que aprendi&oacute; en su casa, a costa de muchos errores y tuvo un profesor mejor que Einstein: la experiencia.<p><button class='quitar'>X</button><img src='imagenes/No_Like.png' class='me_gusta'></img><button class='comprar'>Comprar" + carrito + "</button>" + facebook + " " + twitter + " " + google + " " + pinterest + "";
	
	}else if($(padre).hasClass("BocinaBT_Verde")){
		audifono= " <h2 class='nombre_aud'>BocinaBT Verde</h2>  <p class='descripcion2'> &#32;Qu&eacute; importa si se seca la tinta de los altaneros diplomas con letras doradas&#33; &#32;Que los quemen todos&#33; Siempre existir&aacute; el f&iacute;sico que aprendi&oacute; en su casa, a costa de muchos errores y tuvo un profesor mejor que Einstein: la experiencia.<p><p><button class='quitar'>X</button><img src='imagenes/No_Like.png' class='me_gusta'></img><button class='comprar'>Comprar" + carrito + "</button>" + facebook + " " + twitter + " " + google + " " + pinterest + "";
	}else if($(padre).hasClass("Lg_Negros")){
		audifono= " <h2 class='nombre_aud'>Lg Negros</h2>  <p class='descripcion2'> &#32;Qu&eacute; importa si se seca la tinta de los altaneros diplomas con letras doradas&#33; &#32;Que los quemen todos&#33; Siempre existir&aacute; el f&iacute;sico que aprendi&oacute; en su casa, a costa de muchos errores y tuvo un profesor mejor que Einstein: la experiencia.<p><button class='quitar'>X</button><img src='imagenes/No_Like.png' class='me_gusta'></img><button class='comprar'>Comprar" + carrito + "</button>" + facebook + " " + twitter + " " + google + " " + pinterest + "";
	}else if($(padre).hasClass("Lg_Blancos")){
		audifono= " <h2 class='nombre_aud'>Lg Blancos</h2>  <p class='descripcion2'> &#32;Qu&eacute; importa si se seca la tinta de los altaneros diplomas con letras doradas&#33; &#32;Que los quemen todos&#33; Siempre existir&aacute; el f&iacute;sico que aprendi&oacute; en su casa, a costa de muchos errores y tuvo un profesor mejor que Einstein: la experiencia.<p><button class='quitar'>X</button><img src='imagenes/No_Like.png' class='me_gusta'></img><button class='comprar'>Comprar" + carrito + "</button>" + facebook + " " + twitter + " " + google + " " + pinterest + "";
	}else if($(padre).hasClass("Cine")){
		audifono= " <h2 class='nombre_aud'>Cine</h2>  <p class='descripcion2'> &#32;Qu&eacute; importa si se seca la tinta de los altaneros diplomas con letras doradas&#33; &#32;Que los quemen todos&#33; Siempre existir&aacute; el f&iacute;sico que aprendi&oacute; en su casa, a costa de muchos errores y tuvo un profesor mejor que Einstein: la experiencia.<p><button class='quitar'>X</button><img src='imagenes/No_Like.png' class='me_gusta'></img><button class='comprar'>Comprar" + carrito + "</button>" + facebook + " " + twitter + " " + google + " " + pinterest + "";
	}

	$(padre).closest(".main_cont").append("<div class='cont_especial'><div class='especial'><img class='collage2' src='"+ collage + "'></img>" + audifono + " </div></div>");

	
//Esto es para llevar la pantala encima de la descripcion arrastrando el Scroll	
	posicion= $(padre).offset().top;
	$("html, body").animate({scrollTop: posicion}, 600);
//////////////////////////////////////////////////////////////	
		$(padre).addClass("destacar");
		

	///Es la function que hace que se quite la descripcion
	$(".quitar").click(function(){
		var descripcion_presente = $(padre).closest(".main_cont").attr("class");	
		//$("." + descripcion_presente + " .cont_especial").addClass("quitarOff");
		$("." + descripcion_presente + " .cont_especial .especial").addClass("quitarOff");
		$("." + descripcion_presente + " .cont_especial .especial").children().addClass("elementosOff");
		$(".nombre_aud").css("display", "none");
		setTimeout(function(){
			$("." + descripcion_presente + " .cont_especial .especial").css("display", "none");
				
		}, 700);
		setTimeout(function(){
			$("." + descripcion_presente + " .cont_especial").addClass("desaparecer");
			
		}, 950);
		clicks=0;
		posicion= 0;
		$(".Productos").removeClass("destacar");	
		$(".Productos").removeClass("fix_trans");	
	
	});	
	
//function para establecer las imagenes de like and no like
	
	$(".me_gusta").click(function(){
		
		if(activo==1){
			$(".me_gusta").attr("src", "imagenes/Like.png");
			$(".me_gusta").after("<p class='cant_megusta'>Te Gusta</p>");
			activo=0;
			$(".facebook").removeClass("come_facebook");
			$(".twitter").removeClass("come_twitter");
			$(".google").removeClass("come_google");
			$(".pinterest").removeClass("come_pinterest");
			
			$(".facebook").addClass("facebook_anim");
			$(".twitter").addClass("twitter_anim");
			$(".google").addClass("google_anim");
			$(".pinterest").addClass("pinterest_anim");
		}else if(activo==0){
			$(".me_gusta").attr("src", "imagenes/No_Like.png");
			$(".cant_megusta").css("display", "none");
			activo=1;
			$(".facebook").removeClass("facebook_anim");
			$(".twitter").removeClass("twitter_anim");
			$(".google").removeClass("google_anim");
			$(".pinterest").removeClass("pinterest_anim");
			
			$(".facebook").addClass("come_facebook");
			$(".twitter").addClass("come_twitter");
			$(".google").addClass("come_google");
			$(".pinterest").addClass("come_pinterest");
		
		}
});
	
$(".comprar").click(function(){
	$("#compras").css("display", "block");
});
	
}
});

