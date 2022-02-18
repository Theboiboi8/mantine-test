import { useWindowScroll } from '@mantine/hooks';
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
}

