function Test() {
  let name: string = "Halil";
  let age: number = 27;
  let done: boolean = true;
  let trial: any = "deneme"; // herhangi bir tipte olabilir
  let phone: number | string = "0535 555 55 55"; // number veya string olabilir

  //Objeler için her değerin type'ını tek tek girmek zor olabilir bunun için type ve interface kullanılır
  /* type */
  type Object = {
    name: string,
    age: number,
    done?: boolean // type tanımlaması yapmadan önce ? koyarak optional yapılır
  }

  let obj: Object = {
    name: "halil",
    age: 27,
   //done: true
  }
  /* */

  /* interface */
  interface IObject {
    name: string,
    age: number,
    done?: boolean,
  }

  interface IObjectTwo extends IObject {
    accept?: boolean
  }

  let iobj: IObjectTwo = {
    name: "halil",
    age: 27,
  }
  /* */

  return (
    <div>
      <div>{name} {age}</div>
      <div>{phone} {done} {trial}</div>
    </div>
  )
}
export default Test;
