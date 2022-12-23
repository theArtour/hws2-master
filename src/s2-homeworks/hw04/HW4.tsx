import React from 'react'
import s2 from '../../s1-main/App.module.css'
import Stand from './Stand'

/*
* 1 - понять (и простить) SuperInputText
* 2 - в зависимости от типа и дизэйбла прицепить нужный класс в SuperButton.tsx (строка 21)
* 3 - дописать onChangeCallback в SuperCheckbox.tsx чтоб оба чекбокса работали на стенде
* 4 - сделать стили в соответствии с дизайном
* */

const HW4 = () => {
    type UserType = {
        [key:string]: { id: number, 'name': string }

    }
    const users:UserType = {
        "101":{id:101,'name':'artour'},
        "1001":{id:1001,'name':'grouv'},
        "1011":{id:1011,'name':'misha'},
    }
    let user ={id:100500,name:'mikel'}
    users[user.id] = user;
    return (
        <div id={'hw4'}>
            <div className={s2.hwTitle}>Homework #4</div>
            {/*демонстрация возможностей компонент:*/}
            <div className={s2.hw}>
                <Stand />
            </div>
        </div>
    )
}

export default HW4
