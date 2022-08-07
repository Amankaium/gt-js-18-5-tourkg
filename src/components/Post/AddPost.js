import { useState } from "react"

export default function AddPost() {
    const [post, setPost] = useState({
        title: '',
        body: '',
        userId: 1,
    })


    function textHandler ( event ) {
        setPost({
            ...post,
            [event.target.name]: event.target.value
        })
    }

    const sendForm = (event) => {
        event.preventDefault()
        fetch('https://jsonplaceholder.typicode.com/asdfasdfasfd', {
            method: 'POST',
            body: JSON.stringify(post),
            headers: {
                'Content-type': 'application/json; charset=UTF-8',
            },
            })
            .then((response) => {
                console.log(response)
                if (response.status === 404) {
                    throw Error("Не найдено")
                }
                response.json()
            })
            .then((json) => console.log(json))
            // .catch(error => {
            //     console.log(error)
            //     // if (response.status === 404) {
            //     //     alert("Неверный url-адрес")
            //     // }
            // })
    }


    return (<div>
        <form onSubmit={sendForm}>
            <div>
                <input required type="text" name="title" placeholder="Заголовок" value={post.title} onChange={textHandler}/>
            </div>
            <div>
                <textarea required name="body" col='10' rows='3' placeholder="Текст поста" value={post.body} onChange={textHandler}></textarea>
            </div>
            <div>
                <button>Отправить</button>
            </div>
        </form>
    </div>)
}