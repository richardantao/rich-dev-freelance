import React from "react";

import "./styles.scss";

const year = new Date().getFullYear();

const Footer = () =>
	<footer id="footer" role="contentinfo">
		<div id="footer-content-wrapper">
			<p>
				© {year} Stone House Contracting Ltd.
			</p>
			<p>
				Designed and developed by <a
					href="https://richardantao.com"
					target="_blank"
					rel="noopener noreferrer"
				>
					Richard Antao
				</a>
			</p>
		</div>
	</footer>;

export default Footer;