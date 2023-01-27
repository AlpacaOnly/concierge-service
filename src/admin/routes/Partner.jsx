import {useState} from 'react';
import {SearchForm} from '../../client/routes/Applications';
import { NavLink } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';


export default () => {
    const navigate = useNavigate();
    // const [showPartnerForm, setShowPartnerForm] = useState(false);
    return (
        <>      
                <span className="text-xl font-semibold pt-6 pl-6">Список партнеров</span>
                <div className="flex justify-between px-6 py-4">
                    <SearchForm/>

                    <div className="flex flex-row">
                        <Button icon="plus" text="Добавить партнера" onClick={() => navigate("/panel/add")}/>
                    </div>

                </div>
                <div className="flex flex-col justify-between h-full">
                    <PartnerTable/>
                    <div className="flex justify-center">
                        <Pagination/>
                    </div>
                </div>
                
        </>
    )
}


function PartnerTable() {
    const navigate = useNavigate();
    return (
        <table className="w-full text-xs lg:text-sm">
            <thead className="bg-[#F4F3F3] text-black/50 text-medium lg:text-sm text-xs uppercase h-10">
            <tr>
                <th scope="col" className="p-4"><Select/></th>
                <th scope="col">НАИМЕНОВАНИЕ</th>
                <th scope="col">ФОРМА ОРГАНИЗАЦИИ</th>
                <th scope="col">КОД</th>
                <th scope="col">ИИН</th>
                <th scope="col">Редактировать</th>
            </tr>
            </thead>
            <tbody className="text-center">
            <tr className="h-14 border-b">
                <td scope="row" className="pt-1"><Select/></td>
                <td>Astana Hub</td>
                <td>Товарищество с ограниченной ответственностью (ТОО)</td>
                <td>95</td>
                <td>120400192129</td>
                <td className="flex justify-center mt-2"><Button onClick={() => navigate("/panel/edit")} icon="edit" text="Редактировать"/></td>
            </tr>
            <tr className="h-14 border-b">
                <td scope="row" className="pt-1"><Select/></td>
                <td>Astana Hub</td>
                <td>Товарищество с ограниченной ответственностью (ТОО)</td>
                <td>95</td>
                <td>120400192129</td>
                <td className="flex justify-center mt-2"><Button onClick={() => navigate("/panel/edit")} icon="edit" text="Редактировать"/></td>
            </tr>
            <tr className="h-14 border-b">
                <td scope="row" className="pt-1"><Select/></td>
                <td>Astana Hub</td>
                <td>Товарищество с ограниченной ответственностью (ТОО)</td>
                <td>95</td>
                <td>120400192129</td>
                <td className="flex justify-center mt-2"><Button onClick={() => navigate("/panel/edit")} icon="edit" text="Редактировать"/></td>
            </tr>
            </tbody>
        </table>
    )
}

export function Pagination () {
    return (
        
    <nav aria-label="Page navigation">
        <ul className="inline-flex items-center -space-x-px">
            <li>
            <a href="#" className="block px-3 py-2 ml-0 leading-tight text-gray-500 bg-white border border-gray-300 rounded-l-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">
                <span className="sr-only">Previous</span>
                <svg aria-hidden="true" className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z" clipRule="evenodd"></path></svg>
            </a>
            </li>
            <li>
            <a href="#" className="px-3 py-2 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">1</a>
            </li>
            <li>
            <a href="#" className="px-3 py-2 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">2</a>
            </li>
            <li>
            <a href="#" aria-current="page" className="z-10 px-3 py-2 leading-tight text-blue-600 border border-blue-300 bg-blue-50 hover:bg-blue-100 hover:text-blue-700 dark:border-gray-700 dark:bg-gray-700 dark:text-white">3</a>
            </li>
            <li>
            <a href="#" className="px-3 py-2 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">4</a>
            </li>
            <li>
            <a href="#" className="px-3 py-2 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">5</a>
            </li>
            <li>
            <a href="#" className="block px-3 py-2 leading-tight text-gray-500 bg-white border border-gray-300 rounded-r-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">
                <span className="sr-only">Next</span>
                <svg aria-hidden="true" className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd"></path></svg>
            </a>
            </li>
        </ul>
    </nav>

    )
}

export function Select() {
    return (
        <input type="checkbox"></input>
    )
}

export function Button(props) {
    return (
        <button onClick={props.onClick} className="bg-[#007282] text-white w-fit rounded-xl  text-xs lg:text-sm px-2 py-2 flex flex-row "
                type={props.type}>
            <ButtonIcon name={props.icon}/>
            {props.text}
            </button>
    )
}

function PlusIcon() {
    return (
        <div className="p-1 pr-2">
            <svg width="12" height="12" viewBox="0 0 10 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                    d="M5.71432 1.5625C5.71432 1.2168 5.39512 0.9375 5.00004 0.9375C4.60495 0.9375 4.28575 1.2168 4.28575 1.5625V4.375H1.07146C0.676374 4.375 0.357178 4.6543 0.357178 5C0.357178 5.3457 0.676374 5.625 1.07146 5.625H4.28575V8.4375C4.28575 8.7832 4.60495 9.0625 5.00004 9.0625C5.39512 9.0625 5.71432 8.7832 5.71432 8.4375V5.625H8.92861C9.3237 5.625 9.64289 5.3457 9.64289 5C9.64289 4.6543 9.3237 4.375 8.92861 4.375H5.71432V1.5625Z"
                    fill="white"/>
            </svg>
        </div>
    )
}

