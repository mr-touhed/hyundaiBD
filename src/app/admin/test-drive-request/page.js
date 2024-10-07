import DataTable from "@/app/components/DataTable";
import { fetchingCustomerData } from "@/app/utils/fetchingData";

const RequestTestDrivepage = async () => {
    const data = await fetchingCustomerData('Test Drive');

    return (
        <div className="mt-16">
            <DataTable data={data?.result} type="Request_Test_Drive"/>
        </div>
    );
};

export default RequestTestDrivepage;