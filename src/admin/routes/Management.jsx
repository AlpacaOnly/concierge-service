import {NavLink} from 'react-router-dom'
import { useState } from 'react';
import { SearchForm } from '../../client/routes/Applications';

export const Panel = () => {
    const [showPartnerForm, setShowPartnerForm] = useState(false);
    return (
        <>
        <div className="flex flex-1 overflow-hidden h-screen max-w-screen-2xl mt-8 pb-6 pl-8"> 
            <div className="font-[Inter] w-full xl:w-1/5 lg:w-1/3 md:w-1/3 bg-white shadow-md rounded-xl mr-4 p-4">

            <ul
                aria-labelledby="mobileMenuToggle"
                className="list-none flex flex-col"
            >
            
            <NavItem
            text="Admin"
            icon="admin"
            />
            
            <div className="group inline-block relative">
                <div className="flex flex-row hover:bg-[#F3F4F6] hover:rounded-xl focus:bg-[#F3F4F6] focus:rounded-xl">
                    <NavItem
                    text="Управление"
                    icon="managing"
                    link="/panel/managing"/>
                    <div className="group inline-block relative">
                    <NavIcon name="arrow"/>
                    </div>
                </div>
                <ul className="hidden group-hover:flex flex-col text-sm">
                    <li className="py-2 hover:bg-[#F3F4F6] hover:rounded-xl pl-[54px]"><a>Менеджеры</a></li>
                    <li className="py-2 hover:bg-[#F3F4F6] hover:rounded-xl pl-[54px]"><a>Партнеры</a></li>
                    <li className="py-2 hover:bg-[#F3F4F6] hover:rounded-xl pl-[54px]"><a>Клиенты</a></li>
                </ul>
            </div>

            <div className=" hover:bg-[#F3F4F6] hover:rounded-xl focus:bg-[#F3F4F6] focus:rounded-xl">
                <NavItem
                    text="Статистика"
                    icon="statistic"
                    link="/panel/statistic"/>
            </div>
            
            
            <div className=" hover:bg-[#F3F4F6] hover:rounded-xl focus:bg-[#F3F4F6] focus:rounded-xl">
                <NavItem
                text="Settings"
                icon="settings"
                link="/panel/settings"/>
            </div>
            
            </ul>
            </div>

            <div className="hidden lg:flex md:flex flex-col lg:w-4/5 md:w-4/5 sm:w-4/5 xs:w-4/5 bg-white shadow-md rounded-xl mr-4">
                <div className="flex justify-between m-2">
                <SearchForm/>

                <button><DeleteIcon/></button>
                
                {/* {showPartnerForm ? (
                <>
                    <div className="form-popup">
                        <form className="container">
                            <h1>Добавить партнера</h1>
                            <label htmlFor="name"><b>Название компании</b></label>
                            <input type="text" placeholder="Введите название компании" name="name" required></input>

                            <label htmlFor="OrganizationForm"><b>Форма Организации</b></label>
                            <input type="password" placeholder="ТОО/ИП/АО" name="OrganizationForm" required></input>

                            <label htmlFor="iin"><b>ИИН</b></label>
                            <input type="number" placeholder="Введите ИИН" name="iin" required></input>

                            <label htmlFor="contract"><b>Договор</b></label>
                            <input type="file" className="block w-full text-sm text-slate-500 file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:bg-violet-50 file:text-violet-700 file:text-sm file:font-semibold hover:file:bg-violet-100"></input>

                            <Button type="submit" name="Сохранить"/>
                            <Button type="button" onClick={() => setShowModal(false)} name="Отменить"/>
                        </form>
                    </div>
                </>
                ) : null} */}

                <Button icon="plus" text="Добавить партнера" onClick={()=>setShowPartnerForm(true)}/>
                </div>
        
                <PartnerTable/>
            </div>
           
        </div>
        </>
    )
}

