import { Select } from "../../admin/routes/Partner"
import {Button} from "../../admin/routes/Partner"
import { SearchForm } from "../../client/routes/Applications"

export default () => {
    return (
        <>
        <div className="p-6">
            <h1 className="text-xl font-semibold pb-4">Список менеджеров</h1>
            <SearchForm/>
        </div>
        <ManagerTable/>
        </>
    )
}

function ManagerTable () {
    return (
    <table className="w-full text-xs lg:text-sm">
        <thead className="bg-[#F4F3F3] text-black/50 text-medium lg:text-sm text-xs uppercase h-10">
        <tr>
            <th scope="col" className="p-4"><Select/></th>
            <th scope="col">ФИО</th>
            <th scope="col">Почта</th>
            <th scope="col">Количество заказов</th>
            <th scope="col">Специализация</th>
            <th scope="col">Редактировать</th>
        </tr>
        </thead>
        <tbody className="text-center">
        <tr className="h-14 border-b">
            <td scope="row" className="pt-1"><Select/></td>
            <td>Неспаев Диас</td>
            <td>dias.nespayev@gmail.com</td>
            <td>95</td>
            <td>Отели</td>
            <td className="flex justify-center mt-2"><Button onClick={() => navigate("/panel/edit")} icon="edit" text="Редактировать"/></td>
        </tr>
        </tbody>
    </table>
)
}