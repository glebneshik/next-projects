import { About } from "@/widgets/about"
import { Adventures } from "@/widgets/adventures"
import { HeroMain } from "@/widgets/hero-main"
import { Quests } from "@/widgets/quests"
// import { Contacts } from "@/widgets/contacts"

export const MainPage = () => {
    return (
        <>
            <HeroMain />
            <Adventures />
            <About />
            <Quests />
            {/* <Contacts/> */}
        </>
    )
}