function PartnerTable () {
    return (
        <table className="w-full text-xs lg:text-sm">
            <thead className="bg-[#F4F3F3] text-black/50 text-medium lg:text-sm text-xs uppercase h-10">
                <tr>
                    <th scope="col"  className="p-4"><Select/></th>
                    <th scope="col" >НАИМЕНОВАНИЕ</th>
                    <th scope="col" >ФОРМА ОРГАНИЗАЦИИ</th>
                    <th scope="col" >КОД</th>
                    <th scope="col" >ИИН</th>
                    <th scope="col" >Редактировать</th>
                </tr>
            </thead>
            <tbody className="text-center">
                <tr className="h-14 border-b">
                    <td scope="row"  className="pt-1"><Select/></td>
                    <td>Astana Hub</td>
                    <td>Товарищество с ограниченной ответственностью (ТОО)</td>
                    <td>95</td>
                    <td>120400192129</td>
                    <td className="flex justify-center mt-2"><Button icon="edit" text="Редактировать"/></td>
                </tr>
                <tr className="h-14 border-b">
                    <td scope="row" className="pt-1"><Select/></td>
                    <td>Astana Hub</td>
                    <td>Товарищество с ограниченной ответственностью (ТОО)</td>
                    <td>95</td>
                    <td>120400192129</td>
                    <td className="flex justify-center mt-2"><Button icon="edit" text="Редактировать"/></td>
                </tr>
                <tr className="h-14 border-b">
                    <td scope="row"  className="pt-1"><Select/></td>
                    <td>Astana Hub</td>
                    <td>Товарищество с ограниченной ответственностью (ТОО)</td>
                    <td>95</td>
                    <td>120400192129</td>
                    <td className="flex justify-center mt-2"><Button icon="edit" text="Редактировать"/></td>
                </tr>
            </tbody>
        </table>
    )
}

function NavItem (props) {
    return (
    <>
    <li onClick={props.onClick}>
        <NavLink to={props.link || '#'}>
            {({ isActive }) => (
            <>
            <div className="flex gap-4 py-2 p-4">
                <NavIcon name={props.icon} active={isActive} />
                <span
                    className={`text-sm lg:text-base font-regular align-middle ${
                    isActive ? "text-emerald-700" : "text-black"
                    }`}
                >{props.text}
                </span>
                </div>
            </>
        )}
        </NavLink>   
    </li>
        </>
    );
}

function NavIcon ({ name, active }) {
    let Icon =
    name == "settings" ? (
      SettingsIcon
    ) : name == "managing" ? (
      ManagingIcon
    ) : name == "statistic" ? (
      StatisticIcon
    ) : name == "admin" ? (
      AdminIcon
    ) : name == "arrow" ? (
        ArrowUpIcon
    ) : (
      <span />
    );
    

  return <Icon active={active} />;
}

function DropDown () {
    return (
        <ul className="dropdown-content absolute hidden ">
            <li><a>Менеджеры</a></li>
            <li><a>Партнеры</a></li>
            <li><a>Клиенты</a></li>
        </ul>
    )
}

function Select() {
    return (
        <input type="checkbox"></input>
    )
}

function Button (props) {
    return (
        <button className="bg-[#007282] text-white w-fit rounded-xl  text-xs lg:text-sm px-4 py-2 flex flex-row "
        type={props.type} onClick={props.onClick}>
            <ButtonIcon name={props.icon}/>
        {props.text}</button>
    )
}

function AdminIcon () {
    return (  
    <svg width="22" height="22" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path fillRule="evenodd" clipRule="evenodd" d="M20 10C20 15.5228 15.5228 20 10 20C4.47715 20 0 15.5228 0 10C0 4.47715 4.47715 0 10 0C15.5228 0 20 4.47715 20 10ZM13 7C13 8.65685 11.6569 10 10 10C8.34315 10 7 8.65685 7 7C7 5.34315 8.34315 4 10 4C11.6569 4 13 5.34315 13 7ZM9.99998 18.5C11.784 18.5 13.4397 17.9504 14.8069 17.0112C15.4108 16.5964 15.6688 15.8062 15.3178 15.1632C14.59 13.8303 13.0902 13 9.99994 13C6.90969 13 5.40997 13.8302 4.68214 15.1632C4.33105 15.8062 4.5891 16.5963 5.19296 17.0111C6.56018 17.9503 8.2159 18.5 9.99998 18.5Z" fill="#007282"/>
    </svg>
    );
}

