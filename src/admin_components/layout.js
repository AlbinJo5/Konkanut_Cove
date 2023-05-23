import { useEffect, useState } from "react"
import { LocalStorage } from "./core/localStorage"
import InitialLoading from "./initialLoading"
import { useRouter } from "next/router"
import { Navbar, Link, Text, Avatar, Dropdown, Container } from "@nextui-org/react";
import Image from "next/image";
import { ADMIN_ROUTES } from "./core/routes";
import styles from "@/styles/admin_styles/layout.module.scss"


function Layout({ children }) {

    const [isLoading, setIsLoading] = useState(false)
    const router = useRouter()

    const collapseItems = [
        "Dashboard",
        "Utilities",
        "Packages",
        "Hotels",
        "Contacts",
        "Enquiries",
    ];

    useEffect(() => {

        var expiry = localStorage.getItem(LocalStorage.adminAuthExpiry)
        if (expiry) {
            if (new Date(expiry) > new Date()) {
                setTimeout(() => {
                    setIsLoading(false)
                }, 1000)
            } else {
                router.push(ADMIN_ROUTES.AUTH)
            }
        }
        else {
            router.push(ADMIN_ROUTES.AUTH)
        }
    }, [router])


    return (
        <div  >
            {isLoading && <InitialLoading />}
            <div>
                <Navbar isBordered shouldHideOnScroll maxWidth={"fluid"} variant="sticky" css={{
                    zIndex: 300,
                }}>
                    <Navbar.Toggle showIn="md" />
                    <Navbar.Brand
                        css={{
                            "@xs": {
                                w: "12%",
                            },
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                            marginLeft: "10%",
                            cursor: "pointer",
                        }}

                        onClick={() => router.push(ADMIN_ROUTES.DASHBOARD)}
                    >


                        <Image src="/logo.svg" alt="logo" width={1000} height={1000} style={{
                            width: "max-content",
                            height: "2rem",
                            marginRight: "0.5rem",
                        }} />
                        <Text b color="inherit" hideIn="xs">
                            KONKANUT COVE
                        </Text>

                    </Navbar.Brand>
                    <Navbar.Content
                        enableCursorHighlight
                        activeColor="success"
                        hideIn="md"
                        variant="highlight-rounded"

                    >
                        <Navbar.Link isActive={router.pathname === ADMIN_ROUTES.DASHBOARD} onClick={() => {
                            router.push(ADMIN_ROUTES.DASHBOARD)
                        }} >Dashboard</Navbar.Link>
                        <Navbar.Link isActive={router.pathname === ADMIN_ROUTES.UTILITIES} onClick={() => {
                            router.push(ADMIN_ROUTES.UTILITIES)
                        }} >Utilities</Navbar.Link>
                        <Navbar.Link isActive={router.pathname === ADMIN_ROUTES.PACKAGES} onClick={() => {
                            router.push(ADMIN_ROUTES.PACKAGES)
                        }} >Packages</Navbar.Link>
                        <Navbar.Link isActive={router.pathname === ADMIN_ROUTES.HOTELS} onClick={() => {
                            router.push(ADMIN_ROUTES.HOTELS)
                        }} >Hotels</Navbar.Link>
                        <Navbar.Link isActive={router.pathname === ADMIN_ROUTES.CONTACTS} onClick={() => {
                            router.push(ADMIN_ROUTES.CONTACTS)
                        }} >Contacts</Navbar.Link>
                        <Navbar.Link isActive={router.pathname === ADMIN_ROUTES.ENQUIRIES} onClick={() => {
                            router.push(ADMIN_ROUTES.ENQUIRIES)
                        }} >Enquiries</Navbar.Link>
                    </Navbar.Content>
                    <Navbar.Content
                        css={{
                            "@xs": {
                                w: "12%",
                                jc: "flex-end",
                                width: "max-content",

                            },
                            "@md": {
                                w: "12%",
                                jc: "flex-end",
                                width: "max-content",

                            },

                            "@xl": {
                                width: "max-content",

                                display: "flex",
                                alignItems: "center",
                                justifyContent: "center",
                                marginRight: "10%"
                            },

                            "@lg": {
                                width: "max-content",


                                display: "flex",
                                alignItems: "center",
                                justifyContent: "center",
                                marginRight: "10%"
                            }



                        }}

                    >
                        <Dropdown placement="bottom-right" >
                            <Navbar.Item    >
                                <Dropdown.Trigger>
                                    <Avatar
                                        bordered
                                        as="button"
                                        color="secondary"
                                        size="md"
                                        src="https://i.pravatar.cc/150?u=a042581f4e29026704d"

                                    />
                                </Dropdown.Trigger>
                            </Navbar.Item>
                            <Dropdown.Menu
                                aria-label="User menu actions"
                                color="secondary"
                                onAction={(actionKey) => console.log({ actionKey })}
                            >
                                <Dropdown.Item key="profile" css={{ height: "$18" }}>
                                    <Text b color="inherit" css={{ d: "flex" }}>
                                        Signed in as
                                    </Text>
                                    <Text b color="inherit" css={{ d: "flex" }}>
                                        zoey@example.com
                                    </Text>
                                </Dropdown.Item>
                                <Dropdown.Item key="settings" withDivider>
                                    My Settings
                                </Dropdown.Item>
                                <Dropdown.Item key="team_settings">Team Settings</Dropdown.Item>
                                <Dropdown.Item key="analytics" withDivider>
                                    Analytics
                                </Dropdown.Item>
                                <Dropdown.Item key="system">System</Dropdown.Item>
                                <Dropdown.Item key="configurations">Configurations</Dropdown.Item>
                                <Dropdown.Item key="help_and_feedback" withDivider>
                                    Help & Feedback
                                </Dropdown.Item>
                                <Dropdown.Item key="logout" withDivider color="error">
                                    Log Out
                                </Dropdown.Item>
                            </Dropdown.Menu>
                        </Dropdown>
                    </Navbar.Content>
                    <Navbar.Collapse>
                        {collapseItems.map((item, index) => (
                            <Navbar.CollapseItem
                                key={item}
                                activeColor="secondary"
                                isActive={
                                    router.pathname === "/admin/" + item.toLocaleLowerCase()
                                }
                            >
                                <Link
                                    color="inherit"
                                    css={{
                                        minWidth: "100%",
                                    }}
                                    href={
                                        "/admin/" + item.toLocaleLowerCase()
                                    }
                                >
                                    {item}
                                </Link>
                            </Navbar.CollapseItem>
                        ))}
                    </Navbar.Collapse>
                </Navbar>
                <div className={styles.container}>
                    <div className={styles.children} >

                        {children}
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Layout