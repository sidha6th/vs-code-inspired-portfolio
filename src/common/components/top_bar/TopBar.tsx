import style from './TopBar.module.css'

export default function TopBar() {
    return <div id={style.topbar}>
        <div id={style.windowController} className={style.red}></div>
        <div id={style.windowController} className={style.yellow}></div>
        <div id={style.windowController} className={style.green}></div>
    </div>
}