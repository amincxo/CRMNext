import connectDB from "../utils/connectDB"
import Customer from "../models/Customer"
import HomePage from "../components/template/HomePage";

export default function Index({customers}) {
  return <HomePage customers={customers} />
}

export async function getServerSideProps() {
    try{
        await connectDB();
        const customers = await Customer.find();
        return {
            props: {
                customers: JSON.parse(JSON.stringify(customers))
            }
        }
    }catch (err) {
        return {
            notFound: true
        }
    }
}