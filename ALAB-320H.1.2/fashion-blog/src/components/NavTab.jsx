import Tab from "./Tab";

export function NavTab() {

    const tabs = ['Women\'s', 'Men\'s', 'On the Street', 'The Catwalk', 'AdWatch', 'About'];

    const items = [];
    for (let tab of tabs) {
        items.push(<Tab title={tab} />);
    }

    return (
        <div>
            {tabs}
        </div>
    );
}