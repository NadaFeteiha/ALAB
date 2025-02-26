import Article from "./Article"
import articalList from "../data.js"

export default function ArticalsView() {
    const list = []
    for (let i = 0; i < articalList.length; i++) {
        list.push(<Article article={articalList[i]} />)
    }
    return (<div className='articals-view'>{list}</div>)
}