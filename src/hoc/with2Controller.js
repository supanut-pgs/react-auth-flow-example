export const with2Controller = (Controller1) => (Controller2) => (Component) => () => {
    return (
        <Controller1>
            <Controller2>
                <Component />
            </Controller2>
        </Controller1>
    )
}