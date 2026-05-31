import chefCloudLogo from "./images/chef-claude-icon.png"

export default function Header() {
    return (
        <header>
            <img src={chefCloudLogo} />
            <h1>Chef Claude</h1>
        </header>
    )
}