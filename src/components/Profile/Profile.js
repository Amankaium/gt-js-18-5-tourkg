import Mode from "../Mode/Mode";

export default function Profile({mode, setMode}) {
    return (<div>
        Профиль пользователя
        <Mode mode={mode} changeMode={setMode}/>    
    </div>)
}