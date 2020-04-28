import "regenerator-runtime";
import "bootstrap/dist/css/bootstrap.min.css";
import $ from "jquery";
import "popper.js";
import "bootstrap/dist/js/bootstrap.min.js";
import "./script/styles/style.css"
import img from './logo.png';
import {main,getGlobal,getLokal} from "./script/view/main.js";


getGlobal();
getLokal();

$("#logoNav").attr("src",img);
document.addEventListener("DOMContentLoaded", main);