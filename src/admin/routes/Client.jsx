import { SearchForm } from "../../client/routes/Applications"
export default () => {
    return (
        <>
        <div className="p-6">
            <h1 className="text-xl font-semibold pb-4">Список клиентов</h1>
            <SearchForm/>
        </div>
        </>
    )
}