function ManagingIcon () {
    return (
    <svg width="22" height="24" viewBox="0 0 18 20" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path fillRule="evenodd" clipRule="evenodd" d="M8.99999 0.399994C6.34919 0.399994 4.19999 2.54919 4.19999 5.19999V6.39999H2.99999C2.38799 6.39999 1.87441 6.85961 1.80721 7.46801L0.607208 18.268C0.570008 18.6064 0.678 18.946 0.906 19.2004C1.134 19.4548 1.45919 19.6 1.79999 19.6H16.2C16.5408 19.6 16.866 19.4548 17.094 19.2004C17.322 18.946 17.43 18.6064 17.3928 18.268L16.1928 7.46801C16.1256 6.85961 15.612 6.39999 15 6.39999H13.8V5.19999C13.8 2.54919 11.6508 0.399994 8.99999 0.399994ZM11.4 6.39999V5.19999C11.4 3.87399 10.326 2.79999 8.99999 2.79999C7.67399 2.79999 6.59999 3.87399 6.59999 5.19999V6.39999H11.4ZM4.19999 9.99999C4.19999 9.33759 4.73759 8.79999 5.39999 8.79999C6.06239 8.79999 6.59999 9.33759 6.59999 9.99999C6.59999 10.6624 6.06239 11.2 5.39999 11.2C4.73759 11.2 4.19999 10.6624 4.19999 9.99999ZM12.6 8.79999C11.9376 8.79999 11.4 9.33759 11.4 9.99999C11.4 10.6624 11.9376 11.2 12.6 11.2C13.2624 11.2 13.8 10.6624 13.8 9.99999C13.8 9.33759 13.2624 8.79999 12.6 8.79999Z"
     fill="#1C274C" fillOpacity="0.7"/>
    </svg>
    )
}

function StatisticIcon () {
    return (
        
    <svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M6.75 14C6.75 13.5858 6.41421 13.25 6 13.25C5.58579 13.25 5.25 13.5858 5.25 14V17C5.25 17.4142 5.58579 17.75 6 17.75C6.41421 17.75 6.75 17.4142 6.75 17V14Z" 
        fillOpacity="0.7" fill="#1C274C"/>
        <path d="M11 10.25C11.4142 10.25 11.75 10.5858 11.75 11V17C11.75 17.4142 11.4142 17.75 11 17.75C10.5858 17.75 10.25 17.4142 10.25 17V11C10.25 10.5858 10.5858 10.25 11 10.25Z"
        fillOpacity="0.7" fill="#1C274C"/>
        <path d="M16.75 8C16.75 7.58579 16.4142 7.25 16 7.25C15.5858 7.25 15.25 7.58579 15.25 8V17C15.25 17.4142 15.5858 17.75 16 17.75C16.4142 17.75 16.75 17.4142 16.75 17V8Z"
        fillOpacity="0.7" fill="#1C274C"/>
        <path fillRule="evenodd" clipRule="evenodd" d="M10.9426 0.25C8.63423 0.249987 6.82519 0.249977 5.41371 0.439747C3.96897 0.633986 2.82895 1.03933 1.93414 1.93414C1.03933 2.82895 0.633986 3.96897 0.439747 5.41371C0.249977 6.82519 0.249987 8.63423 0.25 10.9426V11.0574C0.249987 13.3658 0.249977 15.1748 0.439747 16.5863C0.633986 18.031 1.03933 19.1711 1.93414 20.0659C2.82895 20.9607 3.96897 21.366 5.41371 21.5603C6.82519 21.75 8.63423 21.75 10.9426 21.75H11.0574C13.3658 21.75 15.1748 21.75 16.5863 21.5603C18.031 21.366 19.1711 20.9607 20.0659 20.0659C20.9607 19.1711 21.366 18.031 21.5603 16.5863C21.75 15.1748 21.75 13.3658 21.75 11.0574V10.9426C21.75 8.63423 21.75 6.82519 21.5603 5.41371C21.366 3.96897 20.9607 2.82895 20.0659 1.93414C19.1711 1.03933 18.031 0.633986 16.5863 0.439747C15.1748 0.249977 13.3658 0.249987 11.0574 0.25H10.9426ZM2.9948 2.9948C3.56445 2.42514 4.33517 2.09825 5.61358 1.92637C6.91356 1.75159 8.62178 1.75 11 1.75C13.3782 1.75 15.0864 1.75159 16.3864 1.92637C17.6648 2.09825 18.4355 2.42514 19.0052 2.9948C19.5749 3.56445 19.9018 4.33517 20.0736 5.61358C20.2484 6.91356 20.25 8.62178 20.25 11C20.25 13.3782 20.2484 15.0864 20.0736 16.3864C19.9018 17.6648 19.5749 18.4355 19.0052 19.0052C18.4355 19.5749 17.6648 19.9018 16.3864 20.0736C15.0864 20.2484 13.3782 20.25 11 20.25C8.62178 20.25 6.91356 20.2484 5.61358 20.0736C4.33517 19.9018 3.56445 19.5749 2.9948 19.0052C2.42514 18.4355 2.09825 17.6648 1.92637 16.3864C1.75159 15.0864 1.75 13.3782 1.75 11C1.75 8.62178 1.75159 6.91356 1.92637 5.61358C2.09825 4.33517 2.42514 3.56445 2.9948 2.9948Z"
        fillOpacity="0.7" fill="#1C274C"/>
    </svg>

    ) 
}

