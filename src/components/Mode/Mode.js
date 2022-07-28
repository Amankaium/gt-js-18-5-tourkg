import { useSelector, useDispatch } from 'react-redux'
import {changeMode} from '../../features/mode/modeSlice'


function Mode() {
    const mode = useSelector((state) => state.mode.current)
    const dispatch = useDispatch()

    let changeModeText = mode === "day" ? "Ночной режим" : "Дневной режим"
    
    const buttonHandler = () => {
        dispatch(changeMode())
    }

    return <button onClick={buttonHandler}>{ changeModeText }</button>
}


export default Mode;