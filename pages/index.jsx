import Head from 'next/head'
import React, {useState} from "react";
import {Button, Container, Paper, Space} from "@mantine/core";
import styles from '../styles/Home.module.css'
import {useNotifications} from "@mantine/notifications";
import {Prism} from "@mantine/prism";
import {PasswordStrength} from "../components/password-strength";
import {ScrollToTop} from "../components/scroll-to-top";
import {LoginModal} from "../components/login-modal";

export default function Home() {
	const notifications = useNotifications();
	const [loading, setLoading] = useState(true);

	const buttoncode = `import { Button } from '@mantine/core';
import { useNotifications } from '@mantine/notifications';
	
<Button onClick={() =>
	notifications.showNotification({
	autoClose: 2500,
	title: 'title',
	message: 'message',
	})
}>
Button with notification
</Button>`;
	const nonotifbuttoncode = `import { Button } from '@mantine/core';
import { useNotifications } from '@mantine/notifications';
	
<Button>Button without notification</Button>`;
	const AffixScrollToTop = `import { LoginModal } from "../components/login-modal";
	
<LoginModal />`

	return (
		<div className={styles.container}>
			<Head>
				<title>Mantine Test</title>
				<meta name="description" content="A quick page to test mantine components while I decide what to do"/>
				<link rel="icon" href="/favicon.ico"/>
			</Head>

			<ScrollToTop/>

			<main className={styles.left_to_right}>
				<Paper padding={"md"} shadow={"lg"} radius={"lg"}>
					<h2 className={styles.cera_pro_light}>
						<p>
							This is a quick page filled with a bunch of filler content<br/> while I decide what to do
							with
							this
							page,<br/>
							stay tuned for that!
						</p>
					</h2>
				</Paper>
				<Space w="50px"/>
				<Container size={350} padding={0} className={styles.centered}>
					<Button color="gray" variant="outline" className={styles.cera_pro_light} onClick={() =>
						notifications.showNotification({
							autoClose: 2500,
							title: 'built with ' + "React",
							message: 'message',
						})
					}>Button with notification</Button>
					<Space h='md'/>
					<Button className={styles.cera_pro_light}>Button</Button>
					<Space h="25px"/>
					<LoginModal/>
				</Container>
				<Space w="50px"/>
				<Paper padding="md" shadow="sm" radius="md" className={styles.min_height}>
					<Prism.Tabs >
						<Prism.Tab label="Button with notification"
						           icon={<ion-icon name="logo-react"></ion-icon>}
						           language={"tsx"}>{buttoncode}</Prism.Tab>
						<Prism.Tab label="Button"
						           icon={<ion-icon name="logo-react"></ion-icon>}
						           language={"tsx"}>{nonotifbuttoncode}</Prism.Tab>
						<Prism.Tab label="Modal"
						           icon={<ion-icon name="logo-react"></ion-icon>}
						           language={"tsx"}>{AffixScrollToTop}</Prism.Tab>
					</Prism.Tabs>
				</Paper>
			</main>
			<div className={styles.main}>
				<PasswordStrength/>
				<p className={styles.cera_pro_light}>
					<blockquote>Smort</blockquote>
					<blockquote>Smort</blockquote>
					<blockquote>Smort</blockquote>
					<blockquote>Smort</blockquote>
					<blockquote>Smort</blockquote>
					<blockquote>Smort</blockquote>
					<blockquote>Smort</blockquote>
					<blockquote>Smort</blockquote>
					<blockquote>Smort</blockquote>
					<blockquote>Smort</blockquote>
					<blockquote>Smort</blockquote>
					<blockquote>Smort</blockquote>
					<blockquote>Smort</blockquote>
					<blockquote>Smort</blockquote>
					<blockquote>Smort</blockquote>
					<blockquote>Smort</blockquote>
					<blockquote>Smort</blockquote>
					<blockquote>Smort</blockquote>
					<blockquote>Smort</blockquote>
				</p>
			</div>
		</div>
	)
}
