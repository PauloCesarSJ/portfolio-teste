import { FakeStore } from "./FakeStore";


export  type Repository = {
    id: number,
    title: string,
    description: string,
    price: number,
    image: any,
  };
  


export function FakeStoreManager () {


return (
    <div>       
        <FakeStore/>
    </div>
)

}