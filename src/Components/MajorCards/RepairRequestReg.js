import RepairNav from "../RepairNav";
import RepairForm from "../RepairForm";
import UserRepair from "../UserRepair";
import Footer from "../Footer";
import StoreRepair from "../StoreRepair";
import ProductRepair from "../ProductRepair";
import SsRepair from "../SsRepair";


function RepairRequestReg() {
    return (
        <div>
            <div className="w-full bg-teal-500 space-y-10 > * + * sticky top-0 transition-opacity">
                <>
                    <RepairNav />
                </>

                <div class="inline-flex justify-center items-center w-full bg-teal-500 space-y-10">
                    <hr className="w-full h-px my-8 bg-gray-200 border-0 dark:bg-gray-700"></hr>
                    <h2 class="font-mono absolute left-1/2 px-3 font-large text-gray-900 bg-teal-300 -translate-x-1/2 dark:text-white dark:bg-gray-900 text-4xl">Basic Repair Information</h2>
                </div>
                <div className="h-56 gap-4 content-end ...">
                    <RepairForm />
                </div>
                <div class="inline-flex justify-center items-center w-full bg-teal-500 space-y-10">
                    <hr className="w-full h-px my-8 bg-gray-200 border-0 dark:bg-gray-700"></hr>
                    <h2 class="font-mono absolute left-1/2 px-3 font-large text-gray-900 bg-teal-300 -translate-x-1/2 dark:text-white dark:bg-gray-900 text-4xl">Store</h2>
                </div>
                <div className="h-56 gap-4 content-end ...">
                    <StoreRepair />
                </div>

                <div className="h-40"></div>
                <div class="inline-flex justify-center items-center w-full bg-teal-500 space-y-10 ">
                    <hr className="w-full h-px my-8 bg-gray-200 border-0 dark:bg-gray-700"></hr>
                    <h2 class="font-mono absolute left-1/2 px-3 font-large text-gray-900 bg-teal-300 -translate-x-1/2 dark:text-white dark:bg-gray-900 text-4xl">User</h2>
                </div>

                <div className="h-56 gap-4 content-end ...">
                    <UserRepair />
                </div>
                <div className="h-56"></div>
                <div class="inline-flex justify-center items-center w-full bg-teal-500 space-y-10">
                    <hr className="w-full h-px my-8 bg-gray-200 border-0 dark:bg-gray-700"></hr>
                    <h2 class="font-mono absolute left-1/2 px-3 font-large text-gray-900 bg-teal-300 -translate-x-1/2 dark:text-white dark:bg-gray-900 text-4xl">Product Status</h2>
                </div>
                <div className="h-56 gap-4 content-end ...">
                    <ProductRepair />

                </div>

                <div className="h-60"></div>
                <div class="inline-flex justify-center items-center w-full bg-teal-500 space-y-10">
                    <hr className="w-full h-px my-8 bg-gray-200 border-0 dark:bg-gray-700"></hr>
                    <h2 class="font-mono absolute left-1/2 px-3 font-large text-gray-900 bg-teal-300 -translate-x-1/2 dark:text-white dark:bg-gray-900 text-4xl">SS Request Information</h2>
                </div>
                <div className="h-56 gap-4 content-end ...">
                    <SsRepair />

                </div>
                <div className="h-60"></div>

                <div>
                    <Footer />
                </div>
            </div>
        </div>


    );
}

export default RepairRequestReg;