function SettingsIcon () {
    return (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M13.675 4.317C13.249 2.561 10.751 2.561 10.325 4.317C10.049 5.452 8.749 5.99 7.753 5.382C6.209 4.442 4.443 6.209 5.383 7.752C5.5243 7.98375 5.60889 8.24559 5.62987 8.51621C5.65085 8.78683 5.60764 9.05859 5.50375 9.30935C5.39985 9.56011 5.23822 9.7828 5.032 9.95929C4.82578 10.1358 4.5808 10.2611 4.317 10.325C2.561 10.751 2.561 13.249 4.317 13.675C4.58056 13.7391 4.82529 13.8645 5.03127 14.0409C5.23726 14.2174 5.3987 14.44 5.50247 14.6906C5.60624 14.9412 5.64942 15.2128 5.62848 15.4832C5.60755 15.7537 5.5231 16.0153 5.382 16.247C4.442 17.791 6.209 19.557 7.752 18.617C7.98375 18.4757 8.24559 18.3911 8.51621 18.3701C8.78683 18.3491 9.05859 18.3924 9.30935 18.4963C9.56011 18.6001 9.7828 18.7618 9.95929 18.968C10.1358 19.1742 10.2611 19.4192 10.325 19.683C10.751 21.439 13.249 21.439 13.675 19.683C13.7391 19.4194 13.8645 19.1747 14.0409 18.9687C14.2174 18.7627 14.44 18.6013 14.6906 18.4975C14.9412 18.3938 15.2128 18.3506 15.4832 18.3715C15.7537 18.3924 16.0153 18.4769 16.247 18.618C17.791 19.558 19.557 17.791 18.617 16.248C18.4757 16.0162 18.3911 15.7544 18.3701 15.4838C18.3491 15.2132 18.3924 14.9414 18.4963 14.6907C18.6001 14.4399 18.7618 14.2172 18.968 14.0407C19.1742 13.8642 19.4192 13.7389 19.683 13.675C21.439 13.249 21.439 10.751 19.683 10.325C19.4194 10.2609 19.1747 10.1355 18.9687 9.95905C18.7627 9.78258 18.6013 9.55999 18.4975 9.30938C18.3938 9.05877 18.3506 8.78721 18.3715 8.51677C18.3924 8.24634 18.4769 7.98466 18.618 7.753C19.558 6.209 17.791 4.443 16.248 5.383C16.0162 5.5243 15.7544 5.60889 15.4838 5.62987C15.2132 5.65085 14.9414 5.60764 14.6907 5.50375C14.4399 5.39985 14.2172 5.23822 14.0407 5.032C13.8642 4.82578 13.7389 4.5808 13.675 4.317Z"
        stroke="#1C274C" strokeOpacity="0.7" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M14.1213 14.1213C14.6839 13.5587 15 12.7956 15 12C15 11.2044 14.6839 10.4413 14.1213 9.87868C13.5587 9.31607 12.7956 9 12 9C11.2044 9 10.4413 9.31607 9.87868 9.87868C9.31607 10.4413 9 11.2044 9 12C9 12.7956 9.31607 13.5587 9.87868 14.1213C10.4413 14.6839 11.2044 15 12 15C12.7956 15 13.5587 14.6839 14.1213 14.1213Z"
        stroke="#1C274C" strokeOpacity="0.7" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
    )
}

