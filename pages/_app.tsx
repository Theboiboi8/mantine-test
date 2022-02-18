import '../styles/globals.css';
import styles from '../styles/Home.module.css';
import Head from 'next/head';
import Script from "next/script";
import {MantineProvider, ColorSchemeProvider, AppShell, Header, ActionIcon, Group, Center, Grid} from '@mantine/core';
import { NotificationsProvider } from '@mantine/notifications';
import { ModalsProvider } from "@mantine/modals";
import {ColorScheme} from "@mantine/core";
import {useColorScheme, useLocalStorageValue} from '@mantine/hooks';

export default function App(props) {
	const { Component, pageProps } = props;
	const [colorScheme, setColorScheme] = useLocalStorageValue<ColorScheme>({
		key: 'dark-mode',
		defaultValue: 'dark',
	});
	const toggleColorScheme = (value?: ColorScheme) =>
		setColorScheme(value || (colorScheme === 'dark' ? 'light' : 'dark'));
	const projectName = "Project Name";
	const dark = colorScheme === 'dark';

	return (
		<>
			<Head>
				<title>Page title</title>
				<meta name="viewport" content="minimum-scale=1, initial-scale=1, width=device-width" />
			</Head>

			<Script type="module" src="https://unpkg.com/ionicons@5.5.2/dist/ionicons/ionicons.esm.js"></Script>
			<Script noModule src="https://unpkg.com/ionicons@5.5.2/dist/ionicons/ionicons.js"></Script>

			<ColorSchemeProvider colorScheme={colorScheme} toggleColorScheme={toggleColorScheme}>
				<MantineProvider
					withGlobalStyles
					withNormalizeCSS
					theme={{ colorScheme }}
				>
					<NotificationsProvider>
						<ModalsProvider>
							<AppShell
								padding="md"
								fixed
								header={<Header height={55} padding={"sm"}><Grid>
									<Grid.Col span={1}>{projectName}</Grid.Col>
									<Grid.Col span={1}>
										<ActionIcon
											variant="outline"
											color={dark ? 'yellow' : 'blue'}
											onClick={() => toggleColorScheme()}
											title="Toggle color scheme"
										>
											{dark ? (
												<ion-icon name="sunny-outline"></ion-icon>
											) : (
												<ion-icon name="moon-outline"></ion-icon>
											)}
										</ActionIcon>
									</Grid.Col>
								</Grid>
								</Header>}
								styles={(theme) => ({
									main: { backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[8] : theme.colors.gray[0] },
								})}
							>
								<Component {...pageProps} />
							</AppShell>
						</ModalsProvider>
					</NotificationsProvider>
				</MantineProvider>
			</ColorSchemeProvider>
		</>
	);
}
