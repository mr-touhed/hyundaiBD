import DataTable from "@/app/components/DataTable";
import { fetchingCustomerData } from "@/app/utils/fetchingData";

const CustomersQueryPage = async () => {
    const data = await fetchingCustomerData('Query');

    return (
        <div className="mt-16">
            <DataTable data={data?.result} type="CustomersQuery"/>
        </div>
    );
};

export default CustomersQueryPage;