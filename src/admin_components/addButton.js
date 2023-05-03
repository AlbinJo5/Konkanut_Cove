import { Button } from "@nextui-org/react";

export default function AddButton({ type = "", onClick, children }) {


    return (
        <Button
            color={"success"}
            css={{
                color: "white",
                width: "10px",
                '@md': {
                    width: '200px',
                },
            }}
            type={type}
            onClick={onClick}
        >
            {children}
        </Button>
    );
}