function PlusIcon () {
    return (
        <div className="p-1 pr-2">
            <svg width="12" height="12" viewBox="0 0 10 10" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M5.71432 1.5625C5.71432 1.2168 5.39512 0.9375 5.00004 0.9375C4.60495 0.9375 4.28575 1.2168 4.28575 1.5625V4.375H1.07146C0.676374 4.375 0.357178 4.6543 0.357178 5C0.357178 5.3457 0.676374 5.625 1.07146 5.625H4.28575V8.4375C4.28575 8.7832 4.60495 9.0625 5.00004 9.0625C5.39512 9.0625 5.71432 8.7832 5.71432 8.4375V5.625H8.92861C9.3237 5.625 9.64289 5.3457 9.64289 5C9.64289 4.6543 9.3237 4.375 8.92861 4.375H5.71432V1.5625Z" fill="white"/>
            </svg>
        </div>
    )
}

function EditIcon () {
    return (
        <div className="pr-2">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M11 4.99999H6C5.46957 4.99999 4.96086 5.21071 4.58579 5.58578C4.21071 5.96085 4 6.46956 4 6.99999V18C4 18.5304 4.21071 19.0391 4.58579 19.4142C4.96086 19.7893 5.46957 20 6 20H17C17.5304 20 18.0391 19.7893 18.4142 19.4142C18.7893 19.0391 19 18.5304 19 18V13M17.586 3.58599C17.7705 3.39497 17.9912 3.24261 18.2352 3.13779C18.4792 3.03297 18.7416 2.9778 19.0072 2.97549C19.2728 2.97319 19.5361 3.02379 19.7819 3.12435C20.0277 3.22491 20.251 3.37342 20.4388 3.5612C20.6266 3.74899 20.7751 3.97229 20.8756 4.21809C20.9762 4.46388 21.0268 4.72724 21.0245 4.9928C21.0222 5.25836 20.967 5.5208 20.8622 5.7648C20.7574 6.00881 20.605 6.2295 20.414 6.41399L11.828 15H9V12.172L17.586 3.58599Z" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
        </div>
    )
}

function ButtonIcon ({name}) {
    let Icon =
    name == "plus" ? (
      PlusIcon
    ) : name == "edit" ? (
      EditIcon
    ) : (
        <span />
    );

  return <Icon />;
}

function ArrowUpIcon () {
    return (
        <div className="mt-2 ml-16">
        <svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M4.58334 13.75L11 7.33334L17.4167 13.75" stroke="#1C274C" strokeOpacity="0.7" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
        </div>
    )
}

function DeleteIcon () {
    return (
        <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path fillRule="evenodd" clipRule="evenodd" d="M9 2C8.81434 2.0001 8.63237 2.05188 8.47447 2.14955C8.31658 2.24722 8.18899 2.38692 8.106 2.553L7.382 4H4C3.73478 4 3.48043 4.10536 3.29289 4.29289C3.10536 4.48043 3 4.73478 3 5C3 5.26522 3.10536 5.51957 3.29289 5.70711C3.48043 5.89464 3.73478 6 4 6V16C4 16.5304 4.21071 17.0391 4.58579 17.4142C4.96086 17.7893 5.46957 18 6 18H14C14.5304 18 15.0391 17.7893 15.4142 17.4142C15.7893 17.0391 16 16.5304 16 16V6C16.2652 6 16.5196 5.89464 16.7071 5.70711C16.8946 5.51957 17 5.26522 17 5C17 4.73478 16.8946 4.48043 16.7071 4.29289C16.5196 4.10536 16.2652 4 16 4H12.618L11.894 2.553C11.811 2.38692 11.6834 2.24722 11.5255 2.14955C11.3676 2.05188 11.1857 2.0001 11 2H9ZM7 8C7 7.73478 7.10536 7.48043 7.29289 7.29289C7.48043 7.10536 7.73478 7 8 7C8.26522 7 8.51957 7.10536 8.70711 7.29289C8.89464 7.48043 9 7.73478 9 8V14C9 14.2652 8.89464 14.5196 8.70711 14.7071C8.51957 14.8946 8.26522 15 8 15C7.73478 15 7.48043 14.8946 7.29289 14.7071C7.10536 14.5196 7 14.2652 7 14V8ZM12 7C11.7348 7 11.4804 7.10536 11.2929 7.29289C11.1054 7.48043 11 7.73478 11 8V14C11 14.2652 11.1054 14.5196 11.2929 14.7071C11.4804 14.8946 11.7348 15 12 15C12.2652 15 12.5196 14.8946 12.7071 14.7071C12.8946 14.5196 13 14.2652 13 14V8C13 7.73478 12.8946 7.48043 12.7071 7.29289C12.5196 7.10536 12.2652 7 12 7Z" fill="black"/>
        </svg>
    )
}

