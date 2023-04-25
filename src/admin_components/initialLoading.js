import { Loading } from "@nextui-org/react";
function InitialLoading() {
    return (
        <div style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            height: '100vh',
            width: '100vw',
            // transparent background
            backgroundColor: 'rgba(0,0,0,0.2)',
            position: 'fixed',
            top: 0,
            left: 0,
            zIndex: 100000
        }} >

            <Loading size="xl"
                loadingCss={{
                    $$loadingColor: "#095000",
                }}
            />
        </div>
    )
}

export default InitialLoading