function EditIcon() {
    return (
        <div className="pr-2">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                    d="M11 4.99999H6C5.46957 4.99999 4.96086 5.21071 4.58579 5.58578C4.21071 5.96085 4 6.46956 4 6.99999V18C4 18.5304 4.21071 19.0391 4.58579 19.4142C4.96086 19.7893 5.46957 20 6 20H17C17.5304 20 18.0391 19.7893 18.4142 19.4142C18.7893 19.0391 19 18.5304 19 18V13M17.586 3.58599C17.7705 3.39497 17.9912 3.24261 18.2352 3.13779C18.4792 3.03297 18.7416 2.9778 19.0072 2.97549C19.2728 2.97319 19.5361 3.02379 19.7819 3.12435C20.0277 3.22491 20.251 3.37342 20.4388 3.5612C20.6266 3.74899 20.7751 3.97229 20.8756 4.21809C20.9762 4.46388 21.0268 4.72724 21.0245 4.9928C21.0222 5.25836 20.967 5.5208 20.8622 5.7648C20.7574 6.00881 20.605 6.2295 20.414 6.41399L11.828 15H9V12.172L17.586 3.58599Z"
                    stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
        </div>
    )
}

function ButtonIcon({name}) {
    let Icon =
        name == "plus" ? (
            PlusIcon
        ) : name == "edit" ? (
            EditIcon
        ) : (
            <span/>
        );

    return <Icon/>;
}

function DeleteIcon() {
    return (
        <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path fillRule="evenodd" clipRule="evenodd"
                  d="M9 2C8.81434 2.0001 8.63237 2.05188 8.47447 2.14955C8.31658 2.24722 8.18899 2.38692 8.106 2.553L7.382 4H4C3.73478 4 3.48043 4.10536 3.29289 4.29289C3.10536 4.48043 3 4.73478 3 5C3 5.26522 3.10536 5.51957 3.29289 5.70711C3.48043 5.89464 3.73478 6 4 6V16C4 16.5304 4.21071 17.0391 4.58579 17.4142C4.96086 17.7893 5.46957 18 6 18H14C14.5304 18 15.0391 17.7893 15.4142 17.4142C15.7893 17.0391 16 16.5304 16 16V6C16.2652 6 16.5196 5.89464 16.7071 5.70711C16.8946 5.51957 17 5.26522 17 5C17 4.73478 16.8946 4.48043 16.7071 4.29289C16.5196 4.10536 16.2652 4 16 4H12.618L11.894 2.553C11.811 2.38692 11.6834 2.24722 11.5255 2.14955C11.3676 2.05188 11.1857 2.0001 11 2H9ZM7 8C7 7.73478 7.10536 7.48043 7.29289 7.29289C7.48043 7.10536 7.73478 7 8 7C8.26522 7 8.51957 7.10536 8.70711 7.29289C8.89464 7.48043 9 7.73478 9 8V14C9 14.2652 8.89464 14.5196 8.70711 14.7071C8.51957 14.8946 8.26522 15 8 15C7.73478 15 7.48043 14.8946 7.29289 14.7071C7.10536 14.5196 7 14.2652 7 14V8ZM12 7C11.7348 7 11.4804 7.10536 11.2929 7.29289C11.1054 7.48043 11 7.73478 11 8V14C11 14.2652 11.1054 14.5196 11.2929 14.7071C11.4804 14.8946 11.7348 15 12 15C12.2652 15 12.5196 14.8946 12.7071 14.7071C12.8946 14.5196 13 14.2652 13 14V8C13 7.73478 12.8946 7.48043 12.7071 7.29289C12.5196 7.10536 12.2652 7 12 7Z"
                  fill="black"/>
        </svg>
    )
}

function LeftArrowIcon () {
    return (
        <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path fill-rule="evenodd" clip-rule="evenodd" d="M12.707 5.293C12.8945 5.48053 12.9998 5.73484 12.9998 6C12.9998 6.26516 12.8945 6.51947 12.707 6.707L9.41403 10L12.707 13.293C12.8892 13.4816 12.99 13.7342 12.9877 13.9964C12.9854 14.2586 12.8803 14.5094 12.6948 14.6948C12.5094 14.8802 12.2586 14.9854 11.9964 14.9877C11.7342 14.99 11.4816 14.8892 11.293 14.707L7.29303 10.707C7.10556 10.5195 7.00024 10.2652 7.00024 10C7.00024 9.73484 7.10556 9.48053 7.29303 9.293L11.293 5.293C11.4806 5.10553 11.7349 5.00021 12 5.00021C12.2652 5.00021 12.5195 5.10553 12.707 5.293Z" fill="black"/>
        </svg>
        )
}

function RightArrowIcon () {
    return (
        <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path fill-rule="evenodd" clip-rule="evenodd" d="M7.29303 14.707C7.10556 14.5195 7.00024 14.2652 7.00024 14C7.00024 13.7348 7.10556 13.4805 7.29303 13.293L10.586 10L7.29303 6.70701C7.11087 6.51841 7.01008 6.26581 7.01236 6.00361C7.01463 5.74141 7.1198 5.4906 7.30521 5.30519C7.49062 5.11978 7.74143 5.01461 8.00363 5.01234C8.26583 5.01006 8.51843 5.11085 8.70703 5.29301L12.707 9.29301C12.8945 9.48054 12.9998 9.73485 12.9998 10C12.9998 10.2652 12.8945 10.5195 12.707 10.707L8.70703 14.707C8.5195 14.8945 8.26519 14.9998 8.00003 14.9998C7.73487 14.9998 7.48056 14.8945 7.29303 14.707Z" fill="black"/>
        </svg>
        )
}