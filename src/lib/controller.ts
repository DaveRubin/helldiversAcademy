const keys: Record<string, string> = {
    'W': 'Up',
    'A': 'Left',
    'S': 'Down',
    'D': 'Right',
    'ARROWUP': 'Up',
    'ARROWLEFT': 'Left',
    'ARROWDOWN': 'Down',
    'ARROWRIGHT': 'Right',
}


export const listenToChanges = (dispatch: (action: any) => void) => {

    // Function to handle keydown events
    function handleKeydUp(event: any) {

        if (event.key.toUpperCase() === 'CONTROL') {
            dispatch({ toggle: false })
        }
    }
    function handleKeydown(event: any) {
        const pressedKey = keys[event.key.toUpperCase()];

        if (pressedKey) {
            dispatch({ pressedKey })
        }
        if (event.key.toUpperCase() === 'CONTROL') {
            dispatch({ toggle: true })
        }

    }
    window.addEventListener('keydown', handleKeydown);
    window.addEventListener('keyup', handleKeydUp);

    // Returning a cleanup function that removes the event listener
    return () => {
        window.removeEventListener('keydown', handleKeydown);
        window.removeEventListener('keyup', handleKeydUp);
    };
}