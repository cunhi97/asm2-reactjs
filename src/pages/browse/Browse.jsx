import React from 'react';
import NavBar from '../../Component/NavBar';
import styles from './Browse.module.css';
import { Outlet } from 'react-router-dom';
function Browse() {
	return (
		<div className={styles.main}>
			<NavBar />
			<main>
				<Outlet />
			</main>
		</div>
	);
}

export default Browse;

