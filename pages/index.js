import Head from 'next/head'
import {Button, Space} from "@mantine/core";
import styles from '../styles/Home.module.css'
import {useNotifications} from "@mantine/notifications";
import {Prism} from "@mantine/prism";
import {PasswordStrength} from "../components/password-strength";
import {ScrollToTop} from "../components/scroll-to-top";
import {LoginModal} from "../components/login-modal";

export default function Home() {
	const notifications = useNotifications();
	const buttoncode = `import { Button } from '@mantine/core';
import { useNotifications } from '@mantine/notifications';
	
<Button component="div" onClick={() =>
	notifications.showNotification({
	autoClose: 2500,
	title: 'title',
	message: 'message',
	})
}>Button with notification</Button>`;
	const nonotifbuttoncode = `import { Button } from '@mantine/core';
import { useNotifications } from '@mantine/notifications';
	
<Button component="div">Button without notification</Button>`;
	const AffixScrollToTop = `import { useWindowScroll } from '@mantine/hooks';
import { Button, Affix, Transition } from '@mantine/core';

export function ScrollToTop() {
    const [scroll, scrollTo] = useWindowScroll();
    
    return (
        <Affix position={{ bottom: 20, right: 20 }}>
            <Transition transition="slide-up" mounted={scroll.y > 0}>
                {(transitionStyles) => (
                    <Button
                        leftIcon={<ion-icon name="arrow-up-outline"></ion-icon>}
                        style={transitionStyles}
                        onClick={() => scrollTo({ y: 0 })}
                    >
                        Scroll to top
                    </Button>
                )}
            </Transition>
        </Affix>
    )
}`;

	return (
		<div className={styles.container}>
			<Head>
				<title>Create Next App</title>
				<meta name="description" content="Generated by create next app"/>
				<link rel="icon" href="/favicon.ico"/>
			</Head>

			<main className={styles.main}>
				<ScrollToTop/>
				<Prism.Tabs>
					<Prism.Tab label="Button with notification" icon={<ion-icon name="logo-javascript"></ion-icon>}
					           language={"tsx"}>{buttoncode}</Prism.Tab>
					<Prism.Tab label="Button without notification" icon={<ion-icon name="logo-javascript"></ion-icon>}
					           language={"tsx"}>{nonotifbuttoncode}</Prism.Tab>
					<Prism.Tab label="Affix 'Scroll to top' button" icon={<ion-icon name="logo-javascript"></ion-icon>}
					           language={"tsx"}>{AffixScrollToTop}</Prism.Tab>
				</Prism.Tabs>
				<Space h='xl'/>
				<Button component="div" color="gray" variant="outline" onClick={() =>
					notifications.showNotification({
						autoClose: 2500,
						title: 'title',
						message: 'message',
					})
				}>Button with notification</Button>
				<Space h='md'/>
				<Button component="div">Button without notification</Button>
				<Space h='xl'/>
				<PasswordStrength/>
				This is a quick page filled with a bunch of filler content while I decide what to do with this page,
				stay tuned for that!
				<LoginModal/>
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
			</main>
		</div>
	)
}
