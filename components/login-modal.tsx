import { useState } from 'react';
import { Modal, Button, Group } from '@mantine/core';
import {PasswordStrength} from "./password-strength";

export function LoginModal() {
    const [opened, setOpened] = useState(false);

    return (
        <>
            <Modal
                opened={opened}
                onClose={() => setOpened(false)}
                title="Introduce yourself!"
            >
                <PasswordStrength />
            </Modal>

            <Group position="center">
                <Button onClick={() => setOpened(true)}>Open Modal</Button>
            </Group>
        </>
    